import * as React from 'react';
import cookie from 'cookie';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  const {loggedInBool, setLoggedInBool} = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor: "green"}}position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left'}}>
            Small Business App
          </Typography>
          <ul className="nav--list">
            <li className="nav-list-item">
              <Link style={{color: 'white', textDecoration: 'none', fontFamily: 'Helvetica'}} to="/">Listings</Link>
            </li>
            {loggedInBool && <li className="nav-list-item">
              <Link style={{color: 'white', textDecoration: 'none', fontFamily: 'Helvetica'}} to="/add">Add</Link>
            </li>}          
            {loggedInBool ? 
            <li className="nav-list-item">
            <Link style={{color: 'white', textDecoration: 'none', fontFamily: 'Helvetica'}} to="/login" onClick={() => {
              document.cookie = cookie.serialize("loggedIn", null, {
                maxAge: 0,
              })
              document.cookie = cookie.serialize("userName", null, {
                maxAge: 0
              })
              setLoggedInBool(false);
              }
            }>Logout</Link>
          </li> :
            <li className="nav-list-item">
              <Link style={{color: 'white', textDecoration: 'none', fontFamily: 'Helvetica'}} to="/login">Login</Link>
            </li>}
          </ul>
        </Toolbar>
      </AppBar>
    </Box>
  );
}