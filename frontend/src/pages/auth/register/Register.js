import React, { useState } from 'react';
import './Register.css';
import Background from '../../../images/login.jpg';
import { Link } from 'react-router-dom';
import { Footer } from '../../../components/auth/Footer';
import axios from 'axios';
import swal from 'sweetalert';

export const Register = () => {
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
    if (password !== retype) {
      swal('Sorry!', "Passwords don't match", 'warning');
    } else {
      setLoading(true);
      await axios.post('/api/users/signup', { name, email, password, retype }).then(res => {
        setLoading(false);
        if (res.status === 200) {
          swal('Great!', res.data.successMessage, 'success');
        } else {
          swal('Sorry!', res.data.errorMessage, 'error');
        }
      })
    }
  }
  return (
    <div className='page-register-v2' style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url(" + `${Background}` + ")", height: '100vh', overflowY: 'scroll', overflowX: 'hidden', opacity: '.93' }}>
      <div className="page" data-animsition-in="fade-in" data-animsition-out="fade-out">
        <div className="page-content">
          <div className="page-brand-info">
            <div className="brand">
              <img className="brand-img" src="assets/images/logo@2x.png" alt="..." />
              <h2 className="brand-text font-size-40">Remark</h2>
            </div>
            <p className="font-size-20 desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className="page-register-main">
            <div className="brand hidden-md-up">
              <img className="brand-img" src="assets/images/logo-colored@2x.png" alt="..." />
              <h3 className="brand-text font-size-40">Remark</h3>
            </div>
            <h3 className="font-size-24">Sign Up</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            {
              loading ?
                <div className='text-center my-5'>
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
                :
                <form onSubmit={submitHandler} autocomplete="off">
                  <div className="form-group form-material floating" data-plugin="formMaterial">
                    <input type="text" className="form-control empty" id="inputName" name="name" onChange={handleChange} />
                    <label className="floating-label" for="inputName">Name</label>
                  </div>
                  <div className="form-group form-material floating" data-plugin="formMaterial">
                    <input type="email" className="form-control empty" id="inputEmail" name="email" onChange={handleChange} />
                    <label className="floating-label" for="inputEmail">Email</label>
                  </div>
                  <div className="form-group form-material floating" data-plugin="formMaterial">
                    <input type="password" className="form-control empty" id="inputPassword" name="password" onChange={handleChange} />
                    <label className="floating-label" for="inputPassword">Password</label>
                  </div>
                  <div className="form-group form-material floating" data-plugin="formMaterial">
                    <input type="password" className="form-control empty" id="inputPasswordCheck" name="retype" onChange={handleChange} />
                    <label className="floating-label" for="inputPasswordCheck">Retype Password</label>
                  </div>
                  <div className="form-group clearfix">
                    <div className="checkbox-custom checkbox-inline checkbox-primary float-left">
                      <input type="checkbox" id="inputCheckbox" name="term" />
                      <label for="inputCheckbox"></label>
                    </div>
                    <p className="ml-35">By clicking Sign Up, you agree to our <a href="#">Terms</a>.</p>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                </form>
            }

            <p>Have account already? Please go to <Link to="/login">Sign In</Link></p>

            <Footer />
          </div>

        </div>
      </div>
    </div>
  )
}
