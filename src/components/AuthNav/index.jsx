import { NavLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';

export default function AuthNav() {
  return (
    <Box>
      <Link
        component={NavLink}
        to="/register"
        variant="h6"
        color="inherit"
        sx={{ mr: 2 }}
      >
        Register
      </Link>
      <Link component={NavLink} to="/login" variant="h6" color="inherit">
        Log In
      </Link>
    </Box>
  );
}
