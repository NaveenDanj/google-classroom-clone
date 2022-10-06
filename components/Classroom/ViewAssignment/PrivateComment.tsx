import { Avatar, Box, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { BsCaretRight, BsPeople, BsPlusLg } from 'react-icons/bs'
import UserComment from '../../Global/UserComment'

const PrivateComment = () => {
    return (
        <Box className='p-5 pb-3 mt-5 mb-3' borderWidth='1px' boxShadow={'md'} borderRadius='lg' overflow='hidden'>

            <div className='flex flex-row'>
                <BsPeople className='my-auto text-xl ' />
                <h2 className='my-auto text-sm ml-2 font-medium'>Private comments</h2>
            </div>

            <div className='mt-5 flex flex-row'>
                <Avatar className='my-auto mr-4' size='sm' bg='teal.500' />
                <InputGroup className='my-auto' size='md'>
                    <Input
                        style={{ borderRadius: 20 }}
                        pr='4.5rem'
                        type='text'
                        placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' variant={'ghost'} >
                            <BsCaretRight className='text-xl' />
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </div>

        </Box>
    )
}

export default PrivateComment