import { Button } from '@chakra-ui/react'
import React from 'react'
import { BsCardChecklist, BsFillCalendar2RangeFill, BsFolder } from 'react-icons/bs'

const ClassesHeader = () => {
    return (
        <div>

            <Button variant='ghost' className='p-3' leftIcon={<BsFillCalendar2RangeFill />} colorScheme='blue'>
                <h1 className=' hidden md:block'>My Calendar</h1>
            </Button>

            <Button variant='ghost' className='p-3 my-auto' leftIcon={<BsCardChecklist />} colorScheme='blue'>
                <h1 className='hidden md:block'>To do</h1>
            </Button>

        </div>
    )
}

export default ClassesHeader