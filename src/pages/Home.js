import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Box, Grid, Text, Image  } from "@chakra-ui/react";

import Hero from '../components/Hero' 
import { ShopContext } from "../context/shopContext";

export const Home = () => {

    const { fetchAllProducts , products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])


    if (!products) return <div> Loading ...</div>

    return (

        <Box w={ ["90%","70%"]} mx="auto" >  
          <Hero></Hero>
            <Grid templateColumns={["repeat(2, 1fr)", "repeat(5, 1fr)"]} gap={6}> 

            {
              products.map(product => (
                <Link to={`/products/${product.handle}`} key={ product.title }>
                  <Box _hover={{ opacity:'80%'}} textAlign="center">
                    <Image src={ product.images[0].src } />
                    <Text>{ product.title }  </Text>
                    <Text>{ product.variants[0].price }</Text>
                  </Box>
                </Link>
              ))  
            }
          </Grid> 
        </Box>
    )
}

export default Home;