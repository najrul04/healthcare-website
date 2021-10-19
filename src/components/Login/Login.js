import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {

    const {user, signInUsingGoogle} = useFirebase();

    return (
        <div>
            <div>

                <h1>Login</h1>

                <form onSubmit=''>

                <input className='my-2' type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input className='my-2' type="password" name="" id="" placeholder='Your Password'/>
                <br />
                <input className='regular_button my-2' type="submit" value="Submit" />

                </form>

                <p>New to General Hospital? <Link to='/register'>Create Account</Link> </p>

                <div>----------------------or---------------------</div>

                <br />

                <button className="regular_button"
                
                onClick={signInUsingGoogle}

                >Google Sign In</button>

            </div>
        </div>
    );
};

export default Login;