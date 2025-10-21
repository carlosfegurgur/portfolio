"use client";

import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import { Button } from "../Button/Button";
import { ExternalLink } from "lucide-react";

interface CardProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAltText: string;
  tags?: string[];
  links?: string[];
  rating?: number;
  badge?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  image,
  imageAltText,
  tags,
  links,
}) => {
  return (
    <article className={styles.card}>
      <Image alt={imageAltText} src={image} height={200} width={200}></Image>
      <div className={styles.header}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <div className={styles.tags}>
          {tags?.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        {links?.map((link, index) => {
          if (link !== "") {
            let buttonText;
            if (link.includes("github")) buttonText = "Github";
            else if (link.includes("review")) buttonText = "Review";
            else if (link.includes("goodreads")) buttonText = "GoodReads";
            else buttonText = "Link"
            return (
              <Button href={link} key={index} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={20} /> {buttonText}
              </Button>
            );
          }
        })}
      </div>
    </article>
  );
};

export default Card;
