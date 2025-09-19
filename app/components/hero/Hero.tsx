import styles from "./hero.module.css";
import Image from "next/image";
import headshotNoBg from "../../public/carlos-no-bg.png";
import { Button } from "../button/Button";

export function Hero() {
  return (
    <section id={styles["wrapper"]}>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <p className={styles["content-topper"]}>Hafa Adai, I&apos;m</p>
          <h2 className={styles["content-title"]}>
            Car<span className={styles["accent"]}>los</span> Fegurgur
          </h2>
          <h1 className={styles["content-text"]}>
            Freelance Web Developer from Guam, based in Chicago
          </h1>
          <div className={styles["btn-container"]}>
            <Button
              href="/contact">
                Get in Touch
            </Button>
          </div>
          <div className={styles["picture-wrapper-mobile"]}>
            <div style={{
              width:'100%',
              paddingBottom: '84%'
            }}></div>
            <picture className={styles['picture-mobile']}>
              <Image
                aria-hidden="true"
                decoding="async"
                src={headshotNoBg}
                priority={true}
                alt="Carlos Fegurgur standing in front of a wall smiling"
              />
            </picture>
          </div>
        </div>
        {/* <!--Hero Image--> */}
        <div className={styles["picture-wrapper"]}>
          <picture className={styles["picture"]}>
            <Image
              aria-hidden="true"
              decoding="async"
              src={headshotNoBg}
              priority={true}
              alt="Carlos Fegurgur standing in front of a wall smiling"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
