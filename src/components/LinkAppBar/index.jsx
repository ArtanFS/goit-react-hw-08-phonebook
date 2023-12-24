import { NavLink } from 'react-router-dom';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { AppBar, Box, Toolbar, Typography, Link } from '@mui/material';

export default function LinkAppBar() {
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
