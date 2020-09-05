import React, { lazy, Suspense } from 'react';
import { Grid } from '@material-ui/core';

import './App.css';

const Header = lazy(() => import("./NoReRender/Header"));
const Footer = lazy(() => import("./NoReRender/Footer"));
const MemeCreator = lazy(() => import("./MemeCreator/MemeCreator"));
const Badges = lazy(() => import("./Badges/Badges"));


function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
}

export default App;
