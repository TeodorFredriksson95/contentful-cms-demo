import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/RecipeCard.module.css";

export default function RecipeCard({ recipe }) {
  const { title, slug, thumbnail, cookingTime } = recipe.fields;
  return (
    <div className={styles.card}>
      <div className="featured">
        <Image
          className={styles.recipeThumbnail}
          alt={title}
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h4>{title}</h4>
          <p>Takes ~ {cookingTime} minutes</p>
        </div>
        <div className={styles.actions}>
          <Link href={"/recipes/" + slug}>Cook this</Link>
        </div>
      </div>
    </div>
  );
}
