import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UseReducer from './Components/UseReducer';
import reportWebVitals from './reportWebVitals';
import StateT from './Components/stateT';

import ClearFun from './Components/ClearFun';
import UseEffect from './Components/UseEffect';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <StateT/>
    <UseReducer/>
    <UseEffect/>
    <ClearFun/>
  
    
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
