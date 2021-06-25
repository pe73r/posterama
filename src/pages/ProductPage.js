import React, { useEffect, useContext } from 'react'
import { userParams, Link, useParams } from 'react-router-dom'
import { Box, Grid, Image, Text, Heading, Button, Flex, Center } from '@chakra-ui/react'

import { ShopContext } from '../context/shopContext'

const ProductPage = () => {

    const { handle } = useParams();
    const { fetchProductWithHandle, addItemToCheckout, product } = useContext(ShopContext)

    useEffect(() => {
      fetchProductWithHandle(handle)
     }, [fetchProductWithHandle, handle])

    if (!product.title) return <div> Loading ...</div>


    return (
        <Box w={"90%", "70%"} mx="auto">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={6}>
             <Flex justifyContent="center" alignItems="center">
              <Image src={ product.images[0].src } />
             </Flex>   
              <Box>
                <Heading mb="20px">{ product.title }</Heading>
                <Text mb="20px">{ product.variants[0].price}</Text>
                <Text mb="20px">{ product.description }</Text>
                <Button w="10rem"
                  onClick={() => addItemToCheckout(product.variants[0].id, 1 )}
                >ADD TO CART
                </Button>
              </Box>
            </Grid>
        </Box>
    )
}

export default ProductPage
