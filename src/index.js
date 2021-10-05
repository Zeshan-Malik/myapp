import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import RootReducer from "./services/reducers/Index"
import thunk from 'redux-thunk';
const initialState = {};
const middleWare = [thunk];
const store = createStore(RootReducer,initialState,applyMiddleware(...middleWare))

ReactDOM.render(
  <Provider   store= {store}>
    <App />
    </Provider>,
  document.getElementById('root')
);
reportWebVitals();
