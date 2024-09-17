import styles from "./hero.module.css";
import Image from "next/image";
import headshot from '../../assets/headshot.JPG'
import { Button } from "../button/Button";

export function Hero() {
  return (
    <section id={styles["hero"]}>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <span className={styles["topper"]}>Design and Development</span>
          <h1 className={styles["title"]}>From Concept to Code.</h1>
          <p className={styles["text"]}>
            Hafa Adai! I’m Carlos, a front-end developer specializing in modern
            web applications. From interactive UI/UX to efficient performance, I
            build solutions that are both functional and visually compelling. I
            offer feedback and support from start to finish, taking your ideas
            from concept to code to complete.
          </p>
          <Button isLink text="Get In Touch" href="/contact" />
        </div>
        {/* <!--Hero Image--> */}
        <picture className={styles["picture"]}>
          <Image
            aria-hidden="true"
            decoding="async"
            src={headshot}
            alt="Carlos Fegurgur standing in front of a wall smiling"
            width={2000}
            height={2000}
          />
        </picture>
      </div>
      {/* <!--Change the svg path fill color to whatever color the section below is so you can match it and create the illusion it is all one piece--> */}
      <svg
        className={styles["wave"]}
        width="900"
        height="600"
        viewBox="0 0 900 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#29282a"
          d="M0 476L10 473.2C20 470.3 40 464.7 60 473.7C80 482.7 100 506.3 120 510C140 513.7 160 497.3 180 494.3C200 491.3 220 501.7 240 504C260 506.3 280 500.7 300 509.2C320 517.7 340 540.3 360 542.2C380 544 400 525 420 510.8C440 496.7 460 487.3 480 484.8C500 482.3 520 486.7 540 493.3C560 500 580 509 600 514.5C620 520 640 522 660 515.5C680 509 700 494 720 491.5C740 489 760 499 780 512.2C800 525.3 820 541.7 840 540C860 538.3 880 518.7 890 508.8L900 499L900 601L890 601C880 601 860 601 840 601C820 601 800 601 780 601C760 601 740 601 720 601C700 601 680 601 660 601C640 601 620 601 600 601C580 601 560 601 540 601C520 601 500 601 480 601C460 601 440 601 420 601C400 601 380 601 360 601C340 601 320 601 300 601C280 601 260 601 240 601C220 601 200 601 180 601C160 601 140 601 120 601C100 601 80 601 60 601C40 601 20 601 10 601L0 601Z"
          strokeLinecap="round"
          strokeLinejoin="miter"
        />
      </svg>
    </section>
  );
}
