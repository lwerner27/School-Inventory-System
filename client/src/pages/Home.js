import React from 'react';
import LoginButton from '../components/LoginButton';
import RegisterButton from '../components/RegisterButton';

const Home = () => {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-6 m-auto'>
                    <div className='card card-body text-center'>
                        <h1>
                            <i className='fab fa-node-js fa-3x'></i>
                        </h1>
                        <p>Create Account or Login</p>
                        <RegisterButton />
                        <LoginButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
