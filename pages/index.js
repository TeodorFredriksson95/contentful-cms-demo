import { createClient } from "contentful";
import RecipeCard from "../components/RecipeCard";
import styles from "../styles/RecipeCard.module.css";

const testvariable = 0;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: "master", // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  try {
    const res = await client.getEntries({ content_type: "recipe" });
    return {
      props: {
        recipes: res.items,
      },
      revalidate: 1,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        recipes: null,
      },
      revalidate: 1,
    };
  }
}

export default function Recipes({ recipes }) {
  return (
    <div>
      <div className={styles.recipeList}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.sys.id} recipe={recipe} />
        ))}
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11524.153297119334!2d17.972755446264454!3d59.29618791427333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7652fd27136d%3A0xa4616c0dfb24cdc9!2sKl%C3%A4ttercentret%20Telefonplan!5e0!3m2!1sen!2sse!4v1736628950285!5m2!1sen!2sse"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
}
