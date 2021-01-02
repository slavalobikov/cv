import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import Language from "./Lang/Language";
import {Provider} from "react-redux";
import store from "./Redux/Redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store} >
        <Language />
        </Provider>
    </BrowserRouter>

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
