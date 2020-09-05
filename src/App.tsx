import React from 'react';
import loadable from '@loadable/component';
import { Grid } from '@material-ui/core';

import './App.css';

const Header = loadable(() => import("./NoReRender/Header"));
const Footer = loadable(() => import("./NoReRender/Footer"));
const MemeCreator = loadable(() => import("./MemeCreator/MemeCreator"));
const Badges = loadable(() => import("./Badges/Badges"));


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
