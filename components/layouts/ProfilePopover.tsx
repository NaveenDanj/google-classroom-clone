import React from 'react'
import { Avatar, Button, Popover,  PopoverBody,  PopoverContent, PopoverTrigger } from '@chakra-ui/react'
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'next/router'

interface Prop {
    photoURL : string;
    userData : any
}

const ProfilePopover = ({photoURL , userData}:Prop) => {

    const router = useRouter()

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            //@ts-ignore
            // router.reload(window.location.pathname)
        }).catch((error) => {
        // An error happened.
        });
    }


    return (
        <>
            <Popover>

                <PopoverTrigger>
                    <Avatar className='mt-1 cursor-pointer' size='sm' name='Dan Abrahmov' src={photoURL} />
                </PopoverTrigger>

                <PopoverContent>
                    <PopoverBody className='p-5'>

                        <div className='flex justify-center w-full pb-5'>
                            
                            <div>
                                <div className='mx-auto w-full'>
                                    <div className='flex justify-center'>
                                        <Avatar className='mx-auto my-auto' size='lg' name='Dan Abrahmov' src={photoURL} />
                                    </div>
                                    <div className='flex mt-1 justify-center'>
                                        <h1 className=' font-semibold text-center'>{userData && userData.displayName}</h1>
                                    </div>
                                    <div className='flex mt-1 justify-center'>
                                        <h1 className=' text-sm font-medium text-gray-500 text-center'>{userData && userData.email}</h1>
                                    </div>
                                    <div className='flex mt-4 justify-center'>
                                        <Button onClick={handleSignOut} variant='outline'>Sign out of the account</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </PopoverBody>
                </PopoverContent>
            </Popover>

        </>
    )
}

export default ProfilePopover
