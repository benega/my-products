import React from 'react';
import { FavouriteProduct } from '../../../domain/usecases/favourite-product';
import { SearchProducts } from '../../../domain/usecases/search-products';
import AppFooter from '../../components/app-footer/app-footer';
import AppHeader from '../../components/app-header/app-header';
import ProductList from '../../components/product-list/product-list';
import './products.css';

type Props = {
  searchProducts: SearchProducts,
  favouriteProduct: FavouriteProduct,
}

const Favourites: React.FC<Props> = ({ searchProducts, favouriteProduct }) => {
  return (
    <div className="Products overflow-container">
      <AppHeader showLogin/>
      <div className="Products-content">
        {/* <ProductList /> */}
      </div>
      <AppFooter />
    </div>
  );
}

export default Favourites;
