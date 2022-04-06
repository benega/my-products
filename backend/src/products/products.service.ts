import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductsSearchFacade } from './api/products-search-facade';
import { Product } from './models/product.interface';
import { FavouriteProducts } from './models/favourite-products.interface';
import { User } from 'src/user/models/user';
import { ProductDto } from './dto/product.dto';

const parseDto = (product: Product) => ({
  name: product.name,
  pictureUrl: product.pictureUrl,
  price: product.price,
});

@Injectable()
export class ProductsService {
  constructor(
    private productsSearch: ProductsSearchFacade,
    @InjectModel('FavouriteProducts')
    private readonly favouriteProductsModel: Model<FavouriteProducts>,
    @InjectModel('Product')
    private readonly productModel: Model<Product>,
  ) {}

  async search(query: string): Promise<ProductDto[]> {
    return this.productsSearch.search(query);
  }

  async getByName(name: string): Promise<ProductDto> {
    const encodedName = encodeURI(name);
    const res = await this.search(encodedName);
    return res.find((p) => encodeURI(p.name) == encodedName);
  }

  async getFavourites(user: User, name?: string): Promise<ProductDto[]> {
    const favouriteProducts = await this.favouriteProductsModel
      .findOne({ user })
      .populate('products');
    const products = favouriteProducts?.products || [];
    return name
      ? products.filter((p) => p.name === name).map(parseDto)
      : products.map(parseDto);
  }

  async makeFavourite(user: User, productDto: ProductDto): Promise<void> {
    const product = await this.getOrUpdateProductFromDB(productDto);

    let favouriteProducts = await this.favouriteProductsModel.findOne({
      user,
    });

    console.log('favouriteProducts', favouriteProducts);

    if (!favouriteProducts) {
      favouriteProducts = new this.favouriteProductsModel({
        user,
        products: [product],
      });
    } else {
      favouriteProducts.products.push(product);
    }

    favouriteProducts.save();
  }

  async removeFavourite(user: User, productDto: ProductDto): Promise<void> {
    const favouriteProducts = await this.favouriteProductsModel.findOne({
      user,
    });

    if (favouriteProducts) {
      favouriteProducts.products = favouriteProducts.products.filter(
        (p) => p.name !== productDto.name,
      );
      favouriteProducts.save();
    }
  }

  async getOrUpdateProductFromDB(productDto: ProductDto): Promise<Product> {
    let product = await this.productModel.findOne({
      name: productDto.name,
    });

    if (!product || !product._id) {
      product = new this.productModel(productDto);
      product.save();
    }

    return product;
  }
}
