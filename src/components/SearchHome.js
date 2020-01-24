import React from "react"
import PetsIcon from '@material-ui/icons/Pets';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import '../App.css'
import twoDogs02 from '../images/twoDogs02.png'


const SearchHome = () => {


    return(
        <div className='main-container'>
            <div className='image-container'>
              <img className='img' src={twoDogs02} ></img>
            </div>
            <div className='blurb'>
                <h2>Ever go somewhere and say...my dog would love this place!?</h2>
                <h1>Well, we want to know too!</h1>
            </div>
            <div className='Add-here'>
                <h3>Have you visited a pup friendly place?</h3>
                <p>Park, Resturant, Bar, </p>
                <Button>Add here</Button>
            </div>

        </div>
    )
}

export default SearchHome;