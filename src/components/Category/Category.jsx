import React from 'react';
import { Link } from 'react-router-dom';


export default function Category({ category }) {
  return (

    <div className="col-md-4 mb-4 ">
      <div className={`card category-card h-100 shadow-lg bg-${category.color}`}>
        <div className="img-container">
          <img
            src={category.strCategoryThumb}
            className="card-img-top img-fluid"
            alt={category.strCategory}
          />
        </div>
        <div className="card-body text-center">
          <h5 className={`card-title text-${category.textColor} fw-bold`}>
            {category.strCategory}
          </h5>
          <p className="card-text text-muted">
            {category.strCategoryDescription.substring(0, 80)}...
          </p>
          <Link to={`${category.strCategory}`} className={`btn btn-warning mt-2`}>
           All Meals For {category.strCategory}
          </Link>
        </div>
      </div>
    </div>
  );
}
