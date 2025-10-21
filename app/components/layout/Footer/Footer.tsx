import styles from "./Footer.module.css";
import { Linkedin, Github, Instagram } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ReactNode } from "react";


const IconProps: LucideProps = {
  stroke: "var(--text-primary)",
  strokeWidth: 1,
  size: 32,
};

interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
}
export const SocialLinks: ReadonlyArray<SocialLink> = [
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

export function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Carlos Fegurgur. All rights reserved.</p>
      <div className={styles.socials}>
        {SocialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            aria-label={link.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
