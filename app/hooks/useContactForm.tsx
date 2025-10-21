import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface UseContactFormProps {
  accessKey: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export function useContactForm({
  accessKey,
  onSuccess,
  onError,
}: UseContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formDataToSubmit = new FormData(e.target as HTMLFormElement);
    formDataToSubmit.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setTimeout(() => {
          setResult("");
        }, 3000);
        resetForm();
        onSuccess?.();
      } else {
        console.log("Error", data);
        setResult(data.message);
        onError?.(data.message);
      }
    } catch (error) {
      const errorMessage = "Failed to submit form. Please try again.";
      setResult(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    result,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  };
}