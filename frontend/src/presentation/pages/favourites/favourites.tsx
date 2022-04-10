import React, { useEffect, useState } from 'react';
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


  useEffect(() => {
    const updateFavourites = async () => {
      const res = await favouriteProduct.getAll();
      setProducts(res);
    }
    updateFavourites();
  }, [favouriteProduct])

  const handleFavouriteProduct = (product: ProductModel, isFavourited: boolean) => {
    if (isFavourited)
      favouriteProduct.add(product);
    else
      favouriteProduct.remove(product);

    setProducts(products.filter((p) => p.name !== product.name))
  };

  return (
    <div className="Favourites overflow-container">
      <AppHeader showLogin />
      <div className="Favourites-content">
        <h2>Favourite products</h2>
        <ProductList
          products={products}
          handleFavouriteProduct={handleFavouriteProduct}
        />
      </div>
      <AppFooter />
    </div>
  );
}

export default Favourites;
