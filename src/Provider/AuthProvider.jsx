import { getAuth, onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const provider = new GoogleAuthProvider();

    const googleSign = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
            .finally(() => setLoading(false));  // Make sure to stop loading once the process is finished
    };

    const logout = () => {
        setLoading(true);
        return signOut(auth)
            .finally(() => setLoading(false));  // Make sure to stop loading once the process is finished
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);  // Ensure useEffect runs only once

    const AuthInfo = {
        user,
        loading,
        googleSign,
        logout,
    };

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
