import React from 'react'
import {Box,HStack,VStack} from '@chakra-ui/react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    
        <Box p={5} bg={'lightpink'} >
        <NavLink to='/' >Products</NavLink>
        <NavLink to='/cart'>Cart</NavLink>
    </Box>
    
    
  )
}

export default Navbar
