import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Input, Modal, ModalContent, ModalFooter, useDisclosure } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import { addDoc, collection} from "firebase/firestore";
import { db } from '../../config/FirebaseApp';
import { useAuth } from '../../context/AuthUserContext';


function CreateClass() {
    const { authUser } = useAuth();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [error , setError] = useState<string>('');
    const { register, handleSubmit } = useForm();
    const submitButton = useRef();


    const onSubmit = async (data: any) => {

        setError('');
        
        try {
            data.owner = authUser.uid;
            let res = await addDoc(collection(db, "classes"), data);
            console.log(res);

        } catch (err:any) {
            console.log(err);
            setError(err);
        }
        
    };

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

                        </form>
                    </div>

                    <ModalFooter>
                        <Button variant={'ghost'} className='mr-2' onClick={onClose}>Close</Button>
                        <Button
                            colorScheme={'twitter'}
                            //@ts-ignore
                            onClick={() => submitButton.current.click()}
                        >
                            Create
                        </Button>
                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    )
}

export default CreateClass;