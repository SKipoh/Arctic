// Importing any functional/programatic bits, such as react itself,
// the react-router, react-redux etc.
import React from 'react';

// Importing the other main pages and "complete" components for the site
import Home from './pages/Home';
import About from './pages/About';
import Code from './pages/code';
import Electronics from './pages/electronics';
import Hacking from './pages/hacking';  

// Importing any SVGs, Icons or other items as components for use in the
// program
import { ReactComponent as TestIcon } from './icons/address-card.svg';
import { ReactComponent as CodeIcon } from './icons/code.svg';
import { ReactComponent as MicroIcon } from './icons/microchip.svg';
import { ReactComponent as DeathstarIcon } from './icons/deathstar.svg';
import { ReactComponent as ShuttleIcon } from './icons/spaceshuttle.svg';
import { ReactComponent as DoubleChevronIcon } from './icons/right-double-chevron.svg';

// Importing Any Stylesheets (both css and sass)
import './styles/style.css';

// Main page for the app, has the Navigation bar always on top, and the main page
// displayed underneath
function App() {
  return (
    <div>
      <Navbar>
        <Logo logo={<DoubleChevronIcon/>} text="Burne Tech"/>
        <NavItem icon={<TestIcon/>} itemText="About"/>
        <NavItem icon={<CodeIcon/>} itemText="Programming Projects"/>
        <NavItem icon={<DeathstarIcon/>} itemText="Pen Testing Writeups"/>
        <NavItem icon={<MicroIcon/>} itemText="Electronics"/>
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
      <div class="nav-link">
        <div>
          { props.icon }
        </div>
        <div class="link-text">
          {props.itemText}
        </div>
      </div>
    </li>
  );
}


function Logo(props) {
  return (
    <li class="logo">
      <div className="nav-link">
        <div class="link-text">{ props.text }</div>
        <div>{ props.logo }</div>
      </div>
    </li>
  );
}

export default App;
