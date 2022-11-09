import React, {  useEffect, useState } from 'react';
import { createContext } from 'react';

import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../Firebase.init/Firebase.init';
export const AuthContext = createContext()
 const auth = getAuth(app)
const AuthProvider = ({children}) => {
   

const [user, setUser] = useState({});
const [loading, setLoading] = useState(true);


const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile)
 }

 const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };


 const logOut = () => {
    return signOut(auth);
  };




  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (logInUser) => {
      setUser(logInUser);
      
    });

    return () => {
      unsubscribe();
    };
  }, []);


const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
    logOut,
    loginUser,
    loginWithGoogle,
  };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;