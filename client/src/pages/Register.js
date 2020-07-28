import React from 'react';

class Register extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-md-6 m-auto'>
                        <div className='card card-body'>
                            <form action='/accounts/register' method='POST'>
                                {/* First name & Last Name row */}
                                <div className='form-row'>
                                    <div className='form-group col-md-6 col-sm-12'>
                                        <label htmlFor='firstName'>
                                            First Name:
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='firstName'
                                            id='firstName'
                                        />
                                    </div>
                                    <div className='form-group col-md-6 col-sm-12'>
                                        <label htmlFor='lastName'>
                                            Last Name:
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='lastName'
                                            id='lastName'
                                        />
                                    </div>
                                </div>
                                {/* Username Row */}
                                <div className='form-row'>
                                    <div className='form-group col-md-12'>
                                        <label htmlFor='username'>
                                            Username:
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='username'
                                            id='username'
                                        />
                                    </div>
                                </div>
                                {/* Password row */}
                                <div className='form-row'>
                                    <div className='form-group col-md-12'>
                                        <label htmlFor='password'>
                                            Password:
                                        </label>
                                        <input
                                            type='password'
                                            className='form-control'
                                            name='password'
                                            id='password'
                                        />
                                    </div>
                                </div>
                                {/* Confirm Password Row */}
                                <div className='form-row'>
                                    <div className='form-group col-md-12'>
                                        <label htmlFor='password'>
                                            Confirm Password:
                                        </label>
                                        <input
                                            type='password'
                                            className='form-control'
                                            name='confirmPassword'
                                            id='confirmPassword'
                                        />
                                    </div>
                                </div>
                                {/* Location Row */}
                                <div className='form-row'>
                                    <div className='form-group col-md-12'>
                                        <label htmlFor='location'>
                                            Location:
                                        </label>
                                        <select
                                            name='location'
                                            id='location'
                                            className='form-control'
                                        >
                                            <option selected disabled>
                                                Choose...
                                            </option>
                                            <option>MEL</option>
                                            <option>KEL</option>
                                            <option>PEL</option>
                                            <option>HMS</option>
                                            <option>HHS</option>
                                        </select>
                                    </div>
                                </div>
                                {/* Role row */}
                                <div className='form-row'>
                                    <div className='form-group col-md-12'>
                                        <label htmlFor='role'>Role:</label>
                                        <select
                                            name='role'
                                            id='role'
                                            className='form-control'
                                        >
                                            <option selected disabled>
                                                Choose...
                                            </option>
                                            <option>Standard User</option>
                                            <option>Administrator</option>
                                        </select>
                                    </div>
                                </div>
                                <button
                                    type='submit'
                                    className='btn btn-primary btn-block'
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
