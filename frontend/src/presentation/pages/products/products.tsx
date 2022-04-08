import React, { ChangeEvent, useState } from 'react';
import { ProductModel } from '../../../domain/models/product-model';
import { FavouriteProduct } from '../../../domain/usecases/favourite-product';
import { SearchProducts } from '../../../domain/usecases/search-products';
import AppFooter from '../../components/app-footer/app-footer';
import AppHeader from '../../components/app-header/app-header';
import Button from '../../components/button/button';
import InputSearch from '../../components/input-search/input-search';
import ProductList from '../../components/product-list/product-list';
import './products.css';

type Props = {
  searchProducts: SearchProducts,
  favouriteProduct: FavouriteProduct,
}
const Products: React.FC<Props> = ({ searchProducts, favouriteProduct }) => {

  const [products, setProducts] = useState<ProductModel[]>([]);
  const [searchName, setSearchName] = useState('');

  const updateSearch = async () => {
    if (searchName.length >= 3) {
      const res = await searchProducts.search({ name: searchName });
      setProducts(res);
    } else {
      setProducts([]);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };

  const handleFavouriteProduct = (product: ProductModel, isFavourited: boolean) => {
    if (isFavourited)
      favouriteProduct.add(product);
    else
      favouriteProduct.remove(product);

    setProducts(products.map((p) => {
      return p.name === product.name
        ? { ...p, isFavourited }
        : p;
    }))
  };

  return (
    <div className="Products overflow-container">
      <AppHeader showLogin />
      <div className="Products-content">
        <div className="Products-search-header">
          <InputSearch onChange={handleInputChange} />
          <Button type="button" onClick={updateSearch}>Search</Button>
        </div>
        <ProductList
          products={products}
          onFavourite={(prod: ProductModel) => handleFavouriteProduct(prod, true)}
          onUnfavourite={(prod: ProductModel) => handleFavouriteProduct(prod, false)}
        />
      </div>
      <AppFooter />
    </div>
  );
}

export default Products;
