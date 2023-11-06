import { useState } from "react";
import { mealData } from "../data/data";
import { MealsList } from "./MealsList";

export const Meal = () => {
  const [foods, setFoods] = useState(mealData);

  const filterCategory = (category) =>
    setFoods(mealData.filter((item) => item.category === category));

  return (
    <div className="Meal max-w-[1520px] mx-auto py-12 px-4">
      <h1 className="text-2xl text-orange-500 font-bold text-center py-2">
        Our Meals
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex justify-center">
          <button onClick={() => setFoods(mealData)} className="meal-options">All</button>
          <button onClick={() => filterCategory('pizza')} className="meal-options">Pizza</button>
          <button onClick={() => filterCategory('chicken')} className="meal-options">Chicken</button>
          <button onClick={() => filterCategory('salad')} className="meal-options">Salad</button>
        </div>
      </div>
      <MealsList foods={foods} />
    </div>
  );
};
