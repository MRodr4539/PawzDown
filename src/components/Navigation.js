import React, {Component} from "react"
import PetsIcon from '@material-ui/icons/Pets';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HomeIcon from '@material-ui/icons/Home';
import '../App.css'



function Navigation() {
  const [state, setState] = React.useState({
    left: false,
  });


  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Home', 'About Us', 'Approved Locations', 'Add Location'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon> 
              <Link 
               style={{paddingTop: 13, textDecoration: 'none', color:'grey'}}
               to="/">
              {index === 0 && <HomeIcon />}
              </Link>

              <Link 
               style={{paddingTop: 13, textDecoration: 'none', color:'grey'}}
               to="/AboutUs">
              {index === 1 && <PetsIcon />}
              </Link>
              
              <Link 
               style={{paddingTop: 13, textDecoration: 'none', color:'grey'}}
               to="/LocationList">
               {index === 2 && <ThumbUpIcon/>}
              </Link>
              
              <Link 
               style={{paddingTop: 13, textDecoration: 'none', color:'grey'}}
               to="/AddPost">
               {index === 3 && <AddCircleIcon />}
              </Link>
              
              </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
   
    // render(){
    return(
      
        <div>
          <AppBar position='static' className='nav-contianer'>
              <Toolbar class='flexbox-nav'>
                <IconButton 
                 edge='start'
                 color="inherit" 
                 aria-label="menu"
                 onClick={toggleDrawer('left', true)}>
                  <MenuIcon className='drawer-menu-icon'/>
                </IconButton>
                <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                  {sideList('left')}
                </Drawer>


                <h1 className='logo'>
                <PetsIcon className='pet-menu-icon' fontSize='large'/>
                  <Link 
                    style={{paddingLeft: 13, paddingTop: 13, textDecoration: 'none', color:'white'}} 
                    to="/">
                      PawzDown
                  </Link>
                </h1>
                
                <Link 
                    className='link-btns'
                    style={{paddingLeft: 13, textDecoration: 'none', color:'white'}} 
                    to="/AboutUs">
                      <Button color='inherit'>
                      About Us
                      </Button>
                  </Link>
               
                
                  <Link 
                    className='link-btns'
                    style={{paddingLeft: 13, textDecoration: 'none', color:'white'}} 
                    to="/LocationList">
                      <Button color='inherit'>
                      Approved Locations
                      </Button>
                  </Link>
                
                
                  <Link 
                    className='link-btns'
                    style={{paddingLeft: 13, textDecoration: 'none', color:'white'}} 
                    to="/AddPost">
                      <Button color='inherit'>
                      Add Location
                      </Button>
                  </Link>
                
              </Toolbar>
          </AppBar>
        </div>
    )
}
// }

export default Navigation;