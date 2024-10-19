import React from 'react'
import { Link } from 'react-router-dom'

export default function OneArea({area}) {
  return (
  
    <div className="col-md-4 col-lg-3 mb-4">
        <Link to={`${area.strArea}`} className='text-decoration-none'>
            <div className="area-card p-3">
              <h3 className="area-name">{area.strArea}</h3>
            </div>
        </Link>
          </div>
 
  )
}
