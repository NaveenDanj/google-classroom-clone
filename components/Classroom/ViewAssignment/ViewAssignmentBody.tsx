import { Avatar, Box, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { BsFillFileEarmarkTextFill, BsPeople , BsCaretRight } from 'react-icons/bs'
import UserComment from '../../Global/UserComment'
import PrivateComment from './PrivateComment'
import YourWork from './YourWork'

const ViewAssignmentBody = () => {
    return (
        <div className='flex mt-5 flex-row justify-center'>
            <div className='px-1 w-full flex flex-col lg:flex-row sm:w-4/5 md:w-5/6 '>

                <div className='flex-1 mx-3'>

                    <div className='flex flex-row justify-between w-full'>

                        <div className='flex flex-row' >

                            <div className=' bg-blue-700 w-10 h-10 p-3  rounded-full mr-2'>
                                <BsFillFileEarmarkTextFill className='text-white' />
                            </div>

                            <div className='ml-2'>
                                <h1 className='text-2xl text-blue-700'>ICA-Powerpoint</h1>
                                <h2 className='text-gray-400'>Varnarubiny Surendranathan • Sep 29</h2>
                            </div>


                        </div>


                    </div>

                    <div className='px-1 sm:px-0 flex flex-row mt-2 justify-between pb-3 border-b-2'>
                        <h2 className='text-gray-600 font-medium  '>100 points</h2>
                        <h2 className='text-gray-600 font-medium  '>Due Today</h2>
                    </div>

                    <div className='mt-5 p-1 sm:p-0 '>
                        <p>Create a Presentation like the given whichis stored in the ICA-powerpoint folder.
                            You should print your  Registration No in place of the on the header

                            Save the presentation in the name comprised of your name followed by regno.

                            (eg)
                            Submit your  file on or before 6th of october 2022.
                            if any one dont have the LMS only they can submit through google classroom
                        </p>
                    </div>

                    <div className='mt-4 p-1 sm:p-0 '>

                        <Box className=' cursor-pointer w-80 flex flex-row justify-between ' borderWidth='1px' borderRadius='md' overflow='hidden'>

                            <div className='w-1/3 border-r-2 p-3 flex justify-center items-center '>
                                <Image
                                    src={'https://fonts.gstatic.com/s/i/productlogos/drive_2020q4/v8/web-48dp/logo_drive_2020q4_color_1x_web_48dp.png'}
                                    alt="drive image"
                                    width={48}
                                    height={48}
                                />
                            </div>


                            <div className='w-2/3 p-3 flex justify-center items-center'>

                                <div className='w-full'>
                                    <h1 className='text-gray-700 font-medium  '>ICA Power Point.rar</h1>
                                    <h1 className=' text-sm'>Compressed Archive</h1>
                                </div>

                            </div>

                        </Box>


                    </div>

                    <div className='mt-6 py-4 border-t-2'>
                        <div className='flex flex-row'>
                            <BsPeople className='my-auto text-xl ' />
                            <h2 className='my-auto ml-2 font-medium'>Class comments</h2>
                        </div>

                        <div className='my-4 pb-3 border-b-2'>
                            <UserComment />
                            <UserComment />
                            <UserComment />
                            <UserComment />
                            <UserComment />
                        </div>

                        <div className='mt-5 flex flex-row'>
                            <Avatar className='my-auto mr-4' size='sm' bg='teal.500' />
                            <InputGroup className='my-auto' size='md'>
                                <Input
                                    style={{ borderRadius : 20 }}
                                    pr='4.5rem'
                                    type='text'
                                    placeholder='Enter password'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' variant={'ghost'} >
                                        <BsCaretRight className='text-xl' />
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </div>


                    </div>


                </div>

                <div className='w-full lg:w-72'>
                    <YourWork />
                    <PrivateComment />
                </div>


            </div>
        </div>
    )
}

export default ViewAssignmentBody