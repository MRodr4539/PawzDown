import React from "react"
import PetsIcon from '@material-ui/icons/Pets';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
            
            <Link 
               style={{paddingTop: 13, textDecoration: 'none', color:'grey'}}
               to="/AddPost">
              
              <div className='cards'>
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
                            Tell us about it!
                        </h4>
                     </CardContent>   
                </CardActionArea>
            </Card>
            <Card className='place-card'>
                <CardActionArea >
                    <img
                        className='park-card-image'
                        src={barPup}></img>
                     <CardContent>
                        <h3>
                            Know a great Restaurant?
                        </h3>
                        <h4>
                            Tell us about it!
                        </h4>
                     </CardContent>   
                </CardActionArea>
            </Card>
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
                            Tell us about it!
                        </h4>
                     </CardContent>   
                </CardActionArea>
            </Card>
            </div>
            </Link>
            
            <h3>Have you visited a pup friendly place?</h3>
                <p>Park, Resturant, Bar, </p>
        </div>
    )
}

export default SearchHome;