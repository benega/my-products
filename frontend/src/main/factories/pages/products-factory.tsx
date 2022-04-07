import React from 'react'
import Products from '../../../presentation/pages/products/products'
import { makeRemoteSearchProducts } from '../usecases/remote-search-products'

export const makeProducts: React.FC = () => {
  return (
    <Products searchProducts={makeRemoteSearchProducts()}/>
  )
}
