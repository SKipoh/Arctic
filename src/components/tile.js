import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';


function tile(props) {
  return (
      <div className="tileBase">
        <div className="tileTitle">
          { props.title }
        </div>
          { props.icon }
          <p>
            { props.desc }
          </p>
      </div>
  );
}

export default tile;