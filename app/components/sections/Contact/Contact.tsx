"use client";
import { Button } from "../../common/index";
import styles from "./Contact.module.css";
import { Section } from "../../layout";
import { Mail, MapPin, Send } from "lucide-react";
import { useContactForm } from "@/app/hooks/useContactForm";

export function Contact() {
  const emailAccessKey = "8f2d2e01-cf09-4e80-a1b5-05cedb60fdf4";

  const { formData, result, isSubmitting, handleChange, handleSubmit } =
    useContactForm({
      accessKey: emailAccessKey,
      onSuccess: () => console.log("Form submitted!"),
      onError: (error) => console.error("Form error:", error),
    });

  const skillTags = [
    "React",
    "Javascript",
    "Typescript",
    "Next.js",
    "Git",
    "Storybook",
    "Web Components",
    "Figma",
  ];

  return (
    <Section id="Contact">
      <div className={styles.header}>
        <div>
          <h2 className={styles.headerTitle}>Contact</h2>
          <p className={styles.headerSubtitle}>
            Reach out and let&lsquo;s build something together!
          </p>
        </div>
      </div>
      <div className={styles.content}>
        {/* Form */}
        <form
          className={styles.contactForm}
          name="Contact Form"
          method="POST"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="subject">
            Subject
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="message">
            Message
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
          <Button type="submit"><Send /> Send</Button>
          {result ? (
            <span className={styles.resultSuccess}>{result}</span>
          ) : (
            <span className={styles.resultError}>{result}</span>
          )}
        </form>
        {/* Info */}
        <div className={styles.contactInfo}>
          <div className={styles.name}>
            <h3>Carlos Fegurgur</h3>
            <p>Frontend Developer</p>
          </div>
          <div className={styles.tags}>
            {skillTags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className={styles.location}>
            <span>
              <Mail strokeWidth={1.25} /> carlosfegurgur@gmail.com
            </span>
            <span>
              <MapPin strokeWidth={1.25} /> Chicago, IL
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
