import styles from "./button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  styleClassName?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  animation?: "slide-right" | "slide-left" | "slide-down" | "slide-up" | "none";
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  disabled?: boolean;
};

export function Button({
  children,
  className = "",
  styleClassName = "",
  variant = "primary",
  size = "medium",
  animation = "none",
  href,
  target,
  rel,
  type = "button",
  onClick,
  disabled = false,
  ...rest
}: ButtonProps) {
  const buttonClassnames = [
    styles.button,
    styles[variant],
    styles[size],
    styles[animation],
    styles[styleClassName],
    disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  if (href) {
    return (
      <a
        href={href}
        className={buttonClassnames}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        onClick={onClick}
        {...rest}
      >
        <span className={styles.buttonContent}>
          {children}
        </span>
      </a>
    );
  }
  return (
    <button
      type={type}
      className={buttonClassnames}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <span className={styles.buttonContent}>
        {children}
      </span>
    </button>
  );
}
