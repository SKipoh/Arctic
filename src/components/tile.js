import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';


function tile(props) {
  return (
      <Link className="tileBase" to={props.link} style={{textDecoration: 'none'}}>
        <div id="title">
          { props.title }
        </div>
        <div id="tileIco">
          { props.icon }
        </div>
          <p>
            { props.desc }
          </p>
      </Link>
  );
}

export default tile;