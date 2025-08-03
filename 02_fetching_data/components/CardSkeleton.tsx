import styles from "../styles/card-skeleton.module.css"

export default function CardSkeleton() {
  return (
    <div className={styles.tweet}>
      <div className={styles.skeleton}>
        <div className={styles.skeletonAvatar}></div>
        <div className={styles.tweetContent}>
          <div className={styles.tweetHeader}>
            <div
              className={`${styles.skeletonLine} ${styles.skeletonLineHeading}`}
              style={{ width: '60%' }}
            ></div>
          </div>

          <div className={styles.tweetText}>
            <div className={styles.skeletonLine} style={{ width: '90%' }}></div>
            <div className={styles.skeletonLine} style={{ width: '100%' }}></div>
            <div className={styles.skeletonLine} style={{ width: '35%' }}></div>
          </div>

          <div className={styles.skeletonImg}></div>

          <div className={styles.tweetFooter}>
            <div className={`${styles.skeletonButton} ${styles.skeletonButtonRounded}`}></div>
            <div className={`${styles.skeletonButton} ${styles.skeletonButtonRounded}`}></div>
            <div className={`${styles.skeletonButton} ${styles.skeletonButtonRounded}`}></div>
            <div className={`${styles.skeletonButton} ${styles.skeletonButtonRounded}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
