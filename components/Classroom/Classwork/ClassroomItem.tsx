import { Box, IconButton } from '@chakra-ui/react'
import React from 'react'
import { BsFillFileEarmarkTextFill, BsThreeDotsVertical } from 'react-icons/bs'

const ClassroomItem = () => {
    return (
        <Box className='p-2 mt-2  pb-3' borderWidth='1px' borderRadius='lg' overflow='hidden'>

            <div className='flex flex-row w-full justify-between cursor-pointer'>

                <div className='flex mt-2 flex-row'>

                    <div className=' bg-blue-700 w-10 h-10 p-3  rounded-full mr-2'>
                        <BsFillFileEarmarkTextFill className='text-white' />
                    </div>

                        <h2 className=' w-3/4 cursor-pointer shrink-0 text-sm my-auto  font-medium'>Assignment: ICA-Excel
                            Varnarubiny Surendranathan posted a new assignment: ICA-Excel</h2>

                </div>

                <div className='flex flex-row'>
                    <h2 className='my-auto mr-2 text-sm text-gray-400'>Posted Sep 9</h2>
                    <IconButton className='my-auto' size={'sm'} aria-label='Search database' icon={<BsThreeDotsVertical />} />
                </div>

            </div>

        </Box>
    )
}

export default ClassroomItem