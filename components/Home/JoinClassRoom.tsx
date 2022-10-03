import { Avatar, Box, Button, Input, ListItem, Modal , ModalContent, ModalFooter, ModalHeader, ModalOverlay, UnorderedList, useDisclosure } from '@chakra-ui/react'
import { User } from 'firebase/auth';
import React , {useEffect} from 'react'
import {BsX} from 'react-icons/bs';
import { IUser } from '../../Constants';
import {useAuth} from '../../context/AuthUserContext';

function JoinClassRoom() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { authUser, loading } =  useAuth();
    
    //@ts-ignore
    const user:IUser = authUser;

    let userData:IUser = {
        photoURL :  user.photoURL,
        email : user.email,
        displayName : user.displayName,
        phoneNumber : user.phoneNumber,
        uid : user.uid
    }

    // useEffect(() => {

    // } ,[isOpen])

    const handleSizeClick = () => {
        onOpen()
    }

    return (
        <>
            <Button 
                onClick={() => handleSizeClick()}
                colorScheme='twitter'
                variant='solid'
            >
                Join class
            </Button>

            <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
                <ModalContent>

                    <div className='flex flex-row justify-between p-3 w-full border-b-2 '>
                        <div className='flex flex-row'>
                            <Button className='my-auto' variant={'ghost'} onClick={onClose}>
                                <BsX size={'md'} />
                            </Button>
                            <h1 className='text-xl ml-2 my-auto'>Join class</h1>
                        </div>
                        {/* <ModalHeader>Join class</ModalHeader> */}
                        {/* <ModalCloseButton /> */}
                        <Button size={'md'} colorScheme='twitter' className='my-auto'>Join</Button>
                    </div>

                    <div className='flex justify-center mt-5'>
                        <div>
                            <Box w='lg' className='p-5' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                <h2>You are currently signed in as</h2>
                                <div className='flex flex-row mt-3'>
                                    <Avatar className='my-auto h-12'  name='Dan Abrahmov' src={userData.photoURL != null ? userData.photoURL : ""  } />
                                    <div className='ml-4'>
                                        <h1 className='font-medium  my-auto'>{user != null && user.displayName}</h1>
                                        <h1 className=' text-sm text-gray-400 my-auto'>{user != null && user.email}</h1>

                                    </div>
                                </div>
                            </Box>

                            <Box w='lg' className='p-5 mt-4' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                <h2 className='text-lg'>Class code</h2>
                                <h2 className='text-sm'>Ask your teacher for the class code, then enter it here.</h2>
                                <Input
                                    w={245}
                                    size={'lg'}
                                    className='mt-5'
                                    placeholder='Class code'
                                />
                            </Box>

                            <div className='p-5'>
                                <h2 className='font-medium '>To sign in with a class code</h2>
                                <UnorderedList className="pl-3">
                                    <ListItem className='mt-2'>Use an authorized account</ListItem>
                                    <ListItem className='mt-3'>Use a class code with 5-7 letters or numbers, and no spaces or symbols</ListItem>
                                </UnorderedList>
                                <h2 className='text-sm mt-3'>If you have trouble joining the class, go to the Help Center article</h2>
                            </div>

                        </div>

                    </div>

                    <ModalFooter>
                        {/* <Button onClick={onClose}>Close</Button> */}
                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    )
}

export default JoinClassRoom