import React from 'react';

import Header from './NoReRender/Header';
import Footer from './NoReRender/Footer';
import MemeCreator from './MemeCreator/MemeCreator';
import Badges from './Badges/Badges';

import { Grid } from '@material-ui/core';

import './App.css';

function App() {
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header head="Meme Generator" />
          <Badges />
        </Grid>
        <Grid item xs={12}>
          <MemeCreator /><br />
        </Grid>
        <Grid item xs={12}>
          <Footer link="https://memegen.link" cleanLink="memegen.link" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
