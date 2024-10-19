import axios from "axios";
import React, { useEffect, useState } from "react";
import OneArea from "../OneArea/OneArea";
import Navbar from "../Navbar/Navbar";

export default function Area() {
  const [areas, setAreas] = useState([]);

  async function getAllArea() {
    try {
      const { data } = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      setAreas(data.meals);
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
      <h2 className="mb-4">Explore Meal Areas</h2>
      <div className="row">
        {areas.map((area, index) => (
         <OneArea area={area}  key={index}/>
        ))}
      </div>
    </div>
    </div>
    </div>

  );
}
