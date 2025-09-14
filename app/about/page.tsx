import styles from "./about.module.css";
import { Button } from "../components/button/Button";
import Image from "next/image";
import BookCard from "../components/bookCard/BookCard";
import SkeletonBookCard from "../components/skeletonCard/SkeletonCard";
import { getCurrentBooks, getRecentBooks } from "../utils/notionApi";

export default async function About() {
  const currentReadBookshelf = await getCurrentBooks();
  const recentReadBookshelf = await getRecentBooks(6);

  return (
    <section id={styles["about"]}>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <span className={styles["topper"]}>My name is</span>
          <h1 className={styles["title"]}>Carlos</h1>
          <p className={styles["text"]}>
            Hafa Adai! I’m Carlos, a front-end developer specializing in modern
            web applications. From interactive UI/UX to efficient performance, I
            build solutions that are both functional and visually compelling. I
            offer feedback and support from start to finish, taking your ideas
            from concept to code to complete.
          </p>
          <div className={styles['btn-container']}>
            <Button href="/projects">See my Work</Button>
            <Button href="/contact">Get in Touch</Button>
          </div>
        </div>
        <div className={styles["bookshelf"]}>
          <h1 className={styles[""]}>Currently Reading</h1>
          {/* BOOKSHELF COMPONENT */}
          <div className={styles["bookshelf-grid"]}>
            {currentReadBookshelf.map((book: any, index: number) => (
              <BookCard book={book} key={index} />
            ))}
          </div>
          <h1 className={styles[""]}>Recently Read</h1>
          {/* BOOKSHELF COMPONENT */}
          <div className={styles["bookshelf-grid"]}>
            {recentReadBookshelf.map((book: any, index: number) => (
              <BookCard book={book} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
