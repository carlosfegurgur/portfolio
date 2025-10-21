import styles from '../SkeletonCard/SkeletonCard.module.css';

export const SkeletonCard = () => {
  return (
    <article className={`${styles.skeleton}`}>
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
