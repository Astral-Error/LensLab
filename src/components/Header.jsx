import React from 'react'
import { Link } from "react-router-dom"
import SearchBar from './SearchBar'
import "../App.css"

const Header = ({setSearchText, openModal }) => {
  return (
    <div className="header">
      <h3 className="logo">
        Lens<span>Lab</span>
      </h3>
      <div className="searchbar-head">
      <SearchBar setSearchText={setSearchText} />
      </div>  
      <nav className="nav-links">
        <Link id="home-id" to="/">Home</Link>
        <button id="add" onClick={openModal}><a>+</a></button>
      </nav>
    </div>
  )
}
export default Header
