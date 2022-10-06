import { Avatar, Box, Button, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { BsFillFileEarmarkTextFill, BsPeople , BsCaretRight, BsThreeDotsVertical } from 'react-icons/bs'
import UserComment from '../../Global/UserComment'
import Attachments from './Attachments'
import CommentSection from './CommentSection'
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

                        <IconButton className='my-auto' size={'sm'} aria-label='Search database' icon={<BsThreeDotsVertical />} />


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

                    <Attachments />

                    <CommentSection />


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