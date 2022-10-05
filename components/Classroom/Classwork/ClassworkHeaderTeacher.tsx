import { Button } from '@chakra-ui/react'
import React from 'react'
import { BsPlus , BsFolder , BsFillCalendar2RangeFill } from 'react-icons/bs'

function ClassworkHeaderTeacher() {
  return (
    <div className='flex flex-row  justify-between border-b-2 pb-10'>

        <Button className=' rounded-3xl p-3' style={{ borderRadius : 30}} leftIcon={<BsPlus style={{fontSize : 30}} />} colorScheme='pink' variant='solid'>
            Create
        </Button>

        <div className='flex flex-row'>
            <Button variant='ghost' className='p-3' leftIcon={<BsFillCalendar2RangeFill />} colorScheme='pink'>
                <h1 className=' hidden md:block'>My Calendar</h1>
            </Button>

            <Button variant='ghost' className='p-3' leftIcon={<BsFolder />} colorScheme='pink'>
                <h1 className=' hidden md:block'>Storage folder</h1>
            </Button>
        </div>

    </div>
  )
}

export default ClassworkHeaderTeacher