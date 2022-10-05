import { Avatar, Box, IconButton } from '@chakra-ui/react'
import React from 'react'
import { BsFillFileEarmarkTextFill, BsThreeDotsVertical } from 'react-icons/bs'

const PeopleCard = () => {
    return (
        <Box className='p-2 mt-2  pb-3 border-b-2' borderRadius='lg' overflow='hidden'>

            <div className='flex flex-row w-full justify-between cursor-pointer'>

                <div className='flex mt-2 flex-row'>

                    <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />

                    <h2 className='ml-2 w-full cursor-pointer shrink-0 text-sm my-auto  font-medium'>
                        Varnarubiny Surendranathan
                    </h2>

                </div>

                <div className='flex flex-row'>
                    <IconButton className='my-auto' size={'sm'} aria-label='Search database' icon={<BsThreeDotsVertical />} />
                </div>

            </div>

        </Box>
    )
}

export default PeopleCard