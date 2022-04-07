import { SearchProducts } from "../../domain/usecases/search-products";
import { ProductModel } from "../../domain/models/product/product-model";

const products: ProductModel[] = [
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
];

export class RemoteSearchProducts implements SearchProducts {
    async search(params: SearchProducts.Params): Promise<SearchProducts.Model> {
        return products;
    }
}