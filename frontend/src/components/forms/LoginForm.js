import axios from 'axios';
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import swal from 'sweetalert';
import { setAuthentication } from '../auth/auth';

export const LoginForm = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = userData;

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }

    console.log(userData);

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        await axios.post('/api/users/login', { email, password }).then(res => {
            setLoading(false);
            if (res.status === 200) {
                setAuthentication(res.data.user, res.data.token)
                swal('Great!', res.data.successMessage, 'success');
                history.push('/dashboard');
            } else {
                swal('Sorry!', res.data.errorMessage, 'error');
            }
        })
    }


    return (
        loading ?
            <div className='text-center my-5'>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            :
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" autoComplete='aksk' placeholder="Email" required name='email' onChange={handleChange} />
                        <label for="floatingInput">Email</label>
                        <span className='border-anim'></span>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required name='password' onChange={handleChange} />
                        <label for="floatingPassword">Password</label>
                        <span className='border-anim'></span>
                    </div>
                    <div className='d-flex justify-content-between nowrap mt-4'>
                        <div className='checkbox d-flex gap-2'>
                            <input type="checkbox" className='' />
                            <label for="inputCheckbox" className='remember fw-light'>Remember me</label>
                        </div>
                        <Link className='text-decoration-none' to='#'>Forgot Password?</Link>
                    </div>
                    <div className='mt-4'>
                        <button className='btn submit w-100'>Sign In</button>
                    </div>
                </form>
            </div>
    )
}
