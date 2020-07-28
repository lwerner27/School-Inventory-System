import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0({
        redirect_uri: 'http://localhost:3000/dashboard',
    });
    return (
        <button
            onClick={() => loginWithRedirect()}
            className='btn btn-secondary btn-block mb-2'
        >
            Log In
        </button>
    );
};

export default LoginButton;
