import React from "react"
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import '../App.css'
import twoDogs02 from '../images/twoDogs02.png'
import Park from '../images/Park.png'
import ParkPup from '../images/ParkPup.png'
import RestaurantPup from '../images/RestaurantPup.png'
import barPup from '../images/barPup.png'
import hangingPup from '../images/hangingPup.png'
import chillPup from '../images/chillPup.png'

const SearchHome = () => {


    return(
        <div className='main-home-container'>
            <div className='image-container'>
              <img className='img' src={twoDogs02} ></img>
            </div>
            <div className='blurb'>
                <h2>Know a place that PAWZ DOWN our pups will love?</h2>
                <h1>Well, we want to know too!</h1>
            </div>
            
            
              <div className='cards'>
              <Link 
               style={{paddingTop: 13, textDecoration: 'none', color:'grey'}}
               to="/AddPost">
            <Card className='place-card'>
                <CardActionArea >
                    <img
                        className='park-card-image'
                        src={ParkPup}></img>
                     <CardContent>
                        <h3>
                            Know a great Park?
                        </h3>
                        <h4>
                            Tell us!
                        </h4>
                     </CardContent>   
                </CardActionArea>
            </Card>
            </Link>
            <Link 
               style={{paddingTop: 13, textDecoration: 'none', color:'grey'}}
               to="/AddPost">
            <Card className='place-card'>
                <CardActionArea >
                    <img
                        className='park-card-image rest'
                        src={chillPup}></img>
                     <CardContent>
                        <h3>
                            Know a great Restaurant?
                        </h3>
                        <h4>
                            Tell us!
                        </h4>
                     </CardContent>   
                </CardActionArea>
            </Card>
            </Link>
            <Link 
               style={{paddingTop: 13, textDecoration: 'none', color:'grey'}}
               to="/AddPost">
            <Card className='place-card'>
                <CardActionArea >
                    <img
                        className='park-card-image'
                        src={hangingPup}></img>
                     <CardContent>
                        <h3>
                            Or a place our pups can just hang around?
                        </h3>
                        <h4>
                            Tell us!
                        </h4>
                     </CardContent>   
                </CardActionArea>
            </Card>
            </Link>
            </div>
            
            <br></br>
            <h3>We look forward to visiting your favorite spot!</h3>
              <br></br>  
              <br></br>
        </div>
    )
}

export default SearchHome;