import React, { ChangeEvent, useState } from 'react';
import { ProductModel } from '../../../domain/models/product-model';
import { FavouriteProduct } from '../../../domain/usecases/favourite-product';
import { SearchProducts } from '../../../domain/usecases/search-products';
import InputSearch from '../input-search/input-search';
import ProductCard from '../product-card/product-card';
import './product-list.css';

type Props = {
    searchProducts: SearchProducts,
    favouriteProduct: FavouriteProduct,
}
const ProductList: React.FC<Props> = ({ searchProducts, favouriteProduct }) => {
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
            if (p.name === product.name) {
                return { ...p, isFavourited }
            }
            return p;
        }))
    };

    return (
        <div className="ProductListContainer overflow-container">
            <InputSearch onChange={handleInputChange} />
            <button className="search-button" type="button" onClick={updateSearch}>Search</button>
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