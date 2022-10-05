/* eslint-disable react/no-unescaped-entities */
import { Avatar, Box, Button, IconButton } from '@chakra-ui/react'
import React from 'react'
import { BsGear , BsFillFileEarmarkTextFill , BsThreeDotsVertical} from 'react-icons/bs'
import { useAuth } from '../../../../context/AuthUserContext';

function NewAssignment() {

    const { authUser, setAuthUser } = useAuth();
    //@ts-ignore
    const avatar = authUser != null ? authUser.photoURL : 'https://bit.ly/dan-abramov'

    return (
        <Box className='p-2  pb-3' borderWidth='1px' borderRadius='lg' overflow='hidden'>

            <div className='flex flex-row w-full justify-between cursor-pointer'>

                <div className='flex mt-2 flex-row'>
                    
                    <div className=' bg-blue-700 w-10 h-10 p-3  rounded-full mr-2'>
                        <BsFillFileEarmarkTextFill className='text-white' />
                    </div>

                    <div>
                        <h2 className='cursor-pointer shrink-0 text-sm my-auto  font-medium'>Assignment: "ICA-Excel"
                        Varnarubiny Surendranathan posted a new assignment: ICA-Excel</h2>
                        <h2 className='text-xs text-gray-400'>Sep 14</h2>
                    </div>
                
                </div>

                <IconButton className='my-auto' size={'sm'} aria-label='Search database' icon={<BsThreeDotsVertical />} />

            </div>

        </Box>
    )
}

export default NewAssignment