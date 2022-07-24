import React from 'react';
import ROUTES from '../../routes';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './Navbar.scss';
const Navbar = () => {
  const nav = useNavigate();
  const onLogout = () => {
    localStorage.removeItem('username');
    nav(ROUTES.login);
  };
  const isUserLoggedIn = localStorage.getItem('username');
  return (
    <div className="navbar-container">
      {!isUserLoggedIn && (
        <NavLink className="nav-link" to={ROUTES.login}>
          <Button className="nav-link-btn">Login</Button>
        </NavLink>
      )}
      <NavLink className="nav-link" to={ROUTES.home}>
        <Button className="nav-link-btn">Home</Button>
      </NavLink>
      {isUserLoggedIn && <Button onClick={onLogout}>Logout</Button>}
    </div>
  );
};

export default Navbar;
