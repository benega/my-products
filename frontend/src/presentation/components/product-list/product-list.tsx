import React from 'react';
import Product from '../product/product';
import './product-list.css';

type ProductType = {
    name: string;
    price: number;
    pictureUrl: string;
    isFavourited: boolean;
}

const products: ProductType[] = [
    {
        name: 'Tattoo Waterproof Liquid Eyeliner',
        price: 100,
        pictureUrl: 'https://www.sephora.com/productimages/sku/s1585819-main-hero.jpg',
        isFavourited: true
    },
    {
        name: 'Tattoo Waterproof Liquid Eyeliner 2222222',
        price: 200,
        pictureUrl: 'https://www.sephora.com/productimages/sku/s1585819-main-hero.jpg',
        isFavourited: false
    },
    {
        name: 'Tattoo Waterproof Liquid Eyeliner',
        price: 300,
        pictureUrl: 'https://www.sephora.com/productimages/sku/s1585819-main-hero.jpg',
        isFavourited: true
    },
    {
        name: 'Tattoo Waterproof Liquid Eyeliner',
        price: 400,
        pictureUrl: 'https://www.sephora.com/productimages/sku/s1585819-main-hero.jpg',
        isFavourited: false
    },
    {
        name: 'Tattoo Waterproof Liquid Eyeliner',
        price: 400,
        pictureUrl: 'https://www.sephora.com/productimages/sku/s1585819-main-hero.jpg',
        isFavourited: false
    },
    {
        name: 'Tattoo Waterproof Liquid Eyeliner',
        price: 400,
        pictureUrl: 'https://www.sephora.com/productimages/sku/s1585819-main-hero.jpg',
        isFavourited: false
    },
    {
        name: 'Tattoo Waterproof Liquid Eyeliner',
        price: 400,
        pictureUrl: 'https://www.sephora.com/productimages/sku/s1585819-main-hero.jpg',
        isFavourited: false
    },
    {
        name: 'Tattoo Waterproof Liquid Eyeliner',
        price: 400,
        pictureUrl: 'https://www.sephora.com/productimages/sku/s1585819-main-hero.jpg',
        isFavourited: false
    },
    {
        name: 'Tattoo Waterproof Liquid Eyeliner',
        price: 400,
        pictureUrl: 'https://www.sephora.com/productimages/sku/s1585819-main-hero.jpg',
        isFavourited: false
    },
    {
        name: 'Tattoo Waterproof Liquid Eyeliner',
        price: 400,
        pictureUrl: 'https://www.sephora.com/productimages/sku/s1585819-main-hero.jpg',
        isFavourited: false
    },
    {
        name: 'Tattoo Waterproof Liquid Eyeliner',
        price: 400,
        pictureUrl: 'https://www.sephora.com/productimages/sku/s1585819-main-hero.jpg',
        isFavourited: false
    },
    {
        name: 'Tattoo Waterproof Liquid Eyeliner',
        price: 400,
        pictureUrl: 'https://www.sephora.com/productimages/sku/s1585819-main-hero.jpg',
        isFavourited: false
    },
    {
        name: 'Tattoo Waterproof Liquid Eyeliner',
        price: 400,
        pictureUrl: 'https://www.sephora.com/productimages/sku/s1585819-main-hero.jpg',
        isFavourited: false
    },
    {
        name: 'Tattoo Waterproof Liquid Eyeliner',
        price: 400,
        pictureUrl: 'https://www.sephora.com/productimages/sku/s1585819-main-hero.jpg',
        isFavourited: false
    },
    {
        name: 'Tattoo Waterproof Liquid Eyeliner',
        price: 400,
        pictureUrl: 'https://www.sephora.com/productimages/sku/s1585819-main-hero.jpg',
        isFavourited: false
    },
    {
        name: 'Tattoo Waterproof Liquid Eyeliner',
        price: 400,
        pictureUrl: 'https://www.sephora.com/productimages/sku/s1585819-main-hero.jpg',
        isFavourited: false
    },
    {
        name: 'Tattoo Waterproof Liquid Eyeliner',
        price: 400,
        pictureUrl: 'https://www.sephora.com/productimages/sku/s1585819-main-hero.jpg',
        isFavourited: false
    },
]

const ProductList: React.FC = () => {
    return (
        <div className="ProductList">
            {products.map((p, index) =>
                <Product
                    key={index}
                    prodName={p.name}
                    price={p.price}
                    isFavourited={p.isFavourited}
                    pictureUrl={p.pictureUrl} />
            )}
        </div>
    );
}

export default ProductList;