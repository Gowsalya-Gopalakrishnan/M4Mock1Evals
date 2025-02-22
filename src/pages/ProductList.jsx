import React, { useEffect } from 'react'
import {Box,HStack,VStack,Button} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '@/redux/actions/actions'
import { useNavigate } from 'react-router-dom'
import Cart from './Cart'

const ProductList = () => {
    const products = useSelector((state)=>state.products.products)
    const loading = useSelector((state)=>state.loading)
    const error = useSelector((state)=>state.error)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    const handleAddtoCart=()=>{
        navigate("/cart")
    }
    return (
    <Box>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)", padding:"5%"}}>
         {products.length > 0 && products.map((product)=>{
            return(
                <div key={product.id} style={{width:"50%"}} >
                    <img src={product.image} alt={product.name}/>
                       <h2> Title : {product.title}</h2>
                    <p>Price : {product.price}</p>
                            <Button onClick={handleAddtoCart}>Add to Cart</Button>

                </div>
            )
        })}   
        </div>
        
    </Box>
  )
}

export default ProductList
