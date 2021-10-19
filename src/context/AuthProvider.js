import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import usePatientinfo from '../hooks/usePatientinfo';

export const Context = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser, googleSignIn, logOut] = useFirebase();
    const [petientInfo, setPetientInfo] = usePatientinfo();

    return (
        <Context.Provider value={{ firebases: [user, setUser, googleSignIn, logOut], patientInfos: [petientInfo, setPetientInfo] }}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;