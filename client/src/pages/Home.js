import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-md-6 m-auto'>
                        <div class='card card-body text-center'>
                            <h1>
                                <i className='fab fa-node-js fa-3x'></i>
                            </h1>
                            <p>Create Account or Login</p>
                            <Link
                                to='/accounts/register'
                                className='btn btn-primary btn-block mb-2'
                            >
                                Register
                            </Link>
                            <Link
                                to='/accounts/login'
                                className='btn btn-secondary btn-block mb-2'
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
