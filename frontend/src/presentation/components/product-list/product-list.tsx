import React from 'react';
import { ProductModel } from '../../../domain/models/product-model';
import { FavouriteProduct } from '../../../domain/usecases/favourite-product';
import ProductCard from '../product-card/product-card';
import './product-list.css';

type Props = {
    products: ProductModel[],
    setProducts: React.Dispatch<React.SetStateAction<ProductModel[]>>,
    favouriteProduct: FavouriteProduct,
}
const ProductList: React.FC<Props> = ({ products, setProducts, favouriteProduct }) => {

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
        <div className="ProductListContainer overflow-container">
            <div className="ProductList">
                {products.map((p, index) =>
                    <ProductCard
                        key={index}
                        prodName={p.name}
                        price={p.price}
                        isFavourited={!!p.isFavourited}
                        pictureUrl={p.pictureUrl}
                        onFavourite={() => handleFavouriteProduct(p, true)}
                        onUnfavourite={() => handleFavouriteProduct(p, false)}
                    />
                )}
            </div>
        </div>
    );
}

export default ProductList;