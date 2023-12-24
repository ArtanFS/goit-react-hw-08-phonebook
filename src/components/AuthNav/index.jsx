import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function AuthNav() {
  return (
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
