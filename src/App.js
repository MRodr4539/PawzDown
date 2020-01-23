import React from 'react';
import './App.css';
import {Router} from './Router';
import {BrowserRouter} from 'react-router-dom';
import Navigation from './components/Navigation';
import {Provider} from 'react-redux'
// import store from './redux/store'


import AddReview from './components/AddReview'
// import CreateAcct from './components/CreateAcct';
import LoginPage from './components/LoginPage';



function App() {
  return (
    <div className="App">
      <Navigation/>
        {/* <CreateAcct/> */}
{/* <LoginPage/> */}
        {/* <Provider store={store}>
          <BrowserRouter>
            <Navigation/>
            <Router/>
          </BrowserRouter>
        </Provider>    */}
    </div>
  );
}

export default App;
