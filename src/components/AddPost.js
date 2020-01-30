import React, {Component} from "react"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from "@material-ui/core";
import { positions } from '@material-ui/system';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import '../App.css'




class AddPost extends Component {
    state = {
        id: '',
        name: '',
        address: '',

    }
//    constructor(props){
//        super(props);
//        this.state = {value: ''};

//        this.handleChange = this.handleChange.bind(this);
//        this.handleSubmit = this.handleSubmit.bind(this);
    // }

    handleChange = (event) =>{
        this.setState({value: event.target.value});
    }

    // radioHandleChange = event =>{
    //     setValue(event.target.value)
    // }

    handleSubmit = (event) =>{
        alert('Post was submitted' + this.state.value)
        event.preventDefault();
    }


 render(){

    return(
        <div className='about-container'>
        <form onSubmit={this.handleSubmit}>
           <br></br>
           <br></br>
          <TextField
            id='name'
            placeholder='Your Name'
            value = {this.state.name}
            onChange = {this.textChangeHandler}
            required 
           />
           <br></br>
           <br></br>
           <TextField
            id='address'
            placeholder='Address'
            value = {this.state.address}
            onChange = {this.textChangeHandler}
            required 
           />
            <br></br>
            <br></br>
           <TextField
            id='name'
            placeholder='Name of Location'
            value = {this.state.name}
            onChange = {this.textChangeHandler}
            required 
           />
            <br></br>
            <br></br>
            <label>
                Type of Location
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
            <br></br>
            <br></br>
            <div className='radio-buttons'>
            <FormControl component="fieldset" >
                <FormLabel component="legend">Leash?</FormLabel>
                <RadioGroup aria-label="leash" >
                    <FormControlLabel value="On" control={<Radio />} label="On" />
                    <FormControlLabel value="Off" control={<Radio />} label="Off" />
                    <FormControlLabel value="Either" control={<Radio />} label="Either" />
                </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl component="fieldset" >
                <FormLabel component="legend">Bag Station?</FormLabel>
                <RadioGroup aria-label="leash" >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes, they have it covered" />
                    <FormControlLabel value="no" control={<Radio />} label="No, bring your own" />
                </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl component="fieldset" >
                <FormLabel component="legend">Location is:</FormLabel>
                <RadioGroup aria-label="leash" >
                    <FormControlLabel value="enclosed" control={<Radio />} label="Enclosed" />
                    <FormControlLabel value="open" control={<Radio />} label="Open" />
                    <FormControlLabel value="little bit of both" control={<Radio />} label="Little bit of both" />
                </RadioGroup>
            </FormControl>
            </div>
            <br></br>
            <div>Anything else we should know before we go?</div>
            <br></br>
           
            <label>
                <TextField 
                 id="standard-multiline-static"
                 label="Ex: There is water at this location. Bring towels for your pup!"
                 multiline
                 rows="4" 
                 type='text' 
                 value={this.state.value} 
                 onChange={this.handleChange}
                 ></TextField>
            </label>
           <br></br>
           <br></br>
            <Button value='Submit' className='submit-location'>Submit Location</Button>
            <br></br>
           <br></br>
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