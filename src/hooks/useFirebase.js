import {useEffect, useState} from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";
import initializeAuthentication from '../Firebase/Firebase.init';

initializeAuthentication()

const useFirebase = () => {

    const [user, setUser] = useState({});

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{

        signInWithPopup(auth, googleProvider)
        .then(result => {

            console.log(result.user);

        })

    }

    const logOut = () =>{

        signOut(auth)
        .then(() => {

            setUser({})

        })

    }

    // Check if the user auth state is changed or not

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {

              setUser(user)

            }

          });

    }, [])

    return{

        user,
        signInUsingGoogle,
        signOut,
        logOut


    }

}

export default useFirebase;