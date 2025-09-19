"use client";
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import heroStyles from "../hero/hero.module.css";
import galleryStyles from "../gallery/gallery.module.css";
import buttonStyles from '../button/button.module.css';
import Image from "next/image";
import moonIcon from "../../assets/moonIcon.svg";
import sunIcon from "../../assets/sunIcon.svg";

export function Navbar() {
  const [active, setActive] = useState(false);
  const [darkMode, setDarkMode] = useState("light");

  const handleOnClick = () => {
    document.body.classList.toggle(styles.open, !active);
    setActive(!active);
  };

  const enableDarkMode = () => {
    document.body.classList.add(styles["dark-mode"]);
    document.body.classList.add(heroStyles["dark-mode"]);
    document.body.classList.add(galleryStyles["dark-mode"]);
    document.body.classList.add(buttonStyles["dark-mode"]);
    localStorage.setItem("theme", "dark");
    setDarkMode("dark");
  };
  const disableDarkMode = () => {
    document.body.classList.remove(styles["dark-mode"]);
    document.body.classList.remove(heroStyles["dark-mode"]);
    document.body.classList.remove(galleryStyles["dark-mode"]);
    document.body.classList.remove(buttonStyles["dark-mode"]);
    localStorage.setItem("theme", "light");
    setDarkMode("light");
  };

  const detectColorScheme = () => {
    let theme: string | null = "light";

    if (localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme");
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      theme = "dark";
    }

    theme === "dark" ? enableDarkMode() : disableDarkMode();
  };

  useEffect(() => {
    detectColorScheme();
  });

  const handleDarkModeToggle = () => {
    localStorage.getItem("theme") === "light"
      ? enableDarkMode()
      : disableDarkMode();
  };

  return (
    <header
      id={styles["navigation"]}
      className={`${active ? styles.active : ""}`}
    >
      <nav className={styles["container"]} role="navigation">
        {/* <!--Nav Logo--> */}
        <a href="/" className={styles["logo"]} aria-label="back to home">
          <h1 className={styles["logo-text"]}>CF</h1>
        </a>
        {/* <!--Navigation List--> */}
        <div className={styles["ul-wrapper"]}>
          <ul
            id="expanded"
            role="menuitem"
            className={styles["ul"]}
            // eslint-disable-next-line jsx-a11y/aria-proptypes
            aria-expanded={`${active ? "true" : "false"}`}
          >
            <li className={styles.li}>
            </li>
            <li className={styles.li}>
              <a href="/about" className={`${styles["li-link"]}`}>
                About
              </a>
            </li>
            <li className={styles.li}>
              <a href="/projects" className={`${styles["li-link"]}`}>
                Projects
              </a>
            </li>
            <li className={styles.li}>
              <a href="/contact" className={`${styles["li-link"]}`}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Dark Mode toggle */}
        <button
          id={styles["dark-mode-toggle"]}
          aria-label="dark mode toggle"
          onClick={handleDarkModeToggle}
        >
          <Image className={`${styles.moon} ${styles.img}`} src={moonIcon} alt="moon icon" />
          <Image className={styles.sun} src={sunIcon} alt="sun icon" />
        </button>
        {/* <!--Mobile Nav Toggle--> */}
        <button
          onClick={handleOnClick}
          className={`${styles["toggle"]} ${active ? styles.active : ""}`}
          aria-label="mobile menu toggle"
        >
          <div className={styles.box} aria-hidden="true">
            <span
              className={`${styles.line} ${styles.line1}`}
              aria-hidden="true"
            ></span>
            <span
              className={`${styles.line} ${styles.line2}`}
              aria-hidden="true"
            ></span>
            <span
              className={`${styles.line} ${styles.line3}`}
              aria-hidden="true"
            ></span>
          </div>
        </button>
      </nav>
    </header>
  );
}
