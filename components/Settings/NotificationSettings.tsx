import { Avatar, Box, Button, Switch } from '@chakra-ui/react'
import React from 'react'

const NotificationSettings = () => {
    return (
        <Box className='p-5 mt-4 pb-3' borderWidth='1px' borderRadius='lg' overflow='hidden'>

            <div className='w-full'>
                <h1 className='text-3xl'>Notifications</h1>
                <h1 className=' text-gray-600 text-xl font-medium mt-3'>Email</h1>

                <div className='mt-3 flex flex-row justify-between w-full '>
                    <h3 className='font-medium text-gray-600'>Allow email notifications</h3>
                    <Switch size='md' />
                </div>

                <div className=' border-t-2 mt-7'>
                    <h1 className=' text-gray-600 text-xl font-medium mt-5'>Comments</h1>
                </div>

                <div className='mt-5 flex flex-row justify-between w-full '>
                    <h3 className='font-medium text-gray-600'>Comments on your posts</h3>
                    <Switch size='md' />
                </div>

                <div className='mt-3 flex flex-row justify-between w-full '>
                    <h3 className='font-medium text-gray-600'>Comments that mention you</h3>
                    <Switch size='md' />
                </div>

                <div className='mt-3 flex flex-row justify-between w-full '>
                    <h3 className='font-medium text-gray-600'>Private comments on work</h3>
                    <Switch size='md' />
                </div>
                
                <h1 className=' text-gray-600 text-xl font-medium mt-5'>Classes you teach</h1>

                <div className='mt-5 flex flex-row justify-between w-full '>
                    <h3 className='font-medium text-gray-600'>Late submissions of student work</h3>
                    <Switch size='md' />
                </div>

                <div className='mt-3 flex flex-row justify-between w-full '>
                    <h3 className='font-medium text-gray-600'>Resubmissions of student work</h3>
                    <Switch size='md' />
                </div>

                <div className='mt-3 flex flex-row justify-between w-full '>
                    <h3 className='font-medium text-gray-600'>Invitations to co-teach classes</h3>
                    <Switch size='md' />
                </div>

                <div className='mt-3 flex flex-row justify-between w-full '>
                    <h3 className='font-medium text-gray-600'>Scheduled post published or failed</h3>
                    <Switch size='md' />
                </div>

                <div className=' border-t-2 mt-7'>
                    <h1 className=' text-gray-600 text-xl font-medium mt-5'>Class notifications</h1>
                    <label className='text-gray-500 '>Turn email and mobile notifications on or off for a class</label>

                    <div className='flex flex-row justify-between w-full '>
                        <div className='flex flex-row mt-3 '>
                            <Avatar size={'sm'} className='my-auto mr-3' />
                            <h2 className='my-auto'><span className='font-medium'>test</span> TEST</h2>
                        </div>
                        <Switch className='my-auto' size='md' />
                    </div>

                    <div className='flex flex-row justify-between w-full mt-2'>
                        <div className='flex flex-row mt-3 '>
                            <Avatar size={'sm'} className='my-auto mr-3' />
                            <h2 className='my-auto'><span className='font-medium'>test</span> TEST</h2>
                        </div>
                        <Switch className='my-auto' size='md' />
                    </div>
                
                </div>

            </div>

        </Box>
    )
}

export default NotificationSettings