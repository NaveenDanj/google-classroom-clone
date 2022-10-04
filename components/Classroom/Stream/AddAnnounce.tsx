import { Avatar, Box, Button } from '@chakra-ui/react'
import React from 'react'
import { useAuth } from '../../../context/AuthUserContext';
import { BsGear } from 'react-icons/bs';


function AddAnnounce() {

    const { authUser, setAuthUser } = useAuth();
    //@ts-ignore
    const avatar = authUser != null ? authUser.photoURL : 'https://bit.ly/dan-abramov'

    return (
        <Box className='p-2  pb-3' borderWidth='1px' borderRadius='lg' overflow='hidden'>

            <div className='flex flex-row w-full justify-between cursor-pointer'>

                <div className='flex mt-2 flex-row'>
                    <Avatar
                        className='my-auto mr-4'
                        size='md'
                        name='Dan Abrahmov'
                        src={avatar}
                    />
                    <h2 className='cursor-pointer text-sm my-auto text-gray-400 font-medium'>Announce something to your class</h2>
                </div>

                <Button className=' my-auto mr-2' size={'md'} colorScheme='teal' variant='ghost'>
                    <BsGear />
                </Button>

            </div>

        </Box>
    )
}

export default AddAnnounce