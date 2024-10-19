import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Categories from './components/Categories/Categories'
import Area from './components/Area/Area'
import Ingredients from './components/Ingredients/Ingredients'

import NotFound from './components/NotFound/NotFound'
import AllMeals from './components/AllMeals/AllMeals'
import MealDetails from './components/MealDetails/MealDetails'
import AllMealsForArea from './components/AllMealsForArea/AllMealsForArea'
import AllMealsForIngredient from './components/AllMealsForIngredient/AllMealsForIngredient'
import Welcome from './components/Welcome/Welcome'

export default function App() {

 let routes=createBrowserRouter([
  { path: '/', element: <Welcome /> },
  { path: 'categories', element: <Categories /> },
  { path: 'categories/:id', element: <AllMeals/> },
 

  { path: '/:id', element: <MealDetails/> },
  { path: 'area', element: <Area /> },
  { path: 'area/:id', element: <AllMealsForArea /> },

  { path: 'ingredients', element: <Ingredients /> },
  { path: 'ingredients/:id', element: <AllMealsForIngredient /> },

  { path: '*', element: <NotFound/> },

]);


  return (
    <>
    <RouterProvider router={routes}/>
    
    </>
  )
}
