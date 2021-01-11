import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@fortawesome/fontawesome-free/js/all.js';
import ImgUpload from './service/imgUpload_service';
import AuthService from './service/auth_service';
import ProfileDB from './service/profileDB_service';

const authService = new AuthService();
const profileDB = new ProfileDB();
const imgUpload = new ImgUpload();

ReactDOM.render(
  <React.StrictMode>
    <App profileDB={profileDB} imgUpload = {imgUpload} authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);

