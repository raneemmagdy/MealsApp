import React from 'react'
import { Link } from 'react-router-dom'

export default function Ingredient({ingredient}) {
  return (
    <div className="col-md-4 col-lg-3 mb-4">
    <Link to={`${ingredient.strIngredient}`} className='text-decoration-none'>
        <div className="area-card p-3">
          <h3 className="area-name">{ingredient.strIngredient}</h3>
        </div>
    </Link>
      </div>
  )
}
