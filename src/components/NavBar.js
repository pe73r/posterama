import React, { useContext } from 'react'
import { Box, Icon, Image, Text, Flex  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {ShopContext} from '../context/shopContext'
import { MdMenu, MdShoppingBasket } from 'react-icons/md'

const NavBar = () => {

    const { openCart, openMenu, checkout } = useContext(ShopContext)

    return (
        <Flex justifyContent="space-around" alignItems="center" p="30"> 
            <Icon fill="black" as={MdMenu} w={30} h={30} cursor="pointer" onClick={openMenu}></Icon>
            <Link to="/"><Image src="https://cdn.shopify.com/s/files/1/0534/5378/3220/files/logo-posterama.svg?v=1617896190" w={200}></Image></Link>    
            <Icon fill="black" as={MdShoppingBasket} w={30} h={30} cursor="pointer" 
            onClick={openCart}></Icon>
        </Flex>
    )
}

export default NavBar
