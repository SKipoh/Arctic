import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';


function tile(props) {
  return (
      <div className="tileBase">
        <div id="title">
          { props.title }
        </div>
        <div id="tileIco">
          { props.icon }
        </div>
          <p>
            { props.desc }
          </p>
      </div>
  );
}

export default tile;