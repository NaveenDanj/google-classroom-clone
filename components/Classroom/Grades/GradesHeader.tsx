/* eslint-disable react/no-children-prop */
import { CheckIcon } from '@chakra-ui/icons'
import { Button, Checkbox, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { BsFillCalendar2RangeFill, BsFolder, BsPlus, BsSearch } from 'react-icons/bs'

const GradesHeader = () => {
    return (
        <div className='flex flex-row justify-end border-b-2 pb-5 pt-3 mt-2'>

            <div className='flex flex-row'>
                {/* <Button variant='ghost' className='p-3' leftIcon={<BsFillCalendar2RangeFill />} colorScheme='pink'>
                    <h1 className=' hidden md:block'>My Calendar</h1>
                </Button> */}
                <InputGroup size='md'>
                    <Input
                        className='rounded-lg'
                        placeholder="Search Assignments"
                        size="md"
                        type="text"
                    />
                    <InputRightElement children={<BsSearch />} />

                </InputGroup>

                {/* <Button variant='ghost' className='p-3' leftIcon={<BsFolder />} colorScheme='pink'>
                    <h1 className=' hidden md:block'>Storage folder</h1>
                </Button> */}
            </div>

        </div>
    )
}

export default GradesHeader