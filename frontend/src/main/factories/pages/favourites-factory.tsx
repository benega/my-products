import React from 'react'
import Favourites from '../../../presentation/pages/favourites/favourites'
import { makeRemoteFavouriteProduct } from '../usecases/remote-favourite-product'

export const makeFavourites: React.FC = () => {
    return (
        <Favourites favouriteProduct={makeRemoteFavouriteProduct()} />
    )
}
