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
