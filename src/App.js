import React from 'react';

import { ReactComponent as TestIcon } from './icons/address-card.svg';
import { ReactComponent as CodeIcon } from './icons/code.svg';
import { ReactComponent as MicroIcon } from './icons/microchip.svg';
import { ReactComponent as DeathstarIcon } from './icons/deathstar.svg';
import { ReactComponent as ShuttleIcon } from './icons/spaceshuttle.svg';

//import './App.css';
import './styles/style.css';

function App() {
  return (
    <div>
      <Navbar>
        <NavItem icon={<TestIcon/>} itemText="About"/>
        <NavItem icon={<CodeIcon/>} itemText="Code"/>
        <NavItem icon={<DeathstarIcon/>} itemText="Hacking"/>
        <NavItem icon={<MicroIcon/>} itemText="Other"/>
        <NavItem icon={<ShuttleIcon/>} itemText="SPAACE"/>
      </Navbar>
      <main>
        <h1>Main Page!</h1>
        <p>grinugeranuipaegfdrniuoperhfdgsanipuohesrfainupherafgniopuaehrfdnuipaherdfnu
          iaherdnuierghainuogrehainbuoragewbiynourgheawyibnourghaesUBYIOHGRebyuiogrHWEBYINUOG
          RHwebyinougrHWEYIUOBNgrhwyubinogrhBYINUOHRGbynouirhGWBYOUIRWGHbuyoigrWHEUBYOIGweryboui
          gWERBYUOIgwerbyuoiGWREBUYOIWGerbuyoiwGREBYUIOWGREIBYUOGWRebuyioGWREBYUIOWGRBY</p>
      </main>
      
    </div>
  );
}

function Navbar(props) {
  // "navbar" is the actual coloured bar that runs down the side of the page,
  // with navbar-nav being the html list of items INSIDE "navbar".
  // We can pass in any items we want into. The unorderedlist is the container
  // for the flexbox
  return (
    <nav className="navbar">
        <ul className="navbar-nav"> { props.children }</ul>
    </nav>
  );
}

function NavItem(props) {
  return (
    <li className="nav-item">
      <div  class="nav-link">
        { props.icon }
      </div>
      <div class="link-text">
        {props.itemText}
      </div>
    </li>
  )
}

export default App;
