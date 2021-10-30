import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

export const RegisterForm = () => {
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        retype: ''
    });
    const { name, email, password, retype } = userData;

    const handleChange = (e) => {
         setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        if(password !== retype) {
            swal('Sorry!', "Passwords don't match", 'warning');
        } else {
        await axios.post('/api/users/signup', {name, email, password, retype}).then(res => {
            setLoading(false);
          if(res.status === 200) {
             swal('Great!', res.data.successMessage, 'success');
          } else {
            swal('Sorry!', res.data.errorMessage, 'error');
          }
        })
        }
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
                    <input type="text" className="form-control" id="floatingInput" placeholder="name" name='name' onChange={handleChange} />
                    <label htmlFor="floatingInput">Name</label>
                    <span className='border-anim'></span>
                </div>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="Email" name='email' onChange={handleChange} />
                    <label htmlFor="floatingInput">Email</label>
                    <span className='border-anim'></span>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='password' onChange={handleChange} />
                    <label htmlFor="floatingPassword">Password</label>
                    <span className='border-anim'></span>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="RetypePassword" name='retype' onChange={handleChange} />
                    <label htmlFor="floatingPassword">Retype Password</label>
                    <span className='border-anim'></span>
                </div>
                <div className='d-flex align-items-center gap-4 nowrap'>
                    <input type="checkbox" className='' />
                    <p className='desc mt-3'>By clicking Sign Up, you agree to our <Link className='text-decoration-none' to='#'>Terms</Link>.</p>
                </div>
                <div className='mt-4'>
                    <button type='submit' className='btn submit w-100'>Sign Up</button>
                </div>
            </form>
        </div>
    )
}
