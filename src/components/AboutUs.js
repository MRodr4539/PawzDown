import React from 'react'
import boredPup from '../images/boredPup.png'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'



const AboutUs = () => {
    return(
        <div>
        <div className='image-container'>
          <img className='img' src={boredPup} ></img>
        </div>
       <h3>PawzDown is about getting 
           you and your pup out of the house
       </h3>
       <p className='about-paragraph'>
           We want to give our visitors 
           somewhere to find great new places
           to bring their pups. 
        </p>
        <p className='about-paragraph'>
           Our add location feature 
           has some common questions that run through 
           your mind as you're prepping your pup for take off.
        </p>
        <h2>Visit our approved locations and pack your pup up!</h2>
        <br></br>
        <br></br>
        <Link 
               style={{paddingTop: 13, textDecoration: 'none', color:'grey'}}
               to="/LocationList">
        <Button>Approved Locations</Button>
        </Link>
        <br></br>
        <br></br>

        </div>
    )
}

export default AboutUs;