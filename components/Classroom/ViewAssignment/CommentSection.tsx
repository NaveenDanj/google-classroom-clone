import { Avatar, InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react'
import React from 'react'
import { BsPeople, BsCaretRight } from 'react-icons/bs'
import UserComment from '../../Global/UserComment'

const CommentSection = () => {
    return (
        <div className='mt-6 py-4 border-t-2'>
            <div className='flex flex-row'>
                <BsPeople className='my-auto text-xl ' />
                <h2 className='my-auto ml-2 font-medium'>Class comments</h2>
            </div>

            <div className='my-4 pb-3 border-b-2'>
                <UserComment />
                <UserComment />
                <UserComment />
                <UserComment />
                <UserComment />
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


        </div>
    )
}

export default CommentSection