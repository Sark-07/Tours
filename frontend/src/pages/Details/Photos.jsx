import React from 'react'
import {useFetch} from '../../Hooks/useFetch'


const Photos = ({location}) => {
const url = `https://api.unsplash.com/search/photos?per_page=100&query=${location}&client_id=${import.meta.env.VITE_ACCESSKEY}`

const {loading, data} = useFetch(url)

const {results} = data
// console.log(data);



  return (
    <>
    
        <div className="photos">
        
            {loading ? <h1 style={{textAlign: 'center', color: 'white'}}></h1> : <>
        
        <div className="col">

            {results && results.slice(0, 10).map((item) => {
                return <div className="img-container" key={item.id} style={{borderRadius: 5+'px', overflow: 'hidden'}}><img src={item.urls.small} alt={item.alt_description} /></div>
            })}
            
            </div>
        <div className="col">

            {results && results.slice(10, 20).map((item) => {
                return <div className="img-container" key={item.id} style={{borderRadius: 5+'px', overflow: 'hidden'}}><img src={item.urls.small} alt={item.alt_description} /></div>
            })}
            
            </div>
        <div className="col">

            {results && results.slice(20, 30).map((item) => {
                return <div className="img-container" key={item.id} style={{borderRadius: 5+'px', overflow: 'hidden'}}><img src={item.urls.small} alt={item.alt_description} /></div>
            })}
            
            </div>
        
        </>}

        </div>
        
    </>
  )
}

export default Photos