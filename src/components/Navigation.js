import React, {Component} from "react"
import PetsIcon from '@material-ui/icons/Pets';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import '../App.css'



class Navigation extends Component {
    constructor(props){
      super(props);
      this.main = React.createRef();
    }

    handleScroll = e => {
      e.preventDefault();
      const main = this.main.current;
      window.scrollTo({
        top: main.offsetTop,
        left: 0,
        behavior: 'instant'
      });
    }
    render(){
    return(
      
        <div>
          <AppBar position='static' className='nav-contianer'>
              <Toolbar class='flexbox-nav'>
                <IconButton edge='start'color="inherit" aria-label="menu">
                  <MenuIcon/>
                </IconButton>
                <h1>
                <PetsIcon fontSize='large'/>
                  <Link 
                    style={{paddingLeft: 13, textDecoration: 'none', color:'white'}} 
                    to="/">
                      PawzDown
                  </Link>
                </h1>
                <Button color='inherit'>
                <Link 
                    style={{paddingLeft: 13, textDecoration: 'none', color:'white'}} 
                    to="/AboutUs">
                      About Us
                  </Link>
                </Button>
                <Button color='inherit'>
                  <Link 
                    style={{paddingLeft: 13, textDecoration: 'none', color:'white'}} 
                    to="/LocationList">
                      Approved Locations
                  </Link>
                </Button>
                <Button color='inherit'>
                  <Link 
                    style={{paddingLeft: 13, textDecoration: 'none', color:'white'}} 
                    to="/AddPost">
                      Add Location
                  </Link>
                </Button>
              </Toolbar>
          </AppBar>
        </div>
    )
}
}

export default Navigation;