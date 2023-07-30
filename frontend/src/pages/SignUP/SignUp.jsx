import React, { useState, useEffect } from 'react';
import { GiAbstract084 } from 'react-icons/gi';
import { FcGoogle } from 'react-icons/fc';
import { validateEmail } from '../../utils/validateEmail';
import { validatePhone } from '../../utils/validatePhone';
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom';
import './__test__/signUp.css';

const SignUp = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [shortPass, setShortPass] = useState(false)
  const [alreadyExists, setAlreadyExists] = useState({status: false, message: ''})

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValidEmail(false)
      setValidPhone(false)
      setShortPass(false)
      setAlreadyExists({...alreadyExists, status: false})
    }, 3000);
    return (() => {
      clearTimeout(timeout)
    })
  }, [validEmail, validPhone, shortPass, alreadyExists])
  const url = 'http://localhost:3000/tours/api/auth/signup';
  const handleSubmit = async (e) => {

    try {
      e.preventDefault();
      
      if (validateEmail(email) == null) {
        setValidEmail(true);
      }
      if (validatePhone(phone) == null) {
        setValidPhone(true);
      }
      if (password.length < 4){
        setShortPass(true)
      }
      if (validatePhone(phone) && validateEmail(email) && password.length >= 4) {
        const payload = {
          name: name,
          phone: phone,
          email: email,
          password: password
        };
  
        const {data} = await axios.post(url, payload)

        if (data.success){
          toast.success(data.message)
          setTimeout(() => {
            navigate('/signin')
          }, 2000);
        }


      }
    } catch (error) {

      setAlreadyExists({...alreadyExists, status: true, message: error.response.data.message})
      toast.error(alreadyExists.message)
      console.log(error);
    }
  };

  return (
    <div className='sign-up'>
      <div className='left'>
        <div className='logo'>
          <GiAbstract084 className='logo-icon'></GiAbstract084>
          <h6>Tours</h6>
        </div>
        <div className='sign-up-center'>
          <div className='welcome-text'>
            <h1>Sign Up!</h1>
            <p>Hurry up! and book your first ticket!</p>
          </div>
            <div className="danger" style={alreadyExists.status ? {display: 'block', color: 'crimson', textAlign: 'center'} : {display: 'none'}}>
              {
                alreadyExists.message
              }
            </div>
          <form action='' onSubmit={(e) => handleSubmit(e)}>
            <button className='google-btn'>
              <FcGoogle className='google-logo' /> Login with google
            </button>
            <div className='divider-or'>
              <div className='line'></div>
              <div className='or'>or</div>
              <div className='line'></div>
            </div>
            <div className='name-phone'>
              <div className='name'>
                <label htmlFor='Name'>Name</label>
                <input
                  type='text'
                  placeholder='Eg: John Doe'
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='phone'>
                <label htmlFor='Phone' style={{color: validPhone && 'crimson'}}>{validPhone ? 'Invalid Phone Number' : 'Phone'}</label>
                <input
                  type='text'
                  placeholder='Eg: 1234567890'
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className='email'>
              <label htmlFor='Email' style={{color: validEmail && 'crimson'}}>{validEmail ? 'Invalid Email Format' : 'Email'}</label>
              <input
                type='email'
                placeholder='Enter your email'
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='password'>
              <label htmlFor='password' style={{color: shortPass && 'crimson'}}>{shortPass ? 'Password length must be greater than 3' : 'Password'}</label>
              <input
                type='password'
                placeholder='Enter your password'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='login-google'>
              <button>Sign Up</button>
            </div>
            <p className='sign-up-link'>
              Already have an account?{' '}
              <span>
                <Link className='link' to={'/signin'}>Sign In</Link>
              </span>
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
            Escape to extraordinary moments, where every step unveils a new
            chapter of adventure.!
            {/* <span className='end-quote'>&#10078;</span> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
