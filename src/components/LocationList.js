import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(fullName, address, locationName, locationType, leash, water, bagStation, locationIs, comments) {
    return { fullName, address, locationName, locationType, leash, water, bagStation, locationIs, comments };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];


const  LocationList = () => {

   
    return(
        <div>
               <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User's Name</TableCell>
            <TableCell align="right">Address of Location</TableCell>
            <TableCell align="right">Location Name</TableCell>
            <TableCell align="right">Location Type</TableCell>
            <TableCell align="right">Leash</TableCell>
            <TableCell align="right">Water</TableCell>
            <TableCell align="right">Bag Stations</TableCell>
            <TableCell align="right">Location Is</TableCell>
            <TableCell align="right">Comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.fullName}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.locationName}</TableCell>
              <TableCell align="right">{row.locationType}</TableCell>
              <TableCell align="right">{row.leash}</TableCell>
              <TableCell align="right">{row.water}</TableCell>
              <TableCell align="right">{row.bagStation}</TableCell>
              <TableCell align="right">{row.locationIs}</TableCell>
              <TableCell align="right">{row.comments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>
    )
}

export default LocationList;