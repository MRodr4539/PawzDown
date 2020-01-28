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


const locationTypes = [
    {
      value: 'Park',
      label: '',
    },
    {
      value: 'Restruant',
      label: '',
    },
    {
      value: 'Bar',
      label: '',
    },
    {
      value: 'Water front',
      label: '',
    },
    {
        value: 'Store',
        label: '',
    },
    {
        value: 'Other',
        label: '',
    },
    //make input for other
  ];




class AddPost extends Component {
   constructor(props){
       super(props);
       this.state = {value: ''};

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('Post was submitted' + this.state.value)
        event.preventDefault();
    }


 render(){

    return(
        <div className='about-container'>
        <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input 
                 type='text' 
                 value={this.state.value} 
                 onChange={this.handleChange}
                 />
            </label>
            <br></br>
            <label>
                Address:
                <input 
                 type='text' 
                 value={this.state.value} 
                 onChange={this.handleChange}
                 />
            </label>
            <br></br>
            <label>
                Type of Location:
                <select 
                 value={this.state.value}
                 onChange={this.handleChange}>
                     <option value='Park'>Park</option>
                     <option value='Restruant'>Restruant</option>
                     <option value='Bar'>Bar</option>
                     <option value='Other'>Other</option>
                 </select>
            </label>
            <br></br>
            <label>
                Anything else we should know before we go?
                <textarea 
                 rows='6' 
                 cols='40' 
                 type='text' 
                 value={this.state.value} 
                 onChange={this.handleChange}
                 ></textarea>
            </label>
           
            <Button value='Submit'>Submit Location</Button>
        </form>
        </div>
    )
}
}

export default AddPost;

{/* <ThemeProvider theme= {theme}>
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
        </ThemeProvider> */}