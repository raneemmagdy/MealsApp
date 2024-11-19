
import Ingredient from '../Ingredient/Ingredient';
import Navbar from '../Navbar/Navbar';
import useFetchMeals from '../Hooks/useMeal';
import Loading from '../Loading/Loading';

export default function Ingredients() {

    const apiUrl = "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  const data = useFetchMeals(apiUrl);
  const ingredients = data.meals;
  console.log(ingredients);
  if(!ingredients)return<Loading/>

    return (
        <div className="app-layout"> 
        <Navbar/>
        <div className="categories-section">
      <div className="container text-center my-5 text-white">
        <h2 className="mb-4">Explore Meal Ingredients</h2>
        <div className="row">
          {ingredients?.map((ingredient, index) => (
           <Ingredient ingredient={ingredient}  key={index}/>
          ))}
        </div>
      </div>
      </div>

      </div>

    );
}
