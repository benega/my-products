import React from 'react';
import ProductList from '../../components/product-list/product-list';
import './products.css';

function Products() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Products App</h1>
        <div>Login</div>
      </header>
      <div className="App-content">
        <ProductList />
      </div>
      <footer className="App-footer">
        <small>Developer: thiagobenega@gmail.com</small>
      </footer>
    </div>
  );
}

export default Products;
