'use client';
import { ReactNode, useEffect, useRef } from "react";
import styles from "./section.module.css";
import { Button } from "../button/Button";

interface SectionProps {
  name: string;
  style?: object;
  children?: ReactNode;
}
export const Section = ({ name, style, children }: SectionProps): ReactNode => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const title = titleRef.current
    if (!title) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.reveal);
          } else {
            entry.target.classList.remove(styles.reveal);
          }
        });
      },
      {
        rootMargin: '50px 0px 0px 0px',
        threshold: 0,
      }
    );

    observer.observe(title);

    // Optional: clean up observer on unmount
    return () => {
      if (title) observer.unobserve(title);
    };
  }, []);

  return (
    <section id={styles["wrapper"]} style={style}>
      <div className={styles["container"]}>
        <h2 ref={titleRef} className={styles.title}>{name}</h2>
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
};
