import React, {Component} from "react"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from "@material-ui/core";
import { positions } from '@material-ui/system';
import '../App.css'

//custom theme
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

class AddReview extends Component {
    state ={
        username:'auto fill-username',
        comments: ''
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
        <Card className='add-review-card'>
            <CardContent>
                <Typography variant="h4">
                    How is this park looking for you and your Pup?
                </Typography>
                <br></br>
                <CardActions>
                    <TextField
                        id='outlined-multiline-static'
                        label="What's going on at this park?"
                        multiline
                        rows='4'
                        variant='outlined'
                        placeholder="Closed? Open and looking good? Tell your fellow pups."
                        value=''
                        onChange=''
                    />  
                </CardActions>
                <CardActions>
                    <Button
                        variant='contained'
                        color='primary'
                    >
                        Submit Review
                    </Button>
                </CardActions>

                
            </CardContent>
        </Card>
            </ThemeProvider>
        </ThemeProvider>
        </div>
    )
}
}

export default AddReview;