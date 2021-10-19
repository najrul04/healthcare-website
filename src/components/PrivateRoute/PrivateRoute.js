import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../context/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { firebases } = useAuth();
    const [user] = firebases;

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;