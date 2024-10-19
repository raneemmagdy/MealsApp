import React from 'react'
import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <div className="welcome-container d-flex align-items-center justify-content-center text-center">
          <div className="welcome-card p-4">
            <h1 className="welcome-title">Welcome to Our Meal Finder!</h1>
            <p className="welcome-message">
              Discover delicious meals from around the world. Let's embark on a culinary adventure together!
            </p>
            <Link to="/categories" className="btn btn-primary btn-lg mt-3">Get Started</Link>
          </div>
        </div>
      );
}
