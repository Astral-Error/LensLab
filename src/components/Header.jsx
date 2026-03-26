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
      <SearchBar setSearchText={setSearchText} />
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <button id="add" onClick={openModal}><a>+</a></button>
      </nav>
    </div>
  )
}

export default Header
