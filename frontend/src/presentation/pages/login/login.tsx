import React from 'react';
import AppFooter from '../../components/app-footer/app-footer';
import AppHeader from '../../components/app-header/app-header';
import './login.css';

const Login: React.FC = () => {
  return (
    <div className="Login overflow-container">
      <AppHeader />
      <div className="Login-content">
        <form>
          Login
        </form>
      </div>
      <AppFooter />
    </div>
  );
}

export default Login;
