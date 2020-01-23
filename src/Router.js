import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'

import AddReview from './containers/AddReview'
import CreateAcct from './components/CreateAcct'
import LoginPage from './components/LoginPage'
import ParkPage from './containers/ParkPage'
import SearchHome from './components/SearchHome'
import Visited from './containers/Visited'


//*****// FOR FUTURE LOGIN FUNCTIONALITY //******//
  // const checkAuth = () => true
    
  //   const cookies = cookie.parse(document.cookie);

  //   return cookies["loggedIn"] ? true : false
  
  
  // const ProtectedRoute = ({component: Component, ...rest}) => {
  //   return (
  //       <Route
  //       {...rest}
  //       render={(props) => 
  //           checkAuth() ? <Component {...props} /> : <Redirect to="/" />}
  //       />
  //   );
  // }


  const Router = () => {
    return (

        <Switch>
            <Route exact path="/" component={SearchHome}/>
            <Route path="/ParkPage" component={ParkPage}/>               
        </Switch>
    );
};

export default Router;