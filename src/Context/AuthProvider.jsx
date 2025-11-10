import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../Config/firebase.config";
export const AuthContext = createContext(null)
const googleProvider=new GoogleAuthProvider()
export default function AuthProvider({ children }) {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
    console.log(user)
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout user
    const logOutUser = () => {
        return signOut(auth)
    }
    // update profile
    const profileUpdate = (profile) => {
        return updateProfile(auth, profile)
    }
    const providerGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const userInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOutUser,
        profileUpdate,
        providerGoogle
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}
