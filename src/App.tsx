import React from 'react';

import Header from './NoReRender/Header';
import MemeCreator from './MemeCreator/MemeCreator';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header head="Meme Generator" />
      <MemeCreator />
    </div>
  );
}

export default App;
