import { useDispatch } from 'react-redux';
import { logOut } from 'store/auth/operations';
import { useAuth } from 'hooks/useAuth';
// import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    // <div className={css.wrapper}>
    <div>
      {/* <p className={css.username}>Welcome, {user.name}</p> */}
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
