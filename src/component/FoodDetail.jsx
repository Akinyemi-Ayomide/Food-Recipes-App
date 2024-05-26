import { useEffect, useState } from "react";
import styles from "./foodDetail.module.css";
import ItemList from "./ItemList";

export default function FoodDetail({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "684ac6638a184485acb174fc0245ff62";
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}> {food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetail}>
          <span>
            <strong>⌚ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👩‍👩‍👦 Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              🥕 {food.vegetarian ? "Vegetarian" : "Not vegetarian"}
            </strong>
          </span>
          <span>{food.vegan ? "Veggan" : ""}</span>
        </div>
        <div>
          <span>
            <strong>$ {food.pricePerServing / 100} Per serving</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />

        <h2>Instructions</h2>
        <div className={styles.recipeInstruction}>
          <ol>
            {isLoading ? (
              <p>Loading.........</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
