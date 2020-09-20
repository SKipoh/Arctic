import React from 'react';
import '../styles/style.css';

function searchBar() {
    return (
        <div class="SearchBar">
            <input type="text" name="Search" className="input" placeholder=" " onChange={handleChanger}/>
            <label className="label" for="Search">Search...</label>
      </div>
    )
}

export default searchBar;