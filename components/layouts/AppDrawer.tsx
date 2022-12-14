import React from 'react'
import {
    List,
    ListItem,
    Divider,
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'
import { BsHouseDoor, BsCalendarWeek, BsArchive, BsGear } from 'react-icons/bs';
import EnrolledClasses from './EnrolledClasses';
import { useRouter } from 'next/router';

interface prop {
    isOpen: boolean;
    handleClose: any
}

function AppDrawer(props: prop) {

    const { isOpen, handleClose } = props;
    const router = useRouter();

    const handleNavigate = (route: string): void => {
        router.push('/' + route);
    }

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

                <DrawerContent className='p-5'>
                    {/* <DrawerCloseButton /> */}

                    <List spacing={1}>

                        <ListItem onClick={() => handleNavigate('Classes')} className=' cursor-pointer flex flex-row bg-slate-300 p-4 rounded-r-[40px]'>
                            <BsHouseDoor size={20} className='my-auto mr-5' />
                            <h1 className=' text-lg font-medium'>Classes</h1>
                        </ListItem>

                        <ListItem onClick={() => handleNavigate('Calendar')} className=' cursor-pointer flex flex-row hover:bg-slate-300 p-4 rounded-r-[40px]'>
                            <BsCalendarWeek size={20} className='my-auto mr-5' />
                            <h1 className=' text-lg font-medium'>Calendar</h1>
                        </ListItem>

                        <Divider className='mt-2' orientation='horizontal' />

                        <EnrolledClasses />

                        <Divider className='mt-2' orientation='horizontal' />

                        <ListItem onClick={() => handleNavigate('ArchivedClasses')} className=' cursor-pointer flex flex-row hover:bg-slate-300 p-4 rounded-r-[40px]'>
                            <BsArchive size={20} className='my-auto mr-5' />
                            <h1 className=' text-lg font-medium'>Archived classes</h1>
                        </ListItem>

                        <ListItem onClick={() => handleNavigate('Settings')} className=' cursor-pointer flex flex-row hover:bg-slate-300 p-4 rounded-r-[40px]'>
                            <BsGear size={20} className='my-auto mr-5' />
                            <h1 className=' text-lg font-medium'>Settings</h1>
                        </ListItem>

                    </List>


                    {/* <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={() => handleClose(false)}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter> */}

                </DrawerContent>

            </Drawer>

        </>
    )
}

export default AppDrawer