import axios from "axios";
import React, { useEffect, useState } from "react";
import Category from "../Category/Category";
import Navbar from "../Navbar/Navbar";

export default function Categories() {
  let [categories, setCategories] = useState([]);

  async function getAllCategories() {
    let data = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    setCategories(data.data.categories);
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="app-layout"> 
      <Navbar /> 
      <div className="categories-section"> 
        <div className="container p-5">
          <h1 className="text-center text-white">All Categories</h1>
          <div className="row g-4">
            {categories.map((category) => (
              <Category key={category.idCategory} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
