import { Section } from "../../layout/index";
import { Button } from "../../common/index";
import styles from "../About/About.module.css";
import { Download } from "lucide-react";

export function About() {
  return (
    <Section id="About">
      <div className={styles.header}>
        <div>
          <h2 className={styles.headerTitle}>About</h2>
          <p className={styles.headerSubtitle}>Background & Skills</p>
        </div>
        {/* TODO: Fix Resume Download */}
        {/* <Button variant="outline" className={styles.headerDownload}>
            <Download /> Download Resume
        </Button> */}
      </div>
      <div className={styles.content}>
        <p>
          I’m a front-end developer who enjoys building fast, accessible, and
          maintainable web experiences. I work primarily with React and Next.js,
          both professionally and in personal projects, where I focus on clean
          architecture, responsive design, and smooth interactions.{" "}
        </p>
        <br />
        <p>
          While I enjoy working with frameworks, I have a strong appreciation
          for the fundamentals—vanilla JavaScript and CSS are at the core of how
          I think about building for the web. I believe great UI starts with a
          solid foundation and attention to detail.
        </p>
        <br />
        <p>
          I’m always looking for opportunities to contribute to meaningful
          digital products—whether that&lsquo;s through full-time roles or
          freelance work. My goal is to bring clarity and care to everything I
          build, helping teams and clients create intuitive, performant
          interfaces that people enjoy using.
        </p>
        <Button href={"/about"}>Learn More</Button>
      </div>
    </Section>
  );
}
