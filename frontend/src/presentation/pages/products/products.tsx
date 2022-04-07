import React from 'react';
import { SearchProducts } from '../../../domain/usecases/search-products';
import ProductList from '../../components/product-list/product-list';
import './products.css';

type Props = {
  searchProducts: SearchProducts
}
const Products: React.FC<Props> = ({ searchProducts }) => {
  return (
    <div className="Products">
      <header className="Products-header">
        <h1>My Products App</h1>
        <div>Login</div>
      </header>
      <div className="Products-content">
        <ProductList searchProducts={searchProducts}/>
      </div>
      <footer className="Products-footer">
        <small>Developer: thiagobenega@gmail.com</small>
      </footer>
    </div>
  );
}

export default Products;
