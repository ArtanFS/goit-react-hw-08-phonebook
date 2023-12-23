import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './filter/filterSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const reducer = {
  auth: persistReducer(authPersistConfig, authReducer),
  contacts: contactReducer,
  filter: filterReducer,
};
