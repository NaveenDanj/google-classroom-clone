import React , {useEffect} from 'react'
import { Button } from '@chakra-ui/react'
import { getAuth, signInWithPopup,  GoogleAuthProvider } from "firebase/auth";
import state from '../../state/';
import {useRecoilState , useRecoilValue} from 'recoil';
import { IUser } from '../../Constants';
import userState from '../../state/userState';


function Join() {
    
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user , setUser] = useRecoilState(state.userState);
    
    useEffect(() => {
        console.log(user);
    }, [user]);

    const handleGoogleJoin = async() => {
        let results = await signInWithPopup(auth , provider);
        setUser({
            displayName : results.user.displayName,
            phoneNumber : results.user.phoneNumber,
            email : results.user.email,
            photoURL : results.user.photoURL,
            uid : results.user.uid
        })
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