import { NavLink } from 'react-router-dom';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { AppBar, Box, Toolbar, Typography, Link } from '@mui/material';

export default function LinkAppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <Box component={'header'} sx={{ flexGrow: 1 }}>
      <AppBar position="static" component={'div'}>
        <Toolbar sx={{ height: '8.99vh' }}>
          <Link component={NavLink} to="/" variant="h6" color="inherit">
            Home
          </Link>
          {isLoggedIn && (
            <Link
              component={NavLink}
              to="/contacts"
              variant="h6"
              color="inherit"
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
