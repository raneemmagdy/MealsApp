import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchMeals from '../Hooks/useMeal';
import Loading from '../Loading/Loading';

export default function MealDetails() {
  let { id } = useParams(); 

  const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const data = useFetchMeals(apiUrl);

  if (!data) return <div>Loading...</div>; 
  if (!data.meals) return <div>No meal found!</div>; 

  const meal = data.meals[0];
  if(!meal)return<Loading/>
 
  return (
    <div className="meal-details container m-5">
      <div className="row align-items-start">
        {/* Meal Image Section */}
        <div className="col-md-6">
          <img
            src={meal?.strMealThumb}
            alt={meal?.strMeal}
            className="img-fluid meal-image"
          />
        </div>

        
        <div className="col-md-6 text-white">
          <h2>{meal?.strMeal}</h2>
          <p className="meal-area-category">
            <strong>Area:</strong> {meal?.strArea} | <strong>Category:</strong> {meal?.strCategory}
          </p>

          <div className="meal-buttons">
            <button
              className="btn btn-danger m-2"
              data-bs-toggle="collapse"
              data-bs-target="#instructions"
            >
              Instructions
            </button>
            <button
              className="btn btn-warning m-2"
              data-bs-toggle="collapse"
              data-bs-target="#ingredients"
            >
              Ingredients
            </button>
          </div>

          
          <div className="collapse" id="instructions">
            <h4>Instructions</h4>
            <p>{meal?.strInstructions}</p>
          </div>

         
          <div className="collapse" id="ingredients">
            <h4>Ingredients</h4>
            <ul>
              {Array.from({ length: 20 }, (_, index) => {
                const ingredient = meal[`strIngredient${index + 1}`];
                const measure = meal[`strMeasure${index + 1}`];
                if (ingredient) {
                  return (
                    <li key={index}>
                      {measure} {ingredient}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
