import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import Router from './presentation/components/router/router';
import reportWebVitals from './reportWebVitals';
import { makeProducts } from './main/factories/pages/products-factory';
import { makeLogin } from './main/factories/pages/login-factory';
import { makeFavourites } from './main/factories/pages/favourites-factory';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container as Element);
root.render(
  <React.StrictMode>
    <div className="App overflow-container">
      <Router
        makeLogin={makeLogin}
        makeProducts={makeProducts}
        makeFavourites={makeFavourites}
      />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
