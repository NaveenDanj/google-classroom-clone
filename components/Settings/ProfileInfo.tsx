import { Avatar, Box, Button, IconButton } from '@chakra-ui/react'
import React from 'react'
import { BsFillFileEarmarkTextFill, BsThreeDotsVertical } from 'react-icons/bs'

const ProfileInfo = () => {
    return (
        <Box className='p-4 mt-2  pb-3' borderWidth='1px' borderRadius='lg' overflow='hidden'>

            <div className='w-full'>
                <h1 className='text-3xl'>Profile</h1>
                <h3 className=' text-gray-700 font-medium mt-2'>Profile picture</h3>
                <div className='p-3'>
                    <Button variant={'ghost'} className='flex flex-row'>
                        <Avatar size={'sm'} className='my-auto mr-2' />
                        <h3 className='font-medium text-blue-600 my-auto'>Change</h3>
                    </Button>
                </div>

                <div>
                    <h3 className='font-medium'>Account settings</h3>
                    <p className='text-gray-400'>Change your password and security options, and access other Google services. Manage</p>
                </div>

                <div className='mt-4'>
                    <h3 className='font-medium'>Change name</h3>
                    <p className='text-gray-400'>To change your name, go to your account settings.</p>
                </div>

            </div>

        </Box>
    )
}

export default ProfileInfo