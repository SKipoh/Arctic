import React from 'react';
import { ReactComponent as LogoIcon } from '../icons/deathstarDuo.svg';
import '../styles/style.css';

// Importing the Tile Component
import Tile from '../components/tile';

// Importing Icons
import { ReactComponent as CodeIcon } from '../icons/CodeDuo.svg';
import { ReactComponent as MicroIcon } from '../icons/microchipDuo.svg';

function Home() {
  return (
    <div id="home">
      <div className="base">
        <Logo logo={<LogoIcon/>} />
        <div className="homeText">Burne Tech</div>
      </div>

      <div className="homeText" id="tile">
        <Tile 
          title="Programming Projects" 
          icon={<CodeIcon/>}
          desc="A variety of programming projects in different languages & areas. Maze Solving, Web Design, Data Science & More"
        />
        <Tile 
          title="Electronics Projects"
          icon={<MicroIcon/>}
          desc="Analogue & Digital electronics projects. Everything from CPU design to guitar effects pedals to 3D printing & Radio Astronomy"
        />
      </div>
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
