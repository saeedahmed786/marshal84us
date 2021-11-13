import React, {useState} from 'react';
import { useHistory } from 'react-router';
import './Login.css';
import { Link } from 'react-router-dom';
import { Footer } from '../../../components/auth/Footer';
import axios from 'axios';
import swal from 'sweetalert';
import { setAuthentication } from '../../../components/auth/auth';

export const Login = () => {
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
    <div className='page-login-v2' style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url(" + `${'/assets/images/login.jpg'}` + ")", height: '100vh', overflowY: 'scroll', overflowX: 'hidden', opacity: '.93' }}>
      <div className="page-content">
        <div className="page-brand-info">
          <div className="brand">
            <img className="brand-img" src="assets/images/logo@2x.png" alt="..." />
            <h2 className="brand-text font-size-40">Remark</h2>
          </div>
          <p className="font-size-20 desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="page-login-main">
          <div className="brand hidden-md-up">
            <img className="brand-img" src="assets/images/logo-colored@2x.png" alt="..." />
            <h3 className="brand-text font-size-40">Remark</h3>
          </div>
          <h3 className="font-size-24">Sign In</h3>
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
                  <input type="email" className="form-control empty" id="inputEmail" onChange={handleChange} name="email" />
                  <label className="floating-label" for="inputEmail">Email</label>
                </div>
                <div className="form-group form-material floating" data-plugin="formMaterial">
                  <input type="password" className="form-control empty" id="inputPassword" name="password" onChange={handleChange} />
                  <label className="floating-label" for="inputPassword">Password</label>
                </div>
                <div className="form-group clearfix">
                  <div className="checkbox-custom checkbox-inline checkbox-primary float-left">
                    <input type="checkbox" id="remember" name="checkbox" />
                    <label for="inputCheckbox">Remember me</label>
                  </div>
                  <a className="float-right" href="forgot-password.html">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
              </form>
          }

          <p>No account? <Link to="/register">Sign Up</Link></p>

          <Footer />
        </div>

      </div>
    </div>
  )
}
