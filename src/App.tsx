import React, { useEffect, useState } from 'react';
import loadable from '@loadable/component';

import Grid from '@material-ui/core/Grid/Grid';

import './App.css';

import MemeCreator from './MemeCreator/MemeCreator';

const Header = loadable(() => import("./NoReRender/Header"));
const Badges = loadable(() => import("./Badges/Badges"));
const Footer = loadable(() => import("./NoReRender/Footer"));

function App() {

  const [internet, setInternet] = useState(false);

  window.addEventListener("online", () => setInternet(true));
  window.addEventListener("offline", () => setInternet(false));

  if (internet) {return (
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
  )}
  
  else {return (<div>You need internet to use this app</div>)}
}

export default App;