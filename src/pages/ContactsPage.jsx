import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import Error from 'components/Error';
import { selectError, selectIsLoading } from 'store/contacts/contactSelectors';
import { getContacts } from 'store/contacts/operations';
import { Helmet } from 'react-helmet';
import { Container, CssBaseline } from '@mui/material';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <ContactForm />
      <Filter />
      {isLoading && <Loader />}
      {error && <Error err={error} />}
      <ContactList />
    </Container>
  );
};

export default App;
