import styles from '../bookCard/BookCard.module.css';

export default function SkeletonBookCard() {
  return (
    <article className={`${styles['book-card']} ${styles.skeleton}`}>
      <div className={styles.skeletonCover}></div>
      <div className={styles.info}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonAuthor}></div>
        <div className={styles.skeletonRating}></div>
        <div className={styles.skeletonButton}></div>
      </div>
    </article>
  );
}
