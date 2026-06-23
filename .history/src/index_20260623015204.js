import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFile, faLightbulb, faMicrophone, faStar, faStarHalfStroke, faCrown, faLeaf, faUser, faXmark, faMagnifyingGlass, faBars, faPenClip, faBookmark, faHouse, faGear, faCircleQuestion, faArrowRightFromBracket, faCirclePlay, faClock, faBookOpen, fa } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar, faClock as faRegularClock } from '@fortawesome/free-regular-svg-icons';

library.add(faFile, faLightbulb, faMicrophone, faStar, faStarHalfStroke, faCrown, faLeaf, faUser, faXmark, faMagnifyingGlass, faBars, faPenClip, faBookmark, faHouse, faGear, faCircleQuestion, faArrowRightFromBracket, faCirclePlay, faRegularStar, faRegularClock, faClock, faBookOpen); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
