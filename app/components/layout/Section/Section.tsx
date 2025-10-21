import { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}
export const Section = ({ children, id, className }: SectionProps): JSX.Element => {
  return (
    <section className={`${styles.sectionWrapper} ${className ? className : ''}`} id={id}>
      {children}
    </section>
  );
};
