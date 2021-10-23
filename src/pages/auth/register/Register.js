import React from 'react';
import './Register.css';
import Background from '../../../images/login.jpg';
import { Link } from 'react-router-dom';
import { Footer } from '../../../components/auth/Footer';

export const Register = () => {
  return (
    <div className='register layout-full page-dark' style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url(" + `${Background}` + ")", height: '100vh', overflowY: 'scroll', overflowX: 'hidden', opacity: '.93'
    }}>
      <div className='inner row'>
        <div className="page-brand-info d-none d-md-block col-0 col-md-8 align-self-center px-5" style = {{marginTop: '-200px'}}>
          <div className='px-5'>
            <div className="brand d-flex gap-4 text-white">
              <img className="brand-img" src="assets/logo@2x.png" alt="..." className = 'h-100'/>
              <h2 className="brand-text font-size-40 mt-3 text-white fw-bold">Remark</h2>
            </div>
            <p className='text-white main-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className='col-md-4 col-sm-12 d-flex align-items-center justify-content-center'>
          <div className = 'flex-grow-1'>
            <h3 className='title'>Sign Up</h3>
            <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="form-floating">
              <input type="text" className="form-control" id="floatingInput" placeholder="name" />
              <label for="floatingInput">Name</label>
            </div>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="Email" />
              <label for="floatingInput">Email</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Retype Password</label>
            </div>
            <div className = 'd-flex align-items-center gap-4 nowrap'>
                <input type="checkbox" className = '' />
                <p className = 'desc mt-3'>By clicking Sign Up, you agree to our <Link className = 'text-decoration-none' to = '#'>Terms</Link>.</p>
            </div>
            <div className = 'mt-4'>
               <button className = 'btn submit w-100'>Sign Up</button>
            </div>
            <p className = 'desc mt-3'>Have account already? Please go to <Link className = 'text-decoration-none' to = '/login'>Sign In</Link></p>
             <Footer />
          </div>
        </div>
      </div>

    </div>
  )
}
