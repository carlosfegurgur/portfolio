import styles from "./button.module.css";

interface ButtonProps {
  isLink?: boolean;
  isSubmit?: boolean;
  text?: string;
  href?: string;
  secondary?: boolean;
}

export function Button({
  isLink,
  isSubmit,
  text,
  href,
  secondary,
}: ButtonProps) {
  return isLink ? (
    <a
      href={href ? href : "/"}
      className={`${styles["button-solid"]} ${
        secondary ? styles.secondary : ""
      }`}
    >
      {text}
    </a>
  ) : isSubmit ? (
    <button
      className={`${styles["button-solid"]} ${styles["submit"]}`}
      type="submit"
    >
      {text}
    </button>
  ) : (
    <button className={styles["button-solid"]}>{text}</button>
  );
}
