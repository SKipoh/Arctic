import React from 'react';
import '../styles/style.css';

function searchBar() {
    return (
        <div className="SearchBar">
            <input name="Search" type="text" className="input" placeholder=""/>
            <label for="Search" className="label">Search...</label>
      </div>
    )
}

export default searchBar;