import styles from "./button.module.css";

interface ButtonProps {
    isLink?: boolean,
    text?: string,
    href?: string,
    secondary?: boolean
}

export function Button({ isLink, text, href, secondary }: ButtonProps) {

  return isLink ? 
    <a href={href ? href : '/'} className={`${styles['button-solid']} ${secondary ? styles.secondary : ''}`}>{text}</a> : 
    <button className={styles['button-solid']}>{text}</button>;
}
