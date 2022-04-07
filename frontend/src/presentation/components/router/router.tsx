import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

type Props = {
    makeProducts: React.FC
}
const Router: React.FC<Props> = ({makeProducts}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={makeProducts({})} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
