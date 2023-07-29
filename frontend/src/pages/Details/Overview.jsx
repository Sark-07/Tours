import React from 'react';

const Overview = ({noticablePlace, overview}) => {
  return (
    <>
      <div className='overview'>
        <div className='about-para'>
          <h2>About The Place</h2>
          <p>
            {overview}
          </p>
        </div>
        <h2>Things to notice</h2>
        <ul className='to-notice'>
          
          {noticablePlace && noticablePlace.map((item, index) => {
            return <li key={index}>
            <h3>{item.title}</h3>
            <p>
             {item.desc}
            </p>
          </li>
          })
          }
        </ul>
      </div>
    </>
  );
};

export default Overview;
