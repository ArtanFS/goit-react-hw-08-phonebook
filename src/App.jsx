import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SharedLayout from './Layouts/SharedLayout';
import { PrivateRoute } from 'guards/PrivateRoute';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from 'guards/RestrictedRoute';
import { refreshUser } from 'store/auth/operations';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={defaultTheme}>
      {isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      )}
    </ThemeProvider>
  );
};

export default App;
