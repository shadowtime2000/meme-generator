import React from 'react';

import Header from './NoReRender/Header';
import Footer from './NoReRender/Footer';
import MemeCreator from './MemeCreator/MemeCreator';
import Badges from './Badges/Badges';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header head="Meme Generator" />
      <Badges />
      <MemeCreator /><br />
      <Footer link="https://memegen.link" cleanLink="memegen.link" />
    </div>
  );
}

export default App;
