import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../Config/firebase.config";
export const AuthContext = createContext(null)
export default function AuthProvider({ children }) {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);

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
    const ProfileUpdate=(profile)=>{
        return updateProfile(auth,profile)
    }
    const userInfo = {
       user,
       loading,
       createUser,
       loginUser,
       logOutUser,
       ProfileUpdate
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}
