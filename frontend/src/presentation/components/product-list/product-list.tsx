import React from 'react';
import InputSearch from '../input-search/input-search';
import ProductCard from '../product-card/product-card';
import './product-list.css';

type ProdutType = {
    name: string;
    price: number;
    pictureUrl: string;
    isFavourited: boolean;
}

const products: ProdutType[] = [
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
        <div className="ProductListContainer">
            <InputSearch onChange={() => {}}/>
            <button>Search</button>
            <div className="ProductList">
                {products.map((p, index) =>
                    <ProductCard
                        key={index}
                        prodName={p.name}
                        price={p.price}
                        isFavourited={p.isFavourited}
                        pictureUrl={p.pictureUrl} />
                )}
            </div>
        </div>
    );
}

export default ProductList;