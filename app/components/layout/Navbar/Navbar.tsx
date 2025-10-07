"use client";
import { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import moonIcon from "../../../assets/moonIcon.svg";
import sunIcon from "../../../assets/sunIcon.svg";
import { useThemeContext } from "@/app/context/ThemeContext";

export function Navbar() {
  const { theme, toggleTheme } = useThemeContext();
  const [active, setActive] = useState(false);

  const handleOnClick = () => {
    document.body.classList.toggle(styles.open, !active);
    setActive(!active);
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
            <li className={styles.li}></li>
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
        <button className={styles.themeToggle} onClick={toggleTheme}>
          {theme === "dark" ? (
            <Image
              className={`${styles.moon} ${styles.img}`}
              src={moonIcon}
              alt="moon icon"
            />
          ) : (
            <Image className={`${styles.sun} ${styles.img}`} src={sunIcon} alt="sun icon" />
          )}
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
