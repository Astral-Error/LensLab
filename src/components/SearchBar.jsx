import React, { useState } from 'react'
import "../App.css"

const SearchBar = ({setSearchText}) => {
    function handleChange(e){
        setSearchText(e.target.value)
    }
    return (
        <div className="search-bar">
        <input id="search-bar" type="text" placeholder="Search" onChange={handleChange}/>
        </div>
    )
}

export default SearchBar
