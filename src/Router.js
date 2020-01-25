import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'

import AddReview from './containers/AddReview'
import CreateAcct from './Later Dev/CreateAcct'
import LoginPage from './Later Dev/LoginPage'
import ParkPage from './containers/ParkPage'
import SearchHome from './components/SearchHome'

import LocationList from './components/LocationList'
import AddPost from './components/AddPost'
import AboutUs from './components/AboutUs'

const Router = () => {
    return (

        <Switch>
            <Route exact path="/" component={SearchHome}/>
            <Route path="/AddPost" component={AddPost}/>  
            <Route path="/LocationList" component={LocationList}/>  
            <Route path="/AboutUs" component={AboutUs}/>            
        </Switch>
    );
};

export default Router;


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

