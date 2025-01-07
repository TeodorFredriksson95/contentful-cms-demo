import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "../../styles/RecipeSlug.module.css";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: "master", // defaults to 'master' if not set
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "recipe",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
const test = 0;
export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "recipe",
    "fields.slug": params.slug,
  });

  return {
    props: {
      recipe: items[0],
    },
    revalidate: 1,
  };
}

export default function RecipeDetails({ recipe }) {
  const { title, ingredients, cookingTime, method, featuredImage } = recipe.fields;
  const url = "https:" + featuredImage.fields.file.url;
  const test = 0;
  return (
    <div>
      <div className={styles.banner}>
        <Image src={url} width={1200} height={500} alt={title} />
        <h2 className={styles.heading}>{title}</h2>
      </div>
      <div className="info">
        <p>Takes about {cookingTime} minutes to cook</p>
        <h3 className={styles.heading}>Ingredients:</h3>
        {ingredients.map((ing) => (
          <ul key={ing}>-{ing}</ul>
        ))}
      </div>
      <div className="method">
        <h3 className={styles.heading}>Method:</h3>
        <div>{documentToReactComponents(method)}</div>
      </div>
    </div>
  );
}
