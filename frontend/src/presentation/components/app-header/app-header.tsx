import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonLink from '../button-link/button-link';
import './app-header.css';

type Props = {
  showLogin?: boolean;
}

const AppHeader: React.FC<Props> = ({ showLogin = false }) => {
  const navigate = useNavigate();
  const [userLogged, setUserLogged] = useState(!!localStorage.accessToken);

  const handleLogin = () => {
    navigate('/login')
  }

  const handleLogout = () => {
    localStorage.accessToken = null;
    setUserLogged(false);
  }

  const link = !showLogin ? null : (
    !userLogged
      ? <ButtonLink onClick={handleLogin}>Login</ButtonLink>
      : <ButtonLink onClick={handleLogout}>Logout</ButtonLink>
  );
  return (
    <header className="App-header">
      <h1>My Products App</h1>
      {link}
    </header>
  );
}

export default AppHeader;
