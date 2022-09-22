import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import {Provider} from 'react-redux'
import {createStore} from "redux"
import {} from 'redux-saga'
//run react dom
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
