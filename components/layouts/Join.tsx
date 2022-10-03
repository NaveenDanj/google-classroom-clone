import React from 'react'
import { Button } from '@chakra-ui/react'
import { getAuth, signInWithPopup,  GoogleAuthProvider } from "firebase/auth";
import {useAuth} from '../../context/AuthUserContext';
import { useRouter } from 'next/router'
import { doc, setDoc , collection , query, where, getDocs} from "firebase/firestore"; 
import {db} from '../../config/FirebaseApp';

function Join() {

    const router = useRouter()
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const { authUser , setAuthUser} = useAuth();
    
    const handleGoogleJoin = async() => {

        try{
            let results = await signInWithPopup(auth , provider);
            //@ts-ignore
            setAuthUser(results)
            
            // check user is already exists
            const userRef = collection(db, "users");
            const q = query(userRef, where("email", "==", results.user.email));
            const querySnapshot = await getDocs(q);
            
            if(querySnapshot.empty){
                // save the user to firestore
                await setDoc(doc(db, "users", results.user.uid), {
                    displayName : results.user.displayName,
                    email : results.user.email,
                    phoneNumber : results.user.phoneNumber,
                    photoURL : results.user.photoURL,
                    uid : results.user.uid
                });
            }
            
            //@ts-ignore
            router.reload(window.location.pathname)
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