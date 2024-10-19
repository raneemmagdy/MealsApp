import { useParams } from 'react-router-dom';
import Meal from '../Meal/Meal';
import useFetchMeals from '../Hooks/useMeal';

export default function AllMealsForArea() {
    let { id } = useParams();
    console.log(id);

    
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`; 
    const { meals } = useFetchMeals(apiUrl);

   

    return (
        <>
            <div className="container py-5">
                <div className="row g-4">
                    {meals.map((meal) => (
                        <Meal key={meal.idMeal} meal={meal} />
                    ))}
                </div>
            </div>
        </>
    );
}
