import { Avatar, Box, Button, IconButton } from '@chakra-ui/react'
import React from 'react'
import { BsCardImage, BsFillPersonLinesFill, BsFolder2Open, BsPlusLg, BsThreeDotsVertical } from 'react-icons/bs'

const ClassCard = () => {
    return (
        <Box className='pb-0' borderWidth='1px' boxShadow={'md'} borderRadius='lg' overflow='hidden'>
            <div style={{ backgroundImage : 'url("https://gstatic.com/classroom/themes/img_breakfast.jpg")' , objectFit: 'cover' }} className='p-3 min-h-24 bg-red-300'>
                <div className='flex flex-row w-full justify-between'>
                    <h1 className='text-2xl text-white'>Level 1 science</h1>
                    <IconButton variant={'ghost'}  size={'sm'} aria-label='Search database' icon={<BsThreeDotsVertical className='text-white' />} />
                </div>
                <h3 className='text-sm text-white'>Subject</h3>
                <h3 className='text-sm mt-1 text-white'>Naveen Hettiwaththa</h3>
            </div>

            <div className='px-5 relative top-[-32px] w-full flex flex-row justify-end'>
                <Avatar size={'lg'}  />
            </div>

            <div className='px-5 relative top-[-37px]'>
                <h3 className='text-sm text-gray-400'>Due today</h3>
                <h3 className='text-sm text-gray-500'>ICA-Powerpoint</h3>
            </div>

            <div className='p-3 flex flex-row justify-end border-t-2'>
                <IconButton className='mr-5' variant={'ghost'}  size={'sm'} aria-label='Search database' icon={<BsFillPersonLinesFill className='text-xl' />} />
                <IconButton variant={'ghost'}  size={'sm'} aria-label='Search database' icon={<BsFolder2Open className='text-xl' />} />
            </div>

        </Box>
    )
}

export default ClassCard 