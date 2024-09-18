"use client";
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import heroStyles from "../hero/hero.module.css";
import Image from "next/image";
import { Button } from "../button/Button";

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
    localStorage.setItem("theme", "dark");
    setDarkMode("dark");
  };
  const disableDarkMode = () => {
    document.body.classList.remove(styles["dark-mode"]);
    document.body.classList.remove(heroStyles["dark-mode"]);
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
      <div className={styles["container"]}>
        {/* <!--Nav Logo--> */}
        <a href="/" className={styles["logo"]} aria-label="back to home">
          <h1 className={styles["logo-text"]}>
            C<span className={styles["mobile-logo-text"]}>ARLOS </span>F
            <span className={styles["mobile-logo-text"]}>EGURGUR</span>
          </h1>
        </a>
        {/* <!--Navigation List--> */}
        <nav className={styles.nav} role="navigation">
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
          {/* <!-- We need a wrapper div so we can set a fixed height on the ul in case the nav list gets too long from too many dropdowns being opened and needs to have an overflow scroll. This wrapper acts as the background so it can go the full height of the screen and not cut off any overflowing nav items while the ul stops short of the bottom of the screen, which keeps all nav items in view no matter how mnay there are--> */}
          <div className={styles["ul-wrapper"]}>
            <ul
              id="expanded"
              role="menuitem"
              className={styles.ul}
              // eslint-disable-next-line jsx-a11y/aria-proptypes
              aria-expanded={`${active ? "true" : "false"}`}
            >
              <li className={styles.li}>
                <a href="/" className={`${styles["li-link"]}`}>
                  Home
                </a>
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
                <a
                  href="/contact"
                  className={`${styles["li-link"]} ${styles["mobile-only"]}`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Button isLink text="Contact" href="/contact" secondary={darkMode === 'dark' ? true : false}/>
        {/* <!--Dark Mode toggle, uncomment button code if you want to enable a dark mode toggle--> */}
        <button
          id={styles["dark-mode-toggle"]}
          aria-label="dark mode toggle"
          onClick={handleDarkModeToggle}
        >
          <svg
            className={styles.moon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
          >
            <path
              d="M459.782 347.328c-4.288-5.28-11.488-7.232-17.824-4.96-17.76 6.368-37.024 9.632-57.312 9.632-97.056 0-176-78.976-176-176 0-58.4 28.832-112.768 77.12-145.472 5.472-3.712 8.096-10.4 6.624-16.832S285.638 2.4 279.078 1.44C271.59.352 264.134 0 256.646 0c-132.352 0-240 107.648-240 240s107.648 240 240 240c84 0 160.416-42.688 204.352-114.176 3.552-5.792 3.04-13.184-1.216-18.496z"
            />
          </svg>
          <Image
            className={styles.sun}
            aria-hidden="true"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fsun.svg"
            decoding="async"
            alt="moon"
            width="15"
            height="15"
          />
        </button>
      </div>
    </header>
  );
}
