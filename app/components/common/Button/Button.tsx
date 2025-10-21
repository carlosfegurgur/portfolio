import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

type BaseButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "full";
  className?: string;
  disabled?: boolean;
};

type ButtonAsButton = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: never;
  };

type ButtonAsLink = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    href?: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const { children, variant = 'primary', size = 'md', className, disabled, ...rest } = props;
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ('href' in rest && rest.href) {
    const { href, target, ...linkProps } = rest;
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
        aria-disabled={disabled}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      disabled={disabled}
      {...rest as React.ButtonHTMLAttributes<HTMLButtonElement>}
    >
      {children}
    </button>
  );
})

Button.displayName = "Button";