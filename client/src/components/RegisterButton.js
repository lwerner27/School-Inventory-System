import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const RegisterButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <button
            onClick={() =>
                loginWithRedirect({
                    screen_hint: 'signup',
                })
            }
            className='btn btn-primary btn-block mb-2'
        >
            Register
        </button>
    );
};

export default RegisterButton;
