import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import useAuth from '../../context/useAuth';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useLocation, useHistory } from 'react-router-dom';
import NavBar from '../Home/NavBar/NavBar';
import Footer from '../Home/Footer/Footer';

const Signup = () => {

    const { firebases } = useAuth();
    const [user, setUser, googleSignIn] = firebases;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const auth = getAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const signInGoogle = () => {
        googleSignIn()
            .then(res => {
                setUser(res.user);
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const createUser = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                setSuccess(true);
                updateName();
            })
            .catch(error => {
                setSuccess(false);
                setError(error.message);
            })
    }

    const updateName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(res => {

            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className="auth-area">
            <NavBar />
            <div className="container">
                <div className="sign-form">
                    {
                        error ? <div className="alert alert-danger" role="alert">
                            {error}
                        </div> : ''
                    }
                    {
                        success && <div className="alert alert-success" role="alert">
                            User sign up successfully! Now user can sign in.
                        </div>
                    }
                    <h1 className="text-center my-3">Sign Up</h1>
                    <form onSubmit={createUser}>
                        <input onBlur={(e) => setName(e.target.value)} type="text" placeholder="Name" /><br /><br />
                        <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Email" /><br /><br />
                        <input onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" /><br /><br />
                        <Link to="/signin">Have you account?</Link><br />
                        <button className="myBtn mt-3">Sign Up <i class="fas fa-arrow-alt-circle-right"></i></button>
                    </form>
                    <p className="mt-3 fw-bold" ___>______________________OR_________________________</p>
                    <button onClick={signInGoogle} className="gBtn mt-2"><i class="fab fa-google"></i> Sign In With Google</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Signup;