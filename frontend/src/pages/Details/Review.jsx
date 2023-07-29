import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BiDislike, BiLike} from 'react-icons/bi'
import {PiShareFat} from 'react-icons/pi'
const Review = () => {
  return (
    <>
    
    <div className="reviews">
      <div className="reviews-container">
      <div className="user">
        <div className="dp"><img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div className="name-review-count">
        <h3>Prime Sark</h3>
        <span className='review-count-stars'><p>22 reviews</p><p className='stars'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p></span>
        </div>
      </div>
      <p>Lost amidst the emerald forests and cascading waterfalls, this hidden gem feels like a fairytale oasis tucked away from the world's hustle and bustle. A magical place where time seems to slow down, leaving you in awe of nature's splendor.</p>
      <div className="likes-dislikes-share">
        <span><a href='#'><BiLike/> Helpful</a></span>
        <span><a href='#'><BiDislike/> Not Useful</a></span>
        <span><a href='#'><PiShareFat/> Share</a></span>
      </div>
      </div>
    </div>
    
    </>
  )
}

export default Review