import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Vstack,
    Grid,
    List, 
    ListItem, 
    ListIcon, 
    UnorderedList,
    Text
  } from "@chakra-ui/react"

const NavMenu = () => {

    const { isMenuOpen, closeMenu } = useContext(ShopContext)
    return (
    
         <Drawer
            isOpen={isMenuOpen}
            placement="left"
            onClose={closeMenu}      
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>MENU</DrawerHeader>

            <DrawerBody>
            <UnorderedList>
                <ListItem><Link to="/">Link 1</Link></ListItem>
                <ListItem><Link to="/">Link 2</Link></ListItem>
                <ListItem><Link to="/">Link 3</Link></ListItem>
                <ListItem><Link to="/">Link 4</Link></ListItem>
                </UnorderedList>
            </DrawerBody>

            <DrawerFooter>             
             <Text>Menu footer -- social media</Text>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
            
    )
}

export default NavMenu
