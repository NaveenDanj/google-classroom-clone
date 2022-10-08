import { createContext, useContext, Context } from 'react'
import useFirebaseAuth from '../config/useFirebaseAuth.tsx';
import { IUser } from '../Constants';

const AuthUserContext = createContext({
  authUser:IUser =  {
    displayName : '',
    email : '',
    phone : '',
    uid : '',
    photoURL : ''
  },
  loading: true,
  setAuthUser : null
});

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider
        value={auth}
    >
        {children}
    </AuthUserContext.Provider>
  ); 
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(AuthUserContext);
