import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DetailsHero from './DetailsHero';
import './__test__/details.css';
import InfoTabs from './InfoTabs';
import { useFetch } from '../../Hooks/useFetch';
import Loader from '../../components/Loader'

const Details = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search).get('query');
  if(!query){

    const navigate = useNavigate()
    navigate('/')
}
  let {data, loading} = useFetch(`http://localhost:3000/tours/api/placedetails?location=${query}`)
  
  let details = data[0]
if (loading) {
  return <Loader/>
}

 if (details) {
  return (
    <>
      <div className='details'>
        <DetailsHero location={details.location} tag={details.tag} liked={details.liked} eventhappening={details.eventhappening} portraitImg={details.portraitImg} recommendation={details.recommendation} interested={details.interested} landscapeImg={details.landscapeImg} />
        <InfoTabs location={details.location} overview={details.overview} noticablePlace={details.noticablePlace} upcomingEvents={details.upcomingEvents} aboutEvent={details.aboutEvent} />
      </div>
    </>
  );
};

return <div style={{display: 'grid', placeItems: 'center', height: 100+'vh'}}><h1 style={{color: 'aliceblue'}}>Place Details Will Be Available Soon!</h1></div>

}
export default Details;
