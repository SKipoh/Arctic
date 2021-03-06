import React from 'react';
import '../styles/style.css';

// Importing the Tile Component
import Tile from '../components/tile';
import Logo from '../components/Logo';

// Importing Icons
import { ReactComponent as LogoIcon } from '../icons/deathstarDuo.svg';
import { ReactComponent as CodeIcon } from '../icons/CodeDuo.svg';
import { ReactComponent as MicroIcon } from '../icons/microchipDuo.svg';
import { ReactComponent as SecretAgentIcon } from '../icons/secretAgentDuo.svg';
import { ReactComponent as AboutIcon } from '../icons/address-cardDuo.svg';


function Home() {
  return (
    <div id="home">
      <div className="base">
        <Logo logo={<LogoIcon/>} />
        <div className="homeText">Burne Tech</div>
      </div>

      <div className="homeText" id="tile">
        <Tile id="tile"
          title="Programming Projects" 
          icon={<CodeIcon/>}
          desc="A variety of programming projects in different languages & areas. Maze Solving, Web Design, Data Science & More"
          link="/code"
        />
        <Tile id="tile"
          title="Electronics Projects"
          icon={<MicroIcon/>}
          desc="Analogue & Digital electronics projects. Everything from CPU design to guitar effects pedals to 3D printing & Radio Astronomy"
          link="/electronics"
        />
        <Tile id="tile"
          title="Penetration Testing Write-Ups"
          icon={<SecretAgentIcon/>}
          desc="Write-Ups from my adventures in Penetration Testing, Usually including sites like HackTheBox & TryHackMe"
          link="/hacking"
        />
        <Tile id="tile"
          title="About"
          icon={<AboutIcon/>}
          desc="About This Website"
          link="/about"
        />
     {/*    <Tile id="tile"
          title="Login"
          icon={<LoginIcon/>}
          desc="Login for moooooore"
        /> */}
      </div>
    </div>
  );
}

export default Home;
