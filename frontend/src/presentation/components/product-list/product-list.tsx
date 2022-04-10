import React from 'react';
import { ProductModel } from '../../../domain/models/product-model';
import ProductCard from '../product-card/product-card';
import './product-list.css';

type Props = {
    products: ProductModel[],
    showFavouriteIcon: boolean,
    handleFavouriteProduct: (product: ProductModel, isFavourited: boolean) => void,
}
const ProductList: React.FC<Props> = ({
    products, handleFavouriteProduct, showFavouriteIcon
}) => {
    return (
        <div className="ProductListContainer overflow-container">
            <div className="ProductList">
                {products.map((p, index) =>
                    <ProductCard
                        key={index}
                        prodName={p.name}
                        price={p.price}
                        showFavouriteIcon={showFavouriteIcon}
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