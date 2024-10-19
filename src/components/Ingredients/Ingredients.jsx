import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Ingredient from '../Ingredient/Ingredient';
import Navbar from '../Navbar/Navbar';

export default function Ingredients() {
    const [ingredients, setIngredients] = useState([]);

    async function getAllArea() {
      try {
        const { data } = await axios.get(
            "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
        );
        setIngredients(data.meals);
      } catch (error) {
        console.log(error);
      }
    }
  
    
    useEffect(() => {
      getAllArea();
    }, []);
  
    return (
        <div className="app-layout"> 
        <Navbar/>
        <div className="categories-section">
      <div className="container text-center my-5 text-white">
        <h2 className="mb-4">Explore Meal Ingredients</h2>
        <div className="row">
          {ingredients.map((ingredient, index) => (
           <Ingredient ingredient={ingredient}  key={index}/>
          ))}
        </div>
      </div>
      </div>

      </div>

    );
}
