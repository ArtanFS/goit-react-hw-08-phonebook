import { useAuth } from 'hooks/useAuth';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';
import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks/useAuth';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
// import css from './AppBar.module.css';

// export const AppBar1 = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     // <header className={css.header}>
//     <header>
//       <Navigation />
//       {isLoggedIn ? <UserMenu /> : <AuthNav />}
//     </header>
//   );
// };

export function LinkAppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ height: '8vh' }}>
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
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
          {/* <Button color="inherit">Register</Button>
          <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
