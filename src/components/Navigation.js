import React from "react"
import PetsIcon from '@material-ui/icons/Pets';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import '../App.css'



const Navigation = () => {


    return(
      
        <div>
          <AppBar position='static' className='nav-contianer'>
              <Toolbar class='flexbox-nav'>
                <IconButton edge='start'color="inherit" aria-label="menu">
                  <MenuIcon/>
                </IconButton>
                <h1>
                <PetsIcon fontSize='large'/>
                  Pawz Down
                </h1>
                <Button color='inherit'>About Us</Button>
                <Button color='inherit'>Add Location</Button>
                <Button color='inherit'> Us!</Button>
              </Toolbar>
          </AppBar>
        </div>
    )
}

export default Navigation;