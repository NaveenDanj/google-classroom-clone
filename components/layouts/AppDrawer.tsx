import React from 'react'
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

interface prop {
    isOpen : boolean;
    handleClose : any
}

function AppDrawer(props:prop) {

    const {isOpen , handleClose} = props;

    return (
        <>
            <Button onClick={() => handleClose(true)} className=' my-auto mr-2' colorScheme='teal' variant='ghost'>
                <HamburgerIcon w={6} h={6} />
            </Button>

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={() => handleClose(false)}
            >
                
                <DrawerOverlay />

                <DrawerContent>
                    {/* <DrawerCloseButton /> */}
                    <DrawerHeader>Create your account</DrawerHeader>

                    
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={() => handleClose(false)}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>

                </DrawerContent>

            </Drawer>

        </>
    )
}

export default AppDrawer