import React, { useState } from 'react';
import { ProductModel } from '../../../domain/models/product-model';
import { FavouriteProduct } from '../../../domain/usecases/favourite-product';
import AppFooter from '../../components/app-footer/app-footer';
import AppHeader from '../../components/app-header/app-header';
import ProductList from '../../components/product-list/product-list';
import './favourites.css';

type Props = {
  favouriteProduct: FavouriteProduct,
}
const Favourites: React.FC<Props> = ({ favouriteProduct }) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  return (
    <div className="Favourites overflow-container">
      <AppHeader showLogin />
      <div className="Favourites-content">
        <ProductList
          products={products}
          setProducts={setProducts}
          favouriteProduct={favouriteProduct}
        />
      </div>
      <AppFooter />
    </div>
  );
}

export default Favourites;
