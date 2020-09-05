import React from 'react';
import { Link } from 'react-router-dom';
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
        <NavItem icon={<HomeIcon/>} itemText="Home" link="/"/>
        <NavItem icon={<CodeIcon/>} itemText={<div className="linebreak">{"Programming\nProjects"}</div>} link="/code"/>
        <NavItem icon={<SecretAgentIcon/>} itemText={<div className="linebreak">{"Pen Testing\n Writeups"}</div>} link="/hacking"/>
        <NavItem icon={<MicroIcon/>} itemText="Electronics" link="/electronics"/>
        <NavItem icon={<AboutIcon/>} itemText="About" link="/about"/>
        <NavItem icon={<ShuttleIcon/>} itemText="SPAACE" link="/login"/>
      </Navbar>
  );
}


function Navbar(props) {
  // "navbar" is the actual coloured bar that runs down the side of the page,
  // with navbar-nav being the html list of items INSIDE "navbar".
  // We can pass in any items we want into it as a props.child. The unorderedlist
  // is the container for the flexbox
  return (
    <nav className="navbar">
        <ul className="navbar-nav"> { props.children }</ul>
    </nav>
  );
}


function NavItem(props) {
  return (
    <Link className="nav-item" to={props.link}>
      <li>
        <div class="nav-link">
          <div>
            { props.icon }
          </div>
          <div class="link-text">
            {props.itemText}
          </div>
        </div>
      </li>
    </Link>
  );
}


function Logo(props) {
  return (
    <Link className="logo" to="/">
      <li>
        <div className="nav-link">
          <div className="link-text">{ props.text }</div>
          <div>{ props.logo }</div>
        </div>
      </li>
    </Link>
  );
}

export default Navigation;
