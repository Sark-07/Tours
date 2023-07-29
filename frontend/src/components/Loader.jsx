import React from 'react';
import './__test__/loader.css';
const Loader = () => {
  return (
    <div className='loader'>
      <div className="load">
        <img src="../../src/assets/loader/loader.gif" alt="loader" />
      </div>
    </div>
  );
};

export default Loader;
