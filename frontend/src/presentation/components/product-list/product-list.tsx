import React, { ChangeEvent, useState } from 'react';
import { ProductModel } from '../../../domain/models/product-model';
import { SearchProducts } from '../../../domain/usecases/search-products';
import InputSearch from '../input-search/input-search';
import ProductCard from '../product-card/product-card';
import './product-list.css';

type Props = {
    searchProducts: SearchProducts
}
const ProductList: React.FC<Props> = ({ searchProducts }) => {
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

    return (
        <div className="ProductListContainer overflow-container">
            <InputSearch onChange={handleInputChange} />
            <button type="button" onClick={updateSearch}>Search</button>
            <div className="ProductList">
                {products.map((p, index) =>
                    <ProductCard
                        key={index}
                        prodName={p.name}
                        price={p.price}
                        isFavourited={!!p.isFavourited}
                        pictureUrl={p.pictureUrl} />
                )}
            </div>
        </div>
    );
}

export default ProductList;