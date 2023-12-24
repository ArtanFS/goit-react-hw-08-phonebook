import { NavLink } from 'react-router-dom';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

// import css from './AuthNav.module.css';

export const AuthNav1 = () => {
  return (
    <div>
      {/* <NavLink className={css.link} to="/register"> */}
      <NavLink to="/register">Register</NavLink>
      {/* <NavLink className={css.link} to="/login"> */}
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};

export function AuthNav() {
  // const { isLoggedIn } = useAuth();

  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <Link component={NavLink} to="/" variant="h6" color="#ffffff">
    //         Home
    //       </Link>
    //       {isLoggedIn && (
    <Box>
      <Link
        component={NavLink}
        to="/register"
        variant="h6"
        color="#ffffff"
        sx={{ mx: 2 }}
      >
        Register
      </Link>
      <Link component={NavLink} to="/login" variant="h6" color="#ffffff">
        Log In
      </Link>
    </Box>
  );
}
// <Typography sx={{ flexGrow: 1 }}></Typography>
// {isLoggedIn ? <UserMenu /> : <AuthNav />}
// {
/* <Button color="inherit">Register</Button>
          <Button color="inherit">Login</Button> */
// }
//       </Toolbar>
//     </AppBar>
//   </Box>
// );
// }
