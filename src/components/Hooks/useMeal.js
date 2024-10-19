
import { useState, useEffect } from "react";
import axios from "axios";


export default function useFetchMeals(url) {
  const [meals, setMeals] = useState([]);
  

  async function getMeals() {
    try {
      const { data } = await axios.get(url);
      setMeals(data.meals);
   
    } catch (err) {
     console.log(err)
    }
  }

  useEffect(() => {
    if (url) {
      getMeals();
    }
  }, []); // Depend on `url` to re-fetch meals when it changes

  return { meals};
}
