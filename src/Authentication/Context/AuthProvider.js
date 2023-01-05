import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { app } from '../Firebase/Firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, isLoading] = useState(true);

    const emailSignUp = (email, password) => {
        isLoading(true);
      return  createUserWithEmailAndPassword(auth,email, password)
    }

    const emailSignIn = (email, password) => {
        isLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const getProfileData = (name) => {
        return updateProfile(auth.currentUser, {
        displayName: name
        })
    }

    const googleSignIn = () => {
        isLoading(true);
       return signInWithPopup(auth,googleProvider)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
       const unsubscribe =onAuthStateChanged(auth, (currentUser => {
            setUser(currentUser);
            console.log('current user:', currentUser);
           isLoading(false);
       }))
        return () => {
            unsubscribe();
        }
    },[])


    const authInfo = {user, loading, isLoading, emailSignIn, emailSignUp,getProfileData,googleSignIn,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
           { children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;