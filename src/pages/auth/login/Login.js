import React from 'react';
import './Login.css';
import Background from '../../../images/login.jpg';
import { Link } from 'react-router-dom';
import { Footer } from '../../../components/auth/Footer';

export const Login = () => {
  return (
    <div className='login layout-full page-dark' style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url(" + `${Background}` + ")", height: '100vh', overflowY: 'scroll', overflowX: 'hidden', opacity: '.93'
      // backgroundImage: "url(" + `${Background}` + ")", height: '100vh', overflowY: 'scroll', overflowX: 'hidden'
    }}>
      <div className='inner row'>
        <div className="page-brand-info d-none d-md-block col-0 col-md-8 align-self-center px-5" style={{ marginTop: '-100px' }}>
          <div className='px-5'>
            <div className="brand d-flex gap-4 text-white">
              <img className="brand-img" src="assets/logo@2x.png" alt="..." className='h-100' />
              <h2 className="brand-text font-size-40 mt-3 text-white fw-bold">Remark</h2>
            </div>
            <p className='text-white main-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className='col-md-4 col-sm-12 d-flex align-items-center justify-content-center'>
          <div className='flex-grow-1'>
            <h3 className='title'>Sign In</h3>
            <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" autoComplete = 'aksk' placeholder="Email" />
              <label for="floatingInput">Email</label>
              <span className = 'border-anim'></span>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Password</label>
              <span className = 'border-anim'></span>
            </div>
            <div className='d-flex justify-content-between nowrap mt-4'>
              <div className='checkbox d-flex gap-2'>
                <input type="checkbox" className='' />
                {/* <span className = 'mx-2 remember'>Remember me</span> */}
                <label for="inputCheckbox" className='remember fw-light'>Remember me</label>
              </div>
              <Link className='text-decoration-none' to='#'>Forgot Password?</Link>
            </div>
            <div className='mt-4'>
              <button className='btn submit w-100'>Sign In</button>
            </div>
            <p className='desc mt-3'>No account?<Link className='text-decoration-none' to='/register'> Sign Up</Link></p>
            <Footer />

          </div>
        </div>
      </div>

    </div>
  )
}
