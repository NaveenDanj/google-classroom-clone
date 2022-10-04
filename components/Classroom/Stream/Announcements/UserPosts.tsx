/* eslint-disable react/no-children-prop */
import { CheckIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { BsGear, BsFillCursorFill } from 'react-icons/bs'

function UserPosts() {
    return (
        <Box className='p-2  pb-3' borderWidth='1px' borderRadius='lg' overflow='hidden'>

            <div className='flex flex-row w-full justify-between cursor-pointer'>

                <div className='flex mt-2 flex-row'>
                    <Avatar
                        className='my-auto mr-2'
                        size='sm'
                        name='Dan Abrahmov'
                        src={'https://bit.ly/dan-abramov'}
                    />
                    <div>
                        <h2 className='cursor-pointer text-sm my-auto  font-medium'>Varnarubiny Surendranathan</h2>
                        <h2 className='text-xs text-gray-400'>Sep 14</h2>
                    </div>
                </div>


                <Button className=' my-auto mr-2' size={'md'} colorScheme='teal' variant='ghost'>
                    <BsGear />
                </Button>

            </div>

            <div className='ml-1 mt-2 mb-5'>
                <p className='text-sm font-normal '>About ICA-Word Assignment</p>
                <p className='text-xs mt-1'>Velit reprehenderit tempor laborum ea sunt qui officia ex minim labore pariatur proident deserunt et. Nulla minim velit magna proident aliquip consectetur elit sint dolor. In labore proident labore eu.</p>
            </div>

            <div className='flex flex-row ml-1 pt-3 pb-3 mt-1 border-t-2'>
                <Avatar
                    className='my-auto mr-2'
                    size='sm'
                    name='Dan Abrahmov'
                    src={'https://bit.ly/dan-abramov'}
                />
                <InputGroup>
                    <Input
                        placeholder="Add class comment..."
                        size="md"
                        className=' rounded-2xl '
                        type="text"

                    />
                    {/* <BsFillCursorFill /> */}
                    {/* @ts-ignore */}
                    <InputRightElement children={<BsFillCursorFill color='blue' />} />
                </InputGroup>
            </div>

        </Box>
    )
}

export default UserPosts