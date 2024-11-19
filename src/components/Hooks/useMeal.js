
import { useState, useEffect } from "react";
import axios from "axios";


export default function useFetchMeals(url) {
  const [meals, setMeals] = useState([]);
  

  async function getMeals() {
    try {
      const { data } = await axios.get(url);
      setMeals(data);
      console.log(data);
      
   
    } catch (err) {
     console.log(err)
    }
  }

  useEffect(() => {
    
      getMeals();
    
  }, []); 

  return meals;
}
