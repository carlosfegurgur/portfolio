import styles from "./about.module.css";
import { Button } from "../components/button/Button";
import Image from "next/image";

export default function About() {
  return (
    <section id={styles["about"]}>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <span className={styles["topper"]}>My name is</span>
          <h1 className={styles["title"]}>Carlos</h1>
          <p className={styles["text"]}>
            Hafa Adai! I’m Carlos, a front-end developer specializing in modern
            web applications. From interactive UI/UX to efficient performance, I
            build solutions that are both functional and visually compelling. I
            offer feedback and support from start to finish, taking your ideas
            from concept to code to complete.
          </p>
          <Button isLink text="Get In Touch" href="/contact" />
          {/* <!--Hero Image--> */}
          <picture className={styles["picture"]}>
            <Image
              aria-hidden="true"
              decoding="async"
              src="https://picsum.photos/1900"
              alt="Carlos Fegurgur standing in front of a wall smiling"
              width={2000}
              height={2000}
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
