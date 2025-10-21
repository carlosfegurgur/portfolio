import styles from "./Hero.module.css";
import Image from "next/image";
import headshot from "@/app/public/headshotDesktop.png";
import { Button } from "../../common/index";
import { SocialLinks } from "../../layout/Footer/Footer";
import { Section } from "../../layout";

export function Hero(): JSX.Element {
  return (
    <Section id="Hero" className={styles.wrapper}>
      <div className={styles.content}>
        <p>Hafa Adai, I&apos;m</p>
        <h1 className={styles.title}>
          Car<span className={styles.accent}>los</span> Fegurgur
        </h1>
        <h3 className={styles.subtitle}>
          Frontend Developer from Guam, based in Chicago
        </h3>
        <div className={styles.buttons}>
          <Button href="/#Contact">Get in Touch</Button>
          <div className={styles.socials}>
            {SocialLinks.filter(
              (link) => link.name === "Github" || link.name === "Linkedin"
            ).map((link, index) => (
              <a
                href={link.url}
                key={index}
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          fetchPriority="high"
          priority={true}
          loading="eager"
          src={headshot}
          alt="Picture of Carlos Fegurgur smiling."
        />
      </div>
    </Section>
  );
}
