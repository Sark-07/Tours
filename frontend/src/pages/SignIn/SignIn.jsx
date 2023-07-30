import React, { useState } from 'react';
import toast from 'react-hot-toast'
import {useNavigate, Navigate} from 'react-router-dom'
import { GiAbstract084 } from 'react-icons/gi';
import { FcGoogle } from 'react-icons/fc';
import './__test__/signIn.css';
import { validateEmail } from '../../utils/validateEmail';
import { useAuth } from '../../context/AuthContext';

const SignIn = () => {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [validEmail, setValidEmail] = useState(false);
   const {isAuthenticated, login} = useAuth()
  //  const [auth, setauth] = useAuth()
   const navigate = useNavigate()

   if (isAuthenticated()){

    console.log('hitehe');
    return <Navigate to={'/'}/>

   }

   const url = 'http://localhost:3000/tours/api/auth/signin';
   const handleSubmit = async (e) => {
     e.preventDefault();
 
     try {
      
      if (validateEmail(email) == null) {
        setValidEmail(true);
      }else {
        const payload = {
          email: email,
          password: password,
        };
  
        const {data} = await axios.post(url, payload)
        if (data.success) {
          toast.success(data.message)
          // setauth({...auth, user: data.user, token: data.token})
          // localStorage.setItem('auth', JSON.stringify({user: data.user, token: data.token}))
          // localStorage.setItem('token', data.token)
          // console.log(data.user, data.token, auth);
          setTimeout(() => {
            login(data.token, '/')
          }, 2000);
        }
      }

     } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
     }

   };

  return (
    <div className='sign-in'>
      <div className='left'>
        <div className='logo'>
          <GiAbstract084 className='logo-icon'></GiAbstract084>
          <h6>Tours</h6>
        </div>
        <div className='center'>
          <div className='welcome-text'>
            <h1>Welcome Back!</h1>
            <p>The faster you fill up, the faster you get a ticket.</p>
          </div>

          <form action='' onSubmit={(e) => handleSubmit(e)}>
            <div className='email'>
              <label htmlFor='Email' style={{color: validEmail && 'crimson'}}>{validEmail ? 'Invalid Email Format' : 'Email'}</label>
              <input type='email' className='sign-in-email' placeholder='Enter your email' required onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='password'>
              <label htmlFor='password'>Password</label>
              <input className='sign-in-password'
                type='password'
                placeholder='Enter your password'
                required onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='remember-forget-password'>
              <div className='remember-me'>
                <input type='checkbox' name='' id='' />
                <label htmlFor='remember me'>Remember me</label>
              </div>
              <span><a href="#">Forget Password?</a></span>
            </div>
            <div className='login-google'>
              <button>Sign In</button>
              <button className='google-btn'>
                <FcGoogle className='google-logo' /> Login with google
              </button>
            </div>
            <p className='sign-up-link'>
              Don't have an account? <span><a href="/signup">Sign up</a></span>
            </p>
          </form>
        </div>
      </div>
      <div className='right'>
        <button className='right-btn'>Explore!</button>
        <div className='right-text'>
          <p>
            <span
              className='start-quote'
              style={{ display: 'block', marginBlockEnd: -0.5 + 'em' }}
            >
              &#10077;
            </span>
            Unlock the world, one destination at a time, and let your wanderlust
            lead the way!
            {/* <span className='end-quote'>&#10078;</span> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
