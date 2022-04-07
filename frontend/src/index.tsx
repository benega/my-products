import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './presentation/components/router/router';
import reportWebVitals from './reportWebVitals';
import { makeProducts } from './main/factories/pages/products-factory';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <Router makeProducts={makeProducts} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
