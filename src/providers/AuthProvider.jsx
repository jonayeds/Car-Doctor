/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config'
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

//   create user
const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, user=>{
        setUser(user)
        console.log(user)
    })
    unsubscribe()
})

// login
const logIn = (email, password)=>{
  return signInWithEmailAndPassword(auth, email, password)
}
// console.log(user)
  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
