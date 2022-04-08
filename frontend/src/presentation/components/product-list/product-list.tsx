import React from 'react';
import { ProductModel } from '../../../domain/models/product-model';
import ProductCard from '../product-card/product-card';
import './product-list.css';

type Props = {
    products: ProductModel[],
    onFavourite: (prod: ProductModel) => void,
    onUnfavourite: (prod: ProductModel) => void,
}
const ProductList: React.FC<Props> = ({ products, onFavourite, onUnfavourite }) => {
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
                        onFavourite={() => onFavourite(p)}
                        onUnfavourite={() => onUnfavourite(p)}
                    />
                )}
            </div>
        </div>
    );
}

export default ProductList;