import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { makeLogin } from '../../../main/factories/pages/login-factory'

type Props = {
    makeProducts: React.FC
}
const Router: React.FC<Props> = ({makeProducts}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={makeProducts({})} />
        <Route path='/login' element={makeLogin({})} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
