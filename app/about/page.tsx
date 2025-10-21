import styles from "./about.module.css";
import { Button } from "../components/common/index";
import { getCurrentBooks, getRecentBooks } from "../utils/notionApi";
import { Card as BookCard } from "../components/common/index";
import { NotionBookData } from "../utils/notionApi";
import { getBookData } from "../utils/notionApi";
import { Section } from "../components/layout";

const CurrentlyReadingList = async () => {
  const currentReadBookshelf = await getCurrentBooks();

  if (currentReadBookshelf.length <= 0) return;
  return (
    <div className={styles.crBookshelf}>
      <h3 className={styles.bookshelfTitle}>Currently Reading</h3>
      <div className={styles.bookshelfGrid}>
        {currentReadBookshelf.map((book: NotionBookData, index: number) => (
          <BookCard {...getBookData(book)} key={index} />
        ))}
      </div>
    </div>
  );
};

const RecentlyReadList = async () => {
  const recentReadBookshelf = await getRecentBooks(3);
  return (
    <div className={styles.rrBookshelf}>
      <h3 className={styles.bookshelfTitle}>Recently Read</h3>
      <div className={styles.bookshelfGrid}>
        {recentReadBookshelf.map((book: NotionBookData, index: number) => {
          return <BookCard {...getBookData(book)} key={index} />;
        })}
      </div>
    </div>
  );
};

export default function About() {
  return (
    <Section id="About">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Ahoy!</h1>
          <p className={styles.text}>
            Since you&lsquo;re interested in learning a bit more about me, here
            is some background information! I was born and raised on the island
            of{" "}
            <a
              className={styles.link}
              href="https://en.wikipedia.org/wiki/Guam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Guam Wikipedia page - opens in new tab"
            >
              Guam
            </a>{" "}
            and moved to Chicago in 2018, two years after graduating from
            University where I double majored in Mathematics and Computer
            Science. Majority of my hobbies outside of programming and reading
            are fitness related and I am a pretty avid cyclist, crossfitter, and
            rugby player depending on the season. I also occasionally dabble in
            more creative pursuits, such as graphic design/illustration,
            writing, and{" "}
            <a
              href="https://www.instagram.com/see_los_shoot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Instagram (@see_los_shoot) - opens in new page"
              className={styles.link}
            >
              photography.
            </a>
          </p>
          <div className={styles.btnContainer}>
            <Button href="/#Contact">Get in Touch</Button>
          </div>
        </div>
        <div className={styles.bookshelf}>
          <p className={styles.callout}>
            I consider myself to be a pretty avid reader so below you can find
            some books that I have recently read and am currently reading!
          </p>
          <CurrentlyReadingList />
          <RecentlyReadList />
        </div>
      </div>
    </Section>
  );
}
