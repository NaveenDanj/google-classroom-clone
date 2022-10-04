import React, { useState } from 'react'
import { BsGear } from 'react-icons/bs';
import { Button} from '@chakra-ui/react'
import AppDrawer from '../layouts/AppDrawer'
import { useAuth } from '../../context/AuthUserContext';
import ProfilePopover from '../layouts/ProfilePopover'

function ClassroomHeader() {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const { authUser, loading } = useAuth();
    //@ts-ignore
    const avatar = authUser != null ? authUser.photoURL : 'https://bit.ly/dan-abramov'

    return (

        <div className='w-full h-[10vh] p-4 border-b-2'>

            <div className='flex flex-row justify-between'>

                <div className=' flex'>

                    <div className='my-auto'>
                        <AppDrawer
                            isOpen={drawerOpen}
                            handleClose={setDrawerOpen}
                        />
                    </div>

                    <div className='my-auto'>
                        <h1 className='font-medium text-lg ml-2 my-auto'>Classroom name</h1>
                    </div>
                </div>

                <div className='my-auto'>
                    <Button className=' my-auto mr-2' colorScheme='teal' variant='ghost'>
                        <BsGear />
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

export default ClassroomHeader