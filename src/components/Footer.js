import React from 'react'
import { Link } from 'react-router-dom'

import {
    Button,
    Grid,
    Box,
    Flex,
    Icon,
    Text,
    Image
  } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Box mt="30px" p="40px" backgroundColor="#F9F9F9">
         <Flex justifyContent="center" alignItems="center" p="30"> 
            <Link to="/"><Image src="https://cdn.shopify.com/s/files/1/0534/5378/3220/files/logo-posterama.svg?v=1617896190" w={200}></Image></Link>    
         </Flex>
        </Box>
    )
}

export default Footer
