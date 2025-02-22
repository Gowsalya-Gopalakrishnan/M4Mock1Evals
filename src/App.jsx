import React from 'react'
import {Box} from '@chakra-ui/react'
import Navbar from './pages/Navbar'
import {Routes,Route} from 'react-router-dom'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'

const App = () => {
  return (
    <Box>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductList/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </Box>
  )
}

export default App
