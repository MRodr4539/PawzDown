import React, {Component} from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Park from '../images/Park.png'
import '../App.css'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {purple, teal, green, blue, orange} from '@material-ui/core/colors';

//custom themeing
const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: green,
  },
  typography:{
      fontFamily:[
          '"Segoe UI"',
      ]
  }
});


class LoginPage extends Component {
    state= {
        username: '',
        password: ''
    }

    

    textChangeHandler = (event) => {
        const state = { ...this.state }
        state[event.target.id] = event.target.value
        this.setState(state)
    }

    loginHandler = (event) => {
        event.preventDefault();
        this.props.login(this.state.username, true)
        // document.cookie = "loggedIn=true;max-age=60*1000"
        this.props.history.push('/searchHome')
      }

      createAcctHandler = () => {

      }
    

  render(){
    return(
        <div className='background'>
            <ThemeProvider theme= {theme}>
                <ThemeProvider
                    theme={theme =>
                    createMuiTheme({
                        ...theme,
                        palatte: {
                            ...theme.palatte,
                            primary:{
                                main: green[500],
                            },
                        },
                    })}
                >
            <img className='image' height='450' src={Park}></img>
            <Typography variant="h4">Oh, the places your pup can go...</Typography>
            <br></br>
             <TextField 
                id="outlined-basic" 
                label="Username" 
                variant="outlined" 
                value={this.state.username}
                onChange={this.textChangeHandler}
             />
             <br></br>
             <br></br>
             <TextField 
                id="outlined-basic" 
                label="Password" 
                variant="outlined" 
                value={this.state.password}
                onChange={this.textChangeHandler}
             />
             <br></br>
             <br></br>
             <Button
                onClick={this.loginHandler }
                type='submit' 
                variant="contained" 
                color="primary">
                Login
             </Button>
             <br></br>
             <br></br>
            <Typography variant='h5'>Not a part of the fun yet?</Typography>
            <br></br>
            <Button
                onClick={this.loginHandler }
                type='submit' 
                variant="contained" 
                color="primary">
                Create Account
             </Button>
             
               </ThemeProvider>
            </ThemeProvider>
        </div>
    )
}
}

export default LoginPage;