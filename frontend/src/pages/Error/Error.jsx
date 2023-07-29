import React from 'react';
import './Error.module.css/error.css'
const Error = () => {
  return (
    <>
      <div className='notfound-parent'>
        <div className='notfound'>
          <div className='notfound-404'>
            <h1>404</h1>
            <h2>Page not found</h2>
          </div>
          <a href='/'>Homepage</a>
        </div>
      </div>
    </>
  );
};

export default Error;
