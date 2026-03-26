import React from 'react'
import { Link } from "react-router-dom"
import "../App.css"

function LensCard({lens}){
  return (
    <Link className="lens-card-link" to={`/lens/${lens.id}`}>
      <div className="lens-card">

        <div className="lens-card-title">
          <h3>{lens.name}</h3>
          <span className="lens-card-brand">{lens.brand}</span>
        </div>

          <div className="card-spec">
            <span>Focal Length</span>
            <strong>{lens.fl}</strong>
          </div>

          <div className="card-spec">
            <span>Aperture</span>
            <strong>{lens.aperture}</strong>
          </div>

          <div className="card-spec">
            <span>Mount</span>
            <strong>{lens.mount}</strong>
          </div>

          <div className="card-spec">
            <span>Weight</span>
            <strong>{lens.wght}</strong>
          </div>

      </div>
    </Link>
  )
}

export default LensCard