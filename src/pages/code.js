import React from 'react';
import '../styles/style.css';

import Logo from '../components/Logo';
import SearchBar from '../components/searchBar';

import { ReactComponent as CodeIcon } from '../icons/CodeDuo.svg';

function Code() {
  return (
    <div className="home">
      <div id="Code" className="base">
        <Logo logo={<CodeIcon/>} />
        <div className="homeText">
          <div>Programming</div>
          <div>Projects</div>
        </div>
      </div>
      <SearchBar/>
    </div>
  );
}

export default Code;
