import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLogin from './components/auth/UserLogin';
import AddContact from './components/contacts/AddContact';
import HomePage from './components/homePage/HomePage';
import ROUTES from './routes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} exact element={<HomePage />} />
      <Route path={ROUTES.login} exact element={<UserLogin />} />
      <Route path={ROUTES.contactForm} exact element={<AddContact />} />
    </Routes>
  );
};

export default AppRoutes;
