import React from 'react'
import PropTypes from 'prop-types';


// import Rating from '@material-ui/lab/Rating';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import { withStyles } from '@material-ui/core/styles';
// import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
// import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
// import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
// import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
// import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import PetsIcon from '@material-ui/icons/Pets';


// const StyledRating = withStyles({
//     iconFilled: {
//       color: '#ff6d75',
//     },
//     iconHover: {
//       color: '#ff3d47',
//     },
//   })(Rating);

//   const customIcons = {
//     1: {
//       icon: <SentimentVeryDissatisfiedIcon />,
//       label: 'Very Dissatisfied',
//     },
//     2: {
//       icon: <SentimentDissatisfiedIcon />,
//       label: 'Dissatisfied',
//     },
//     3: {
//       icon: <SentimentSatisfiedIcon />,
//       label: 'Neutral',
//     },
//     4: {
//       icon: <SentimentSatisfiedAltIcon />,
//       label: 'Satisfied',
//     },
//     5: {
//       icon: <SentimentVerySatisfiedIcon />,
//       label: 'Very Satisfied',
//     },
//   };

// function IconContainer(props) {
//     const { value, ...other } = props;
//     return <span {...other}>{customIcons[value].icon}</span>;
//   }
  
//   IconContainer.propTypes = {
//     value: PropTypes.number.isRequired,
//   };

//   export default function RatingTool(){
//       return(
//           <div>
//             <Box component="fieldset" mb={3} borderColor="transparent">
//                 <Typography component="legend">Custom icon and color</Typography>
//                 <StyledRating
//                 name="customized-color"
//                 defaultValue={2}
//                 getLabelText={value => `${value} Paw${value !== 1 ? 's' : ''}`}
//                 precision={0.5}
//                 icon={<PetsIcon fontSize="inherit" />}
//                 />
//             </Box>
//           </div>
//       )
//   }