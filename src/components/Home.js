import * as React from 'react';
// import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom'
import cookie from 'cookie'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#76BA99",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#C3FF99',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function Home(props) {
  const { listings, user, removeListing } = props;

  let cookies = cookie.parse(document.cookie)
  let loggedInBool = cookies.loggedIn;

  return (
    <>
    {user && <div style={{backgroundColor: 'grey', }}>Welcome, {user.userName}</div>}
    <TableContainer sx={{height: '100vh'}} component={Paper}>
      <Table sx={{ marginTop: 10, marginBottom: 10, marginRight: 'auto', marginLeft: 'auto', width: '85vw', minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell sx={{maxWidth: 20}} align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Hours</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            {loggedInBool && <StyledTableCell align="center">Delete</StyledTableCell>}
          </TableRow>
        </TableHead>

        <TableBody>
          {listings.map((list, index) => (
            <StyledTableRow key={list.id}>
              <StyledTableCell component="th" sx={{fontWeight: 'bold', width: '8.2vw'}}scope="row">
                <Link to={`/details/${list.id}`}>{list.name}</Link>
              </StyledTableCell>
              <StyledTableCell sx={{maxWidth: '25vw'}} align="left">{list.description}</StyledTableCell>
              <StyledTableCell sx={{width: '6vw', minWidth: '7vw'}} align="right">{`${list.hours.open} - ${list.hours.close}`}</StyledTableCell>
              <StyledTableCell sx={{width: '15vw'}}align="left">{list.address}</StyledTableCell>
              {loggedInBool && <StyledTableCell align="center"><DeleteIcon onClick={()=>removeListing(index)} sx={{color: 'red', cursor: 'pointer'}}></DeleteIcon></StyledTableCell>}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
