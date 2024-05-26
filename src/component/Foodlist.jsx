import Fooditem from "./Fooditem";
export default function Foodlist({ foodData, setFoodData, setFoodId }) {
  return (
    <div>
      {foodData.map((food) => (
        <Fooditem setFoodId={setFoodId} key={food.id} food={food} />
      ))}
    </div>
  );
}
