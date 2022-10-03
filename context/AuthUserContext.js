import { createContext, useContext, Context } from 'react'
import useFirebaseAuth from '../config/useFirebaseAuth.tsx';

const AuthUserContext = createContext({
  authUser: null,
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
