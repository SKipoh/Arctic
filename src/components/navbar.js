import React from 'react';
import '../styles/style.css';

// Importing any SVGs, Icons or other items as components for use in the
// program
import { ReactComponent as AboutIcon } from '../icons/address-cardDuo.svg';
import { ReactComponent as CodeIcon } from '../icons/CodeDuo.svg';
import { ReactComponent as MicroIcon } from '../icons/microchipDuo.svg';
import { ReactComponent as SecretAgentIcon } from '../icons/secretAgentDuo.svg';
import { ReactComponent as ShuttleIcon } from '../icons/spaceshuttleDuo.svg';
import { ReactComponent as DoubleChevronIcon } from '../icons/doubleRightChevronDuo.svg';
import { ReactComponent as HomeIcon } from '../icons/houseDuo.svg';

function Navigation() {
  return (
    <Navbar>
        <Logo logo={<DoubleChevronIcon/>} text="Burne Tech"/>
        <NavItem icon={<HomeIcon/>} itemText="Home"/>
        <NavItem icon={<CodeIcon/>} itemText={<div className="linebreak">{"Programming\nProjects"}</div>}/>
        <NavItem icon={<SecretAgentIcon/>} itemText={<div className="linebreak">{"Pen Testing\n Writeups"}</div>}/>
        <NavItem icon={<MicroIcon/>} itemText="Electronics"/>
        <NavItem icon={<AboutIcon/>} itemText="About"/>
        <NavItem icon={<ShuttleIcon/>} itemText="SPAACE"/>
      </Navbar>
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

export default Navigation;
