import { useSelector } from 'react-redux';
import ContactListItem from 'components/ContactListItem';
import { selectVisibleContacts } from 'store/contacts/contactSelectors';
import { Box, List } from '@mui/material';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <Box>
      <List>
        {contacts.map(el => (
          <ContactListItem key={el.id} contact={el} />
        ))}
      </List>
    </Box>
  );
};

export default ContactList;
