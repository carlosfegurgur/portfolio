'use client';
import { useState } from "react";
import { Button } from "../components/button/Button";
import styles from "./contact.module.css";

export default function Contact() {
    // const emailAccessKey = '8f2d2e01-cf09-4e80-a1b5-05cedb60fdf4';
    const [formData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    // const [isSubmitted, setIsSubmitted] = useState(false);
    // const handleChange = (e: any) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //       ...formData,
    //       [name]: value
    //     });
    //   };
    //   const handleSubmit = (e: any) => {
    //     e.preventDefault();
    //     console.log(formData); // You can replace this with an API call to send data
    //     setIsSubmitted(true);
    //     if (isSubmitted){
    //         window.alert(`Thank you ${formData.name}! Your message has been sent.`)
    //     }
    
    //     // Reset form
    //     setFormData({
    //       name: '',
    //       email: '',
    //       phone: '',
    //       message: ''
    //     });
    //   };

    //   const [result, setResult] = useState("");

//   const onSubmit = async (e: any) => {
//     e.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(e.target);

//     formData.append("access_key", emailAccessKey);

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       e.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

    
  return (
    <section id={styles["contact"]}>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <span className={"topper"}>Reach Out</span>
          <h2 className={"title"}>Get in Touch</h2>
          <p className={"text"}>
            Whether it&lsquo;s fixing an issue on your existing site, building a
            custom website from the ground up, or optimizing your web app for
            performance, I&lsquo;m here to help bring your vision to life. Let&lsquo;s
            collaborate on your next project—reach out and let&lsquo;s get started!
          </p>
          <ul className={styles["ul"]}>
            <li className={styles["li"]}>
              <picture className={styles["icon-wrapper"]}>
                <img
                  aria-hidden="true"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/phone-76.svg"
                  alt="phone icon"
                  className={styles["icon"]}
                  width="40"
                  height="40"
                  decoding="async"
                />
              </picture>
              <div className={styles["flex-group"]}>
                <span className={styles["header"]}>Phone</span>
                <a href="tel:805-215-2118" className={styles["link"]}>
                  +1 (805) 215 2118
                </a>
              </div>
            </li>
            <li className={styles["li"]}>
              <picture className={styles["icon-wrapper"]}>
                <img
                  aria-hidden="true"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mail-76.svg"
                  alt="address icon"
                  className={styles["icon"]}
                  width="40"
                  height="40"
                  decoding="async"
                />
              </picture>
              <div className={styles["flex-group"]}>
                <span className={styles["header"]}>Email</span>
                <a
                  href="mailto:carlosfegurgur@gmail.com"
                  className={styles["link"]}
                >
                  carlosfegurgur@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>
        {/* Form */}
        <form
          className={styles["form"]}
          id={styles["form"]}
          name="Contact Form"
          data-netlify="true"
          method="POST"
        //   onSubmit={onSubmit}
        >
          {/* <h3 className={`${styles["h"]} title`}>Get in Touch</h3> */}
          <label className={styles["label"]}>
            Name
            <input
              className={styles["input"]}
              required
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={formData.name}
            //   onChange={handleChange}
            />
          </label>
          <label className={`${styles["label"]} ${styles["email"]}`}>
            Email
            <input
              className={styles["input"]}
              required
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
            //   onChange={handleChange}
            />
          </label>
          <label className={`${styles["label"]} ${styles["phone"]}`}>
            Phone
            <input
              className={styles["input"]}
              type="number"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
            //   onChange={handleChange}
            />
          </label>
          <label className={styles["label"]}>
            Message
            <textarea
              className={`${styles["label"]} ${styles["textarea"]}`}
              required
              name="message"
              id="message"
              placeholder="Write message..."
              value={formData.message}
            //   onChange={handleChange}
            ></textarea>
          </label>
          <Button isSubmit text="Send Message" />
        </form>
      </div>
    </section>
  );
}
