import React, { useEffect, useState } from 'react';
import { ProductModel } from '../../../domain/models/product/product-model';
import { SearchProducts } from '../../../domain/usecases/search-products';
import InputSearch from '../input-search/input-search';
import ProductCard from '../product-card/product-card';
import './product-list.css';

type Props = {
    searchProducts: SearchProducts
}

const ProductList: React.FC<Props> = ({ searchProducts }) => {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        const updateSearch = async () => {
            const res = await searchProducts.search({ name: '' });
            setProducts(res);
        }
        updateSearch();
    }, [searchProducts])

    return (
        <div className="ProductListContainer">
            <InputSearch onChange={() => { }} />
            <button>Search</button>
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