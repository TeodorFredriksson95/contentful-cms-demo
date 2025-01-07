import React from "react";
import styles from "../styles/Skeleton.module.css";

export default function Skeleton() {
  return (
    <div className={styles.Skeleton}>
      <div className={styles.SkeletonBanner}></div>
      <div className={styles.SkeletonHeader}></div>
      <div className={styles.SkeletonContent}></div>
      <div className={styles.SkeletonContent}></div>
      <div className={styles.SkeletonContent}></div>
      <div className={styles.SkeletonContent}></div>
    </div>
  );
}
