import { useParams } from "react-router-dom";
import Meal from "../Meal/Meal";
import useFetchMeals from "../Hooks/useMeal";
import Loading from "../Loading/Loading";

export default function AllMealsForIngredient() {
  let { id } = useParams();
  console.log(id);

  const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`;
  const data = useFetchMeals(apiUrl);
  const meals = data.meals;
  console.log(meals);
  if(!meals)return<Loading/>
  return (
    <>
      <div className="container py-5">
        <div className="row g-4">
          {meals?.map((meal) => (
            <Meal key={meal.idMeal} meal={meal} />
          ))}
        </div>
      </div>
    </>
  );
}
