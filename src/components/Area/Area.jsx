import OneArea from "../OneArea/OneArea";
import Navbar from "../Navbar/Navbar";
import useFetchMeals from "../Hooks/useMeal";
import Loading from "../Loading/Loading";

export default function Area() {
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
  const data = useFetchMeals(apiUrl);
  const areas = data.meals;
  console.log(areas);
  if(!areas)return<Loading/>
  return (
    <div className="app-layout">
      <Navbar />
      <div className="categories-section">
        <div className="container text-center my-5 text-white">
          <h2 className="mb-4">Explore Meal Areas</h2>
          <div className="row">
            {areas?.map((area, index) => (
              <OneArea area={area} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
