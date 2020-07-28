import React from 'react';
import './App.css';

function App() {
    return (
        <div className='App'>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-md-6 m-auto'>
                        <div class='card card-body text-center'>
                            <h1>
                                <i className='fab fa-node-js fa-3x'></i>
                            </h1>
                            <p>Create Account or Login</p>
                            <a
                                href='/accounts/register'
                                className='btn btn-primary btn-block mb-2'
                            >
                                Register
                            </a>
                            <a
                                href='/accounts/login'
                                className='btn btn-secondary btn-block mb-2'
                            >
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
