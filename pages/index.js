import { createClient } from "contentful";
import RecipeCard from "../components/RecipeCard";
import styles from "../styles/RecipeCard.module.css";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: "master", // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const test = 0;
  try {
    const res = await client.getEntries({ content_type: "recipe" });
    return {
      props: {
        recipes: res.items,
        revalidate: 1,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        recipes: null,
        revalidate: 1,
      },
    };
  }
}

export default function Recipes({ recipes }) {
  return (
    <div className={styles.recipeList}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}
    </div>
  );
}
