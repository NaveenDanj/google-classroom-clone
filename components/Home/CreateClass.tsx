import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Input, Modal, ModalContent, ModalFooter, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import { addDoc, collection} from "firebase/firestore";
import { db } from '../../config/FirebaseApp';
import { useAuth } from '../../context/AuthUserContext';
import EventLoading from '../Global/EventLoading';


function CreateClass() {
    const { authUser } = useAuth();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [error , setError] = useState<string>('');
    const [loading , setLoading] = useState<boolean>(false);
    const { register, handleSubmit , reset } = useForm();
    const submitButton = useRef();
    const resetButton = useRef();

    const onSubmit = async (data: any) => {

        setError('');
        
        try {
            data.owner = authUser.uid;
            setLoading(true);
            let res = await addDoc(collection(db, "classes"), data);
            setLoading(false);
            reset();
        } catch (err:any) {
            console.log(err);
            setError(err);
            setLoading(false);
        }
        
    };

    const handleClose = () => {
        // @ts-ignore
        reset();
        onClose();
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

            <Modal isCentered={true} onClose={handleClose} size={'lg'} isOpen={isOpen}>
                <ModalContent>

                    <div className='mt-0'>
                        {/* @ts-ignore */}
                        <form onSubmit={handleSubmit(onSubmit)} className='p-5'>
                            <h2 className='font-medium '>Create class</h2>

                            {error != '' && (<Alert className='mt-2' status='error'>
                                <AlertIcon />
                                <AlertTitle>Error </AlertTitle>
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>)}

                            <Input
                                size={'lg'}
                                className='mt-5'
                                placeholder='Class name (required)'
                                {...register('className', { required: true })}
                            />
                            <Input
                                size={'lg'}
                                className='mt-5'
                                placeholder='Section'
                                {...register('section', { required: true })}
                            />
                            <Input
                                size={'lg'}
                                className='mt-5'
                                placeholder='Subject'
                                {...register('subject', { required: true })}
                            />
                            <Input
                                size={'lg'}
                                className='mt-5'
                                placeholder='Room'
                                {...register('room', { required: true })}
                            />
                            {/* @ts-ignore */}
                            <input ref={submitButton} style={{ display: 'hidden' }} type={'submit'} value='' />
                            {/* @ts-ignore */}
                            <input ref={resetButton} style={{ display: 'hidden' }} type={'reset'} value='' />

                        </form>
                    </div>

                    <ModalFooter>
                        <Button variant={'ghost'} className='mr-2' onClick={handleClose}>Close</Button>
                        <Button
                            className='flex'
                            colorScheme={'twitter'}
                            disabled={loading}
                            //@ts-ignore
                            onClick={() => submitButton.current.click()}
                        >   
                            <div className='my-auto'>
                                {loading && <EventLoading />}
                            </div>
                            <span className='ml-2 my-auto'>Create</span>
                        </Button>
                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    )
}

export default CreateClass;