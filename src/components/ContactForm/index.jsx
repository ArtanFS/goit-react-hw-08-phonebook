import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'store/contacts/contactSelectors';
import { addContact } from 'store/contacts/operations';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';

const ContactForm = () => {
  const [value, setValue] = useState({
    name: '',
    number: '',
  });
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const isDuplicate = contacts.some(
      ({ name }) => value.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${value.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(value));
    setValue({ name: '', number: '' });
  };

  const handleChange = ({ target: { value, name } }) => {
    setValue(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Box
      sx={{
        marginTop: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h4" fontWeight={500} sx={{ mb: 2 }}>
        Phonebook
      </Typography>
      <Typography component="p" variant="h6">
        Add Your Contacts
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="name"
              fullWidth
              id="inputName"
              label="Name"
              autoFocus
              value={value.name}
              onChange={handleChange}
              required
              type="text"
              pattern="^[a-zA-Zа-яА-ЯіІїЇєЄ’]+(([' \-][a-zA-Zа-яА-ЯіІїЇєЄ’])?[a-zA-Zа-яА-ЯіІїЇєЄ’]*)*$"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="inputNumber"
              label="Number"
              name="number"
              type="tel"
              value={value.number}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              placeholder="012-345-6789"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add contact
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
