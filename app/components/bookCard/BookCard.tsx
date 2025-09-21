import React from "react";
import styles from "./BookCard.module.css";
import { Button } from "../button/Button";

export type Book = {
  properties: {
    Title: { title: [{ plain_text: string }] };
    Author: { rich_text: [{ plain_text: string }] };
    "My Rating": { number: number };
    Genre: { multi_select: [{ name: string }] };
    "Goodreads Link": { url: string };
  };
  cover: {
    external: { url: string };
  };
};

export type BookCardProps = {
  book: Book;
};

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const title = book.properties.Title?.title[0]?.plain_text;
  const author = book.properties.Author?.rich_text[0]?.plain_text;
  const rating = book.properties["My Rating"]?.number;
  const categories = book.properties.Genre?.multi_select;
  const coverImage = book.cover?.external?.url;
  const reviewLink = book.properties["Goodreads Link"].url;

  return (
    <article className={styles["book-card"]}>
      <div
        className={styles["card-image"]}
        style={{ backgroundImage: `url(${coverImage})` }}
      ></div>
      <div className={styles["card-content"]}>
        <div className={styles["card-header"]}>
          <span className={styles["card-author"]}>{author}</span>
          {reviewLink ? (
            <a href={reviewLink} className={styles["card-title-link"]}>
              <h3 className={styles["card-title"]}>{title}</h3>
            </a>
          ) : (
            <h3 className={styles["card-title"]}>{title}</h3>
          )}
        </div>
        <div className={styles["card-footer"]}>
          {rating > 0 ? (
            <span className={styles["card-rating"]}>{`${rating} ⭐️`}</span>
          ) : null}
          {categories.map((category, index) => (
            <span key={index} className={styles["card-category"]}>
              {category.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BookCard;
