import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../../pages/login/login'

type Props = {
    makeProducts: React.FC
}
const Router: React.FC<Props> = ({makeProducts}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={makeProducts({})} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
