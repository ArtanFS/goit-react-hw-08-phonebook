import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/contacts/operations';
import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Grid,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ContactsIcon from '@mui/icons-material/Contacts';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ListItem sx={{ mx: 5, height: '44px' }}>
      <Grid container>
        <Grid item xs={8} sm={10}>
          <Box
            sx={{
              mt: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'transparent' }}>
                <ContactsIcon color="primary" sx={{ width: 28, height: 28 }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${contact.name}: ${contact.number}`}
              sx={{ typography: 'h6' }}
            />
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              <DeleteForeverIcon
                color="primary"
                sx={{ width: 32, height: 32 }}
              />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default ContactListItem;
