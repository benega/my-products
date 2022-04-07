import React from 'react';
import StartEmpty from '../star/star-empty';
import StarFilled from '../star/star-filled';
import './product.css';

type Props = {
    prodName: string;
    price: number;
    pictureUrl: string;
    isFavourited: boolean;
}

const Product: React.FC<Props> = ({ prodName, price, pictureUrl: image, isFavourited }) => {
    return (
        <div className="Product">
            <div className="Product-img">
                <img src={image} alt="Product" />
            </div>
            <div className="Product-info">
                <span className="Product-info-name">{prodName}</span>
                <span className="Product-info-price">$ {price}</span>
            </div>
            {isFavourited ? <StarFilled /> : <StartEmpty />}
        </div>
    );
}

export default Product;