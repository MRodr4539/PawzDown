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
import {purple, green, teal, blue, orange} from '@material-ui/core/colors';

//custom themeing
// const theme = createMuiTheme({
//   palette: {
//     primary: teal,
//     secondary: green,
//   },
//   typography:{
//       fontFamily:[
//           '"Segoe UI"',
//       ]
//   }
// });



// class CreateAcct extends Component {
//     state ={
//         FirstName:'',
//         LastName: '',
//         Username: '',
//         Password: '',
//         Email: '',
//         ZipCode: ''
//     }
// render(){
//     return(
//         <div className='background'>
//             <ThemeProvider theme= {theme}>
//                 <ThemeProvider
//                     theme={theme =>
//                     createMuiTheme({
//                         ...theme,
//                         palatte: {
//                             ...theme.palatte,
//                             primary:{
//                                 main: green[500],
//                             },
//                         },
//                     })}
//                 >
//         <Card className='add-review-card'>
//             <CardContent>
//                 <Typography variant="h3">
//                     Create Account
//                 </Typography>
//                 <br></br>
//                 <CardActions>
//                     <TextField
//                         className='creat-acct-text-field'
//                         id='outlined-basic'
//                         label="First Name"
//                         variant='outlined'
//                         placeholder="ex: Jane"
//                         value=''
//                         onChange=''
//                     />  
//                     <br></br>
//                      <TextField
//                         className='creat-acct-text-field'
//                         id='outlined-basic'
//                         label="Last Name"
//                         variant='outlined'
//                         placeholder="ex: Doe"
//                         value=''
//                         onChange=''
//                     />  
//                     <br></br>
//                     <TextField
//                         className='creat-acct-text-field'
//                         id='outlined-basic'
//                         label="Username"
//                         variant='outlined'
//                         placeholder="ex: DogLover123"
//                         value=''
//                         onChange=''
//                     /> 
//                      <br></br>
//                     <TextField
//                         className='creat-acct-text-field'
//                         id='outlined-basic'
//                         label="Password"
//                         variant='outlined'
//                         value=''
//                         onChange=''
//                     /> 
//                      <br></br>
//                     <TextField
//                         className='creat-acct-text-field'
//                         id='outlined-basic'
//                         label="Email"
//                         variant='outlined'
//                         placeholder="ex: Dog@lover.com"
//                         value=''
//                         onChange=''
//                     />  
//                      <br></br>
//                     <TextField
//                         className='creat-acct-text-field'
//                         id='outlined-basic'
//                         label="Zip Code"
//                         variant='outlined'
//                         placeholder="ex: 78701"
//                         value=''
//                         onChange=''
//                     /> 
//                 </CardActions>
//                 <CardActions>
//                     <Button
//                         variant='contained'
//                         color='primary'
//                     >
//                         Create Account
//                     </Button>
//                 </CardActions>

                
//             </CardContent>
//         </Card>
//            </ThemeProvider>
//         </ThemeProvider>
//         </div>
//     )
// }
// }

// export default CreateAcct;