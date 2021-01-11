import React from 'react';
import styles from './App.module.css';
import Auth from './page/Auth';
import Profile from './page/Profile';
import {BrowserRouter, Switch, Route} from "react-router-dom";


function App({profileDB, authService, imgUpload}) {
  return (
    <div className={styles.display}>
      <i className={`${styles.vision} fas fa-low-vision`}></i>
      <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
        <Switch>
          <Route path={["/", "/login"]} exact>
            <Auth authService={authService} />
          </Route>
          <Route path="/profile" exact>
            <Profile profileDB={profileDB} authService={authService} imgUpload={imgUpload} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>   
  );
}

export default App;
