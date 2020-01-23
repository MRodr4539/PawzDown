import React from "react"
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PetsIcon from '@material-ui/icons/Pets';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom'
import '../App.css'



const Navigation = () => {


    return(
      
        <div>
          <div className='nav-contianer'>
              <nav class='flexbox-nav'>
                <div className='logo-left'>
                <i class="fas fa-paw"></i>
                  <h1>
                    <PetsIcon 
                    fontSize='large' 
                    className='pets-icon'/> 
                      Pawz Down
                  </h1>
                </div>
                <div className='nav-right'>
                  <ul>
                    <li>Reviews</li>
                    <li>Contact Us</li> 
                  {/* Skip to part of the page */}
                    <li>Add new Place</li>
                  </ul>
                </div>
              </nav>
              <div className='above-fold'> 

              </div>
          </div>

            {/* <BottomNavigation>
                <BottomNavigationAction
                  label="My Account" icon={<AccountCircleIcon fontSize='large'/>} />
                  
                <BottomNavigationAction 
                  label="Visited" icon={<PetsIcon fontSize='large'/>} />
                <BottomNavigationAction 
                  label="Search" icon={<SearchIcon fontSize='large' />} />
                <BottomNavigationAction 
                  label="Logout" icon={<ExitToAppIcon fontSize='large' />} />
            </BottomNavigation> */}
        </div>
    )
}

export default Navigation;