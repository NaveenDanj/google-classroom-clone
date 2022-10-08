import {Button, Input, Modal , ModalContent, ModalFooter, ModalHeader, ModalOverlay, UnorderedList, useDisclosure } from '@chakra-ui/react'
import React , {useEffect} from 'react'
import { IUser } from '../../Constants';
import {useAuth} from '../../context/AuthUserContext';

function CreateClass() {

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


    const handleSizeClick = () => {
        onOpen()
    }

    return (
        <>
            <Button 
                colorScheme='twitter'
                variant='ghost'
                onClick={() => handleSizeClick()}
            >
                Create class
            </Button>

            <Modal isCentered={true} onClose={onClose} size={'lg'} isOpen={isOpen}>
                <ModalContent>

                    <div className='mt-0'>
                        <div className='p-5'>
                            <h2 className='font-medium '>Create class</h2>  
                            <Input
                                size={'lg'}
                                className='mt-5'
                                placeholder='Class name (required)'
                            />
                            <Input
                                size={'lg'}
                                className='mt-5'
                                placeholder='Section'
                            />
                            <Input
                                size={'lg'}
                                className='mt-5'
                                placeholder='Subject'
                            />
                            <Input
                                size={'lg'}
                                className='mt-5'
                                placeholder='Room'
                            />
                        </div>
                    </div>

                    <ModalFooter>
                        <Button variant={'ghost'} className='mr-2' onClick={onClose}>Close</Button>
                        <Button colorScheme={'twitter'}>Create</Button>
                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    )
}

export default CreateClass;