import SiteLayout from './layout/layout';
import jwt_decode from 'jwt-decode';
import './styles.css';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { updateAuth } from './redux/auth/actions';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();

  const getUserInfo = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      const currentTime = moment().unix();
      if (currentTime < decoded.exp) {
        const user = JSON.parse(localStorage.getItem("user"));
        dispatch(updateAuth(user))
      }
    }
  }

  useEffect(
    () => { getUserInfo() },
    []
  );

  return (
      <SiteLayout />
  );
};

export default App;
