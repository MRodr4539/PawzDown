import React from 'react'
import boredPup from '../images/boredPup.png'


const AboutUs = () => {
    return(
        <div>
        <div className='image-container'>
        <img className='img' src={boredPup} ></img>
      </div>
       <h3>PawzDown is about getting 
           you and your pup out of the house
       </h3>
       <p>We want to give our visitors a 
           place to find </p>
        </div>
    )
}

export default AboutUs;