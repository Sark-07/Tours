import React, { useState } from 'react';
import Overview from './Overview';
import Photos from './Photos';
import Review from './Review';
import AboutEvent from './AboutEvent';

const InfoTabs = ({aboutEvent, upcomingEvents, noticablePlace, overview, location}) => {
  const menus = ['Overview', 'Photos', 'Review', 'About on going Event'];
  const [active, setactive] = useState(0);

  let component = <></>;
  if (active == 0) {
    component = <Overview overview={overview} noticablePlace={noticablePlace} />;
  } else if (active == 1) {
    component = <Photos location={location} />;
  } else if (active == 2) {
    component = <>
    <Review />
    <Review />
    <Review />
    <Review />
    </>;
  }else if (active == 3){

    component = <AboutEvent aboutEvent={aboutEvent} upcomingEvents={upcomingEvents} />
  }

  return (
    <>
      <div className='info-tabs'>
        <ul className='menu'>
          {menus.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setactive(index)}
                className={`${index === active && 'active'} items`}
              >
                {item}
              </li>
            );
          })}
          {/* <hr /> */}
        </ul>
        {component}
      </div>
    </>
  );
};

export default InfoTabs;
