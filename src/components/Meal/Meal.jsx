import React from 'react'
import { Link } from 'react-router-dom'

export default function Meal({meal}) {
  return (
    <>
    <div  className="col-md-4">
          <Link to={`/${meal.idMeal}`}>
          
          <div className="meal-card">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="img-fluid meal-image"
              />
              <div className="meal-overlay">
                <h5>{meal.strMeal}</h5>
              </div>
            </div>
          
          </Link>
          </div>
    </>
  )
}
