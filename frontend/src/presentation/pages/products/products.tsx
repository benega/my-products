import React from 'react';
import { SearchProducts } from '../../../domain/usecases/search-products';
import AppFooter from '../../components/app-footer/app-footer';
import AppHeader from '../../components/app-header/app-header';
import ProductList from '../../components/product-list/product-list';
import './products.css';

type Props = {
  searchProducts: SearchProducts
}
const Products: React.FC<Props> = ({ searchProducts }) => {
  return (
    <div className="Products overflow-container">
      <AppHeader />
      <div className="Products-content">
        <ProductList searchProducts={searchProducts}/>
      </div>
      <AppFooter />
    </div>
  );
}

export default Products;
