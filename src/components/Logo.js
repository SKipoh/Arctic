import React from 'react';
import '../styles/style.css';

function Logo(props) {
    return (
      <div className="homeLogo">
        <div>{ props.logo }</div>
      </div>
    )
}

export default Logo