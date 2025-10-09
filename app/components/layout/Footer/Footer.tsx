import styles from "./Footer.module.css";
import { Linkedin, Github, Instagram } from "lucide-react";

export function Footer() {
  const IconProps = {
    stroke: "var(--text-primary)",
    strokeWidth: 1,
    size: 32,
  };

  const SocialLinks = [
    {
      name: "Linkedin",
      url: "https://linkedin.com/in/cfegurgur",
      icon: <Linkedin {...IconProps} />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/carlosaqf",
      icon: <Instagram {...IconProps} />,
    },
    {
      name: "Github",
      url: "https://github.com/carlosfegurgur",
      icon: <Github {...IconProps} />,
    },
  ];

  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Carlos Fegurgur. All rights reserved.</p>
      <div className={styles.socials}>
        {SocialLinks.map((link) => (
          <a
            href={link.url}
            aria-label={link.name}
            target="_blank"
            rel="noopener"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
