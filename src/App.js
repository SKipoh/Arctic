// Importing any functional/programatic bits, such as react itself,
// the react-router, react-redux etc.
import React from 'react';

// Importing the other main pages and "complete" components for the site
import Home from './pages/Home';
import About from './pages/About';
import Code from './pages/code';
import Electronics from './pages/electronics';
import Hacking from './pages/hacking';

import Nav from './components/navbar';

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
      <Nav />
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

export default App;
