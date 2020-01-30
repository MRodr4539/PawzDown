import React from 'react';
import './App.css';
import Router from './Router';
import {BrowserRouter} from 'react-router-dom';
import Navigation from './components/Navigation';
import {Provider} from 'react-redux'
// import store from './redux/store'

import SearchHome from './components/SearchHome'
import AddReview from './components/AddPost'
// import CreateAcct from './components/CreateAcct';
import LoginPage from './Later Dev/LoginPage';
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="App">
         
          <BrowserRouter>
            <ScrollToTop/>
            <Navigation/>
            <Router/>
            <Footer/>
          </BrowserRouter>
        
    </div>
  );
}

export default App;
