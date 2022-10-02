import {atom} from 'recoil';
import { IUser } from '../Constants'


const userState = atom({
    key : "userState",
    default : {
        displayName : '',
        email : '',
        phoneNumber : '',
        photoURL : '',
        uid : ''
    } as IUser
});

export default userState;