import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Box} from '@chakra-ui/react'
import { addToCart } from '@/redux/actions/actions'

const Cart = () => {
    const items = useSelector((state)=>state.cart.items)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(addToCart())
    },[])
  return (
   <Box>
    {items.length>0 ? 
    (<p>No Items Add!..</p>)
    :
    (items.map((item)=>{
        return(
            <Box key={item.id}>
                <img src={item.image} alt={item.name}/>
                       <h2> Title : {item.title}</h2>
                    <p>Price : {item.price}</p>
                <button>Remove</button>
            </Box>
        )
    }))}
   </Box>
  )
}

export default Cart
