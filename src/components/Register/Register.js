import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>

                <h2 className="my-4">Register: Create Account</h2>
                <form onSubmit=''>

                    <input className="my-1" type="email" name="" id="" placeholder='Your Email'/>
                    <br />
                    <input className="my-1" type="password" name="" id="" placeholder='Your Password'/>
                    <br />
                    <input className="my-1" type="password" name="" id="" placeholder='Re-Enter Password'/>
                    <br />
                    <input className="regular_button my-1" type="submit" value="Submit" />

                </form>

                <p>Already have an account? <Link to='/login'>Login</Link></p>

                <div>-----------------or----------------</div>

                <button className="regular_button">Google Sign In</button>

            </div>
        </div>
    );
};

export default Register;