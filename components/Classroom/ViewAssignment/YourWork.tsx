import { Box, Button } from '@chakra-ui/react';
import React from 'react'
import { BsPlusLg } from 'react-icons/bs';

const YourWork = () => {
  return (
    <Box className='p-3 pb-3' borderWidth='1px' boxShadow={'md'} borderRadius='lg' overflow='hidden'>
        <div className='flex flex-row justify-between mt-2'>
            <h1 className=' text-xl my-auto'>Your work</h1>
            <h3 className='text-green-500 font-medium my-auto'>Assigned</h3>
        </div>

        <div className='w-full mt-3 mb-3'>
            <Button variant={'outline'} className='w-full flex flex-row'>
                <BsPlusLg className='my-auto mr-3 text-blue-600' />
                <span className='my-auto text-blue-600'>Add or create</span>
            </Button>

            <Button variant={'solid'} colorScheme={'blue'} className='w-full flex flex-row mt-3'>
                <span className='my-auto text-white'>Mark as done</span>
            </Button>

        </div>

    </Box>
  )
}

export default YourWork;