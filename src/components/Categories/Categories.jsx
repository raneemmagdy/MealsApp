
import Category from "../Category/Category";
import Navbar from "../Navbar/Navbar";
import useFetchMeals from "../Hooks/useMeal";
import Loading from "../Loading/Loading";

export default function Categories() {

  const apiUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const data = useFetchMeals(apiUrl);
  const categories = data.categories;
  console.log(categories);
  if(!categories)return<Loading/>

  return (
    <div className="app-layout"> 
      <Navbar /> 
      <div className="categories-section"> 
        <div className="container p-5">
          <h1 className="text-center text-white">All Categories</h1>
          <div className="row g-4">
            {categories?.map((category) => (
              <Category key={category.idCategory} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
