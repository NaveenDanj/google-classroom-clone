import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
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
      setAuthUser(_user);
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
