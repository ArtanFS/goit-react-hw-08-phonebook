import { useDispatch, useSelector } from 'react-redux';
import { setFilterAction } from 'store/filter/filterSlice';
import { selectFilter } from 'store/filter/filterSelectors';
import { Box, Typography, TextField } from '@mui/material';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(setFilterAction(e.target.value));
  };

  return (
    <Box sx={{ mx: 75 }}>
      <Typography component="h1" variant="h5">
        Contacts
      </Typography>
      <TextField
        margin="normal"
        fullWidth
        id="inputFindName"
        label="Find contacts by name"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />
    </Box>
  );
};

export default Filter;
