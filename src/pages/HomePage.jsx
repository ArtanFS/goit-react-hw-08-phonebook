import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Typography
        component="h1"
        variant="h4"
        fontWeight={500}
        sx={{ mt: 2, textAlign: 'center' }}
      >
        Welcome To Your Phonebook
      </Typography>
    </div>
  );
};

export default Home;
