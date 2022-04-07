import React from 'react'
import { RemoteSearchProducts } from '../../../data/usecases/remote-search-products'
import Products from '../../../presentation/pages/products/products'

export const makeProducts: React.FC = () => {
  return (
    <Products searchProducts={new RemoteSearchProducts()}/>
  )
}
