import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

// import css from './Navigation.module.css';

export const Navigation1 = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {/* <NavLink className={css.link} to="/"> */}
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && (
        // <NavLink className={css.link} to="/tasks">
        <NavLink to="/contacts">Contacts</NavLink>
      )}
    </nav>
  );
};

export function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link component={NavLink} to="/" variant="h6" color="#ffffff">
            Home
          </Link>
          {isLoggedIn && (
            <Link
              component={NavLink}
              to="/contacts"
              variant="h6"
              color="#ffffff"
              sx={{ mx: 2 }}
            >
              Contacts
            </Link>
          )}
          <Typography sx={{ flexGrow: 1 }}></Typography>
          {isLoggedIn ? 1 : 2}
          <Button color="inherit">Register</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}