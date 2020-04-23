import React from 'react';
import { ReactComponent as LogoIcon } from '../icons/deathstarDuo.svg';
import '../styles/style.css';

function Home() {
  return (
    <div className="base">
        <Logo logo={<LogoIcon/>} />
        <div className="homeText">Burne Tech</div>
    </div>
  );
}

function Logo(props) {
  return (
    <div className="homeLogo">
      <div>{ props.logo }</div>
    </div>
  )
}

export default Home;
