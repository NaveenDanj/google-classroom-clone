import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {IUser} from "../Constants"

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (_user) => {
      if (!_user) {
        setAuthUser(null);
        setLoading(false);
        return;
      }
      setLoading(true);

      let user: IUser = {
        displayName : _user.displayName,
        email : _user.email,
        photoURL : _user.photoURL,
        phoneNumber : _user.phoneNumber,
        uid : _user.uid
      }

      setAuthUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return {
    setAuthUser,
    authUser,
    loading,
  };
}
