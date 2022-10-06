import { Avatar } from '@chakra-ui/react'
import React from 'react'

const UserComment = () => {
  return (
    <div className='flex flex-row mb-3'>
        <Avatar className='my-auto mr-4' size='sm' bg='teal.500' />
        <div className='ml-0 my-auto'>
            <h1 className='text-sm font-medium'>Amjad Hussain <span className='text-xs text-gray-400 ml-1'>Oct 2</span></h1>
            <p>Maam we cant put header on slide because only footer available, what should we do 🤔</p>
        </div>
    </div>
  )
}

export default UserComment