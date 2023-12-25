import { useDispatch, useSelector } from 'react-redux';
import { setFilterAction } from 'store/filter/filterSlice';
import { selectFilter } from 'store/filter/filterSelectors';
import { Box, Typography, TextField, Grid } from '@mui/material';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(setFilterAction(e.target.value));
  };

  return (
    <Box
      sx={{
        marginTop: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="p" variant="h6">
        Your Contacts
      </Typography>
      <Box sx={{ my: 1 }}>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              id="inputFindName"
              label="Find contacts by name"
              name="filter"
              value={filter}
              onChange={handleFilter}
              type="text"
              pattern="^[a-zA-Zа-яА-ЯіІїЇєЄ’]+(([' \-][a-zA-Zа-яА-ЯіІїЇєЄ’])?[a-zA-Zа-яА-ЯіІїЇєЄ’]*)*$"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Filter;
