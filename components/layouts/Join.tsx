import React , {useEffect} from 'react'
import { Button } from '@chakra-ui/react'
import { getAuth, signInWithPopup,  GoogleAuthProvider } from "firebase/auth";
import {useRecoilState } from 'recoil';
import {useAuth} from '../../context/AuthUserContext';


function Join() {
    
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const { authUser , setAuthUser} = useAuth();

    const handleGoogleJoin = async() => {

        try{
            let results = await signInWithPopup(auth , provider);
            //@ts-ignore
            setAuthUser(results)
            console.log(results);
        }catch(err){
            console.log(err);
        }
    };

    return (
        <>
            <Button onClick={handleGoogleJoin} className=' my-auto mr-2' colorScheme='teal' variant='outline'>
                Join
            </Button>
        </>
    )
}

export default Join