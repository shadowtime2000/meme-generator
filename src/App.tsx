import React from 'react';
import loadable from '@loadable/component';

import Grid from '@material-ui/core/Grid/Grid';

import './App.css';

import Header from './NoReRender/Header';
import MemeCreator from './MemeCreator/MemeCreator';

const Badges = loadable(() => import( /* webpackChunkName: "badges" */ "./Badges/Badges"));
const Footer = loadable(() => import( /* webpackChunkName: "footer" */ "./NoReRender/Footer"));

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
