"use client";
import { useState } from "react";
import styles from "./Navbar.module.css";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useThemeContext } from "@/app/context/ThemeContext";

const IconProps = {
  stroke: "var(--text-primary)",
  strokeWidth: 2,
  size: 28,
};

const NavbarLinks = [
  { href: "/about", label: "About" },
  { href: "/#Projects", label: "Projects" },
  { href: "/#Contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useThemeContext();
  const [active, setActive] = useState(false);

  return (
    <header className={`${styles.navigation}`}>
      <nav className={styles.container}>
        <a href="/" className={styles.logo} aria-label="Carlos Fegurgur - Home">
          <span className={styles.logoText} aria-hidden="true">
            CF
          </span>
        </a>
        <ul
          className={`${styles.navList} ${active ? styles.navListActive : ""}`}
        >
          {NavbarLinks.map((link, i) => (
            <li key={i}>
              <a href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.toggleButtons}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Moon {...IconProps} />
            ) : (
              <Sun {...IconProps} />
            )}
          </button>
          <button
            className={styles.mobileMenuToggle}
            onClick={() => setActive(!active)}
            aria-label={active ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={active}
            aria-controls="Main Navigation"
          >
            {active ? <X {...IconProps} /> : <Menu {...IconProps} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
