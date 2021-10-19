import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import NavBar from '../Home/NavBar/NavBar';
import './Signin.css';
import { useLocation, useHistory } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Footer from '../Home/Footer/Footer';

const Signin = () => {

    const { firebases } = useAuth();
    const [user, setUser, googleSignIn] = firebases;

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [error, setError] = useState('');

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

            })
    }

    const auth = getAuth();

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setUser(res.user);
                history.push(redirect_url);
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
                        error && <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    }
                    <h1 className="text-center my-3">Sign In</h1>
                    <form onSubmit={handleSignIn}>
                        <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Email" /><br /><br />
                        <input onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" /><br /><br />
                        <Link to="/signup">Haven't You Account?</Link><br />
                        <button type="submit" className="myBtn mt-3">Sign In <i class="fas fa-arrow-alt-circle-right"></i></button>
                    </form>
                    <p className="mt-3 fw-bold" ___>______________________OR_________________________</p>
                    <button onClick={signInGoogle} className="gBtn mt-2"><i class="fab fa-google"></i> Sign In With Google</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Signin;