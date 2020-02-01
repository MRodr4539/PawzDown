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
import RatingTool from './RatingTool'
import { Link } from 'react-router-dom'




class AddPost extends Component {
    state = {
        fullName: '',
        address: '',
        locationName: '',
        locationType: '',
        leash: '',
        bagStation: '',
        locationIs: '',
        comments: '',
    }

    handleSubmit = (event) => {
        
        fetch('http://pawz-down.appspot.com/locationList', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
          })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
          })
  
    }


    //Testing
    onChange = ( event ) => {
        const target = event.target
        const name = target.name
        let value = undefined
    
        if ( target.type === 'checkbox' ) {
            value = target.checked
        }
        else if ( target.type === 'radio' ) {
            value = target.value
        }
        else {
            value = target.value
        }
    
        this.setState({
            [name]: value,
        })
    }


 render(){

    return(
        <div className='add-container'>
        <form onSubmit={this.onChange} method='post'>
           <br></br>
           <br></br>
          <TextField
            id='name'
            name='fullName'
            placeholder='Full Name'
            value = {this.state.fullName}
            onChange = {this.onChange}
            required 
           />
           <br></br>
           <br></br>
           <TextField
            id='address'
            name='address'
            placeholder='Address'
            value = {this.state.address}
            onChange = {this.onChange}
            required 
           />
            <br></br>
            <br></br>
           <TextField
            id='name'
            name='locationName'
            placeholder='Name of Location'
            value = {this.state.locationName}
            onChange = {this.onChange}
            required 
           />
            <br></br>
            <br></br>
            <label>
                Type of Location
                <select 
                 name='locationType'
                 value={this.state.locationType}
                 onChange={this.onChange}>
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
            <FormControl component="fieldset"  >
                <FormLabel component="legend">Leash?</FormLabel>
                <RadioGroup 
                 aria-label="leash"
                 name='leash'
                 onChange={this.onChange} 
                 value={this.state.leash}>
                    <FormControlLabel value="On" control={<Radio />} label="On" />
                    <FormControlLabel value="Off" control={<Radio />} label="Off" />
                    <FormControlLabel value="Either" control={<Radio />} label="Either" />
                </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl component="fieldset" >
                <FormLabel component="legend">Water?</FormLabel>
                <RadioGroup 
                    aria-label="water"
                    name='water'
                    onChange={this.onChange} 
                    value={this.state.water}>
                    <FormControlLabel value="Fountain Available" control={<Radio />} label="Fountain Available" />
                    <FormControlLabel value="Bring your own" control={<Radio />} label="Bring your own" />
                </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl component="fieldset" >
                <FormLabel component="legend">Bag Station?</FormLabel>
                <RadioGroup 
                 aria-label="bagStation"
                 name='bagStation'
                 onChange={this.onChange}
                 value={this.state.bagStation} >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes, they have it covered" />
                    <FormControlLabel value="no" control={<Radio />} label="No, bring your own" />
                </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl component="fieldset" name='locationIs'>
                <FormLabel component="legend">Location is:</FormLabel>
                <RadioGroup 
                 aria-label="locationIs" 
                 name='locationIs'
                 onChange={this.onChange}
                 value={this.state.locationIs}>
                    <FormControlLabel value="enclosed" control={<Radio />} label="Enclosed" />
                    <FormControlLabel value="open" control={<Radio />} label="Open" />
                    <FormControlLabel value="little bit of both" control={<Radio />} label="Little bit of both" />
                </RadioGroup>
            </FormControl>
            </div>
            <br></br>
            {/* <RatingTool/> */}
            <div>Anything else we should know before we go?</div>
            <br></br>
           
            <label>
                <TextField 
                 name='comments'
                 id="standard-multiline-static"
                 placeholder="Ex: There is water at this location. Bring towels for your pup!"
                 multiline
                 rows="4" 
                 type='text' 
                 value={this.state.comments} 
                 onChange={this.onChange}
                 ></TextField>
            </label>
           <br></br>
           <br></br>
         
            <Button value='Submit' className='submit-location' onClick={this.handleSubmit}>Submit Location</Button>
            
            <br></br>
           <br></br>
        </form>
        
        </div>
    )
}
}



export default AddPost;

