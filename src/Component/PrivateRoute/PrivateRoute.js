import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hook/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    

   
    if (loading) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    } else {

        return (
            <Route
                {...rest}
                render={({ location }) =>
                    user.email ? children : <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    ></Redirect>
                }

            >

            </Route>
        );

    }

};

export default PrivateRoute;