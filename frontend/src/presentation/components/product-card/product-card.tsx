import React from 'react';
import StartEmpty from '../star/star-empty';
import StarFilled from '../star/star-filled';
import './product-card.css';

type Props = {
    prodName: string;
    price: number;
    pictureUrl: string;
    isFavourited: boolean;
    onFavourite: () => void;
    onUnfavourite: () => void;
}

const ProductCard: React.FC<Props> = ({
    prodName, price, pictureUrl: image, isFavourited,
    onFavourite, onUnfavourite
}) => {
    
    const handleClick = () => {
        if (isFavourited)
            onUnfavourite();
        else
            onFavourite();
    };

    return (
        <div className="ProductCard">
            <div className="ProductCard-img">
                <img src={image} alt="Product" />
            </div>
            <div className="ProductCard-info">
                <span className="ProductCard-info-name">{prodName}</span>
                <span className="ProductCard-info-price">$ {price}</span>
            </div>
            <button className="ProductCard-favourite-btn" onClick={handleClick}>
                {isFavourited ? <StarFilled /> : <StartEmpty />}
            </button>
        </div>
    );
}

export default ProductCard;