import React, { useState } from "react"
import LensCard from "../components/LensCard"
import "../App.css"

const Home = ({lenses, searchText }) => {
    const filteredLenses = lenses.filter((lens) =>
        lens.name.toLowerCase().includes(searchText.toLowerCase())
    )
  return (
      <div className="lens-card-set">
        {filteredLenses.map((lens)=>(
          <LensCard key={lens.id} lens={lens} />
        ))}
      </div>
  )
}

export default Home
