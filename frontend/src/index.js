// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom';


import Root from './components/root';

import configureStore from './store/store';

import jwt_decode from 'jwt-decode';

import { setAuthToken } from './util/session_api_util';

import { logout } from './actions/session_actions';


import {fetchScene} from './actions/scene_actions';
import {createExcite, deleteExcite} from './actions/excite_actions'
document.addEventListener('DOMContentLoaded', () => {
  let store;
  
 // window.store = configureStore();
  
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);

    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    // If the user's token has expired
    if (decodedUser.exp < currentTime) {
      // Logout the user and redirect to the login page
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    
    store = configureStore({});
  }
  
  window.getState = store.getState;
  window.createExcite = createExcite;
  window.deleteExcite = deleteExcite;
  window.fetchScene = fetchScene;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');

  


  ReactDOM.render(<Root store={store} />, root);
});


// window.onload = function() {    var backgroundAudio=document.getElementById("my-audio");    

//     backgroundAudio.volume=0.1; 
//     backgroundAudio.play();

//   }