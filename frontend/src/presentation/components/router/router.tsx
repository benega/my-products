import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

type Props = {
  makeProducts: React.FC,
  makeLogin: React.FC,
  makeFavourites: React.FC,
}
const Router: React.FC<Props> = ({ makeProducts, makeLogin, makeFavourites }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={makeProducts({})} />
        <Route path='/login' element={makeLogin({})} />
        <Route path='/favourites' element={makeFavourites({})} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
