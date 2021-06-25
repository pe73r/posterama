import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Grid,
    Text
  } from "@chakra-ui/react"

const Cart = () => {


    const { isCartOpen, closeCart, checkout, removeLineItem, openCart } = useContext(ShopContext)
    return (
    
         <Drawer
            isOpen={isCartOpen}
            placement="right"
            onClose={closeCart}      
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your shopping cart</DrawerHeader>

            <DrawerBody>
                BODY
            </DrawerBody>

            <DrawerFooter>             
             <Button>Got to checkout</Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
            
    )
}

export default Cart
