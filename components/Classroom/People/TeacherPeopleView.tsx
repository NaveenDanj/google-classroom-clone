import { IconButton } from '@chakra-ui/button'
import React from 'react'
import { BsThreeDotsVertical , BsFillPersonPlusFill } from 'react-icons/bs'

const TeacherPeopleView = () => {
  return (
    <div className='flex border-b-2 border-orange-600 flex-row justify-between mt-5 p-5 w-full'>
        <div>
            <h1 className=' text-2xl text-orange-600 '>Teachers</h1>
        </div>

        <IconButton colorScheme={'orange'} variant="ghost" className='my-auto' size={'md'} aria-label='Search database' icon={<BsFillPersonPlusFill style={{ fontSize : 25 }} />} />

    </div>
  )
}

export default TeacherPeopleView