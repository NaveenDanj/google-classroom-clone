import { Modal, ModalContent, Button, Input, UnorderedList, Box, useDisclosure, Select, Switch } from '@chakra-ui/react'
import React from 'react'
import { BsGear, BsX } from 'react-icons/bs'

const ClassSettings = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleSizeClick = () => {
        onOpen()
    }

    return (
        <>

            <Button onClick={() => handleSizeClick()} className=' my-auto mr-2' colorScheme='teal' variant='ghost'>
                <BsGear className='text-lg' />
            </Button>

            <Modal onClose={onClose} size={'full'} isOpen={isOpen}>

                <ModalContent>

                    <div className='flex flex-row justify-between p-3 w-full border-b-2 '>
                        <div className='flex flex-row'>
                            <Button className='my-auto' variant={'ghost'} onClick={onClose}>
                                <BsX size={'md'} />
                            </Button>
                            <h1 className='text-xl ml-2 my-auto'>Class settings</h1>
                        </div>

                        <Button size={'md'} colorScheme='twitter' className='my-auto'>Save</Button>
                    </div>

                    <div className='p-5'>
                        <div className='mx-auto w-full sm:w-[75%] '>
                            <Box className='p-5 mt-4' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                <h1 className='text-2xl my-auto font-semibold'>Class Details</h1>

                                <Input
                                    className='mt-5'
                                    placeholder='Class name (required)'
                                />

                                <Input
                                    className='mt-3'
                                    placeholder='Class description'
                                />

                                <Input
                                    className='mt-3'
                                    placeholder='Section'
                                />

                                <Input
                                    className='mt-3'
                                    placeholder='Room'
                                />

                                <Input
                                    className='mt-3'
                                    placeholder='Subject'
                                />

                            </Box>
                        </div>
                    </div>

                    <div className='p-5'>
                        <div className='mx-auto w-full sm:w-[75%] '>
                            <Box className='p-5 mt-0' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                <h1 className='text-2xl my-auto font-semibold'>General</h1>

                                <h2 className=' text-xl mt-5 ' >Invite codes</h2>

                                <div className='flex flex-row justify-between mt-5'>
                                    <div className='my-auto'>
                                        <h1 className=' font-medium '>Manage invite codes</h1>
                                        <h3 className=' text-sm text-gray-500 '>Settings apply to both invite links and class codes</h3>
                                    </div>

                                    <div className='my-auto ml-2'>
                                        <Select variant='filled' placeholder='Turned on' />
                                    </div>

                                </div>

                                <div className='flex flex-row justify-between mt-5'>
                                    <div className='my-auto'>
                                        <h1 className=' font-medium '>Invite link</h1>
                                    </div>

                                    <div className='my-auto ml-2 w-2/3 text-right block text-sm'>
                                        <h3 className=' truncate cursor-pointer '>https://classroom.google.com/c/NTI4NTY2ODU2ODI3?cjc=a3ac6jd</h3>
                                    </div>

                                </div>

                                <div className='flex mb-5 flex-row justify-between mt-5'>
                                    <div className='my-auto'>
                                        <h1 className=' font-medium '>Class code</h1>
                                    </div>

                                    <div className='my-auto ml-2'>
                                        <h3 className=' text-sm '>a3ac6jd</h3>
                                    </div>

                                </div>

                                <hr />

                                <div className='flex flex-row justify-between mt-5'>
                                    <div className='my-auto'>
                                        <h1 className=' font-medium '>Stream</h1>
                                    </div>

                                    <div className='my-auto ml-2'>
                                        <Select variant='filled' placeholder='Student can post and comment' />
                                    </div>

                                </div>

                                <div className='flex flex-row justify-between mt-5'>
                                    <div className='my-auto'>
                                        <h1 className=' font-medium '>Classwork on the Stream</h1>
                                    </div>

                                    <div className='my-auto ml-2'>
                                        <Select variant='filled' placeholder='Student can post and comment' />
                                    </div>
                                </div>

                                <div className='flex flex-row justify-between mt-5'>
                                    <div className='my-auto'>
                                        <h1 className=' font-medium '>Show deleted items</h1>
                                        <h3 className=' text-sm text-gray-500 '>Only teachers can view deleted items.</h3>
                                    </div>

                                    <div className='my-auto ml-2'>
                                        <Switch size='md' />
                                    </div>

                                </div>


                            </Box>
                        </div>
                    </div>

                    <div className='p-5'>
                        <div className='mx-auto w-full sm:w-[75%] '>
                            <Box className='p-5 mt-0' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                <h1 className='text-2xl my-auto font-semibold'>Grading</h1>
                                <h2 className=' text-xl mt-5 ' >Grade calculation</h2>

                                <div className='flex flex-row justify-between mt-5'>
                                    <div className='my-auto'>
                                        <h1 className=' font-medium '>Overall grade calculation</h1>
                                        <h3 className=' text-sm text-gray-500 '>Choose a grading system. Learn more</h3>
                                    </div>

                                    <div className='my-auto ml-2'>
                                        <Select variant='filled' placeholder='Total points' />
                                    </div>

                                </div>

                                <div className='flex flex-row justify-between mt-5'>
                                    <div className='my-auto'>
                                        <h1 className=' font-medium '>Show overall grade to students</h1>
                                    </div>

                                    <div className='my-auto ml-2'>
                                        <Switch size='md' />
                                    </div>

                                </div>

                            </Box>
                        </div>
                    </div>

                </ModalContent>

            </Modal>


        </>
    )
}

export default ClassSettings