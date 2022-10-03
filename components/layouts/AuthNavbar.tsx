import React , {useState} from 'react'
import Image from 'next/image'
import { HamburgerIcon, AddIcon } from '@chakra-ui/icons'
import { Button, Avatar } from '@chakra-ui/react'
import AppDrawer from './AppDrawer'
import {useAuth} from '../../context/AuthUserContext';
import ProfilePopover from './ProfilePopover'

function AuthNavbar() {
    
    const [drawerOpen , setDrawerOpen] = useState(false);
    const { authUser, loading } = useAuth();
    //@ts-ignore
    const avatar = authUser != null ? authUser.photoURL : 'https://bit.ly/dan-abramov'

    return (

        <div className='w-full h-[10vh] p-4 border-b-2'>

            <div className='flex flex-row justify-between'>

                <div className=' flex'>

                    <AppDrawer
                        isOpen={drawerOpen}
                        handleClose={setDrawerOpen}
                    />

                    <Image
                        className='my-auto'
                        src="/img/logo.svg"
                        alt="Picture of the author"
                        width={74}
                        height={24}
                    />
                    <h1 className='font-medium text-lg ml-2 my-auto'>Classroom</h1>
                </div>

                <div className='my-auto'>
                    <Button className=' my-auto mr-2' colorScheme='teal' variant='ghost'>
                        <AddIcon w={4} h={4} />
                    </Button>

                    <ProfilePopover
                        photoURL={avatar}
                        userData={authUser}
                    />
                </div>

            </div>

        </div>

    )
}

export default AuthNavbar