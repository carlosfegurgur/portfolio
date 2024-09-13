import Image from "next/image";
import styles from "./gallery.module.css";
import arrowRight from "../../assets/arrowRight.svg";
import React, { ReactNode } from "react";
import { Button } from "../button/Button";

interface GalleryProps {
  projects: ProjectProps[];
}

interface ProjectProps {
  title: string;
  src: string;
  altText?: string;
  description: string;
}

export const Gallery = ({ projects }: GalleryProps): ReactNode => {
  const HoverBox = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }): ReactNode => {
    return (
      <div className={styles["hover-box"]}>
        <picture className={styles.icon}>
          <Image
            loading="lazy"
            decoding="async"
            src={arrowRight}
            alt="arrow pointing right icon"
            width="20"
            height="20"
            aria-hidden="true"
          />
        </picture>
        <h3 className={styles.h3}>{title}</h3>
        <p className={styles["hover-box-text"]}>{description}</p>
      </div>
    );
  };

  const TileImage = ({
    src,
    altText,
  }: {
    src: string;
    altText?: string;
  }): ReactNode => {
    return (
      <picture className={styles.picture}>
        <Image
          loading="lazy"
          decoding="async"
          src={src}
          alt={altText || "placeholder image for project"}
          width="346"
          height="346"
        />
      </picture>
    );
  };
  return projects ? (
    <section id={styles["gallery"]}>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <h2 className={styles["title"]}>Recent Projects</h2>
          {/* <p className={styles.text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit.
          </p> */}
        </div>
        <div className={styles["image-group"]}>
          {projects.map((project: ProjectProps, index: number) => (
            <a
              className={styles.item}
              href={`/projects/${project.title}`}
              key={index}
            >
              <TileImage src={project.src} altText={project.altText} />
              <HoverBox
                title={project.title}
                description={project.description}
              />
            </a>
          ))}
        </div>
        <Button isLink text="View All" href="/projects" />
      </div>
    </section>
  ) : (
    <></>
  );
};
