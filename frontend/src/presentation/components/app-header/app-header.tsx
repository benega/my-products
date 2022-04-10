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
    localStorage.removeItem('accessToken');
    setUserLogged(false);
    navigate('/');
  }

  const loginLogoutLink = !showLogin ? null : (
    !userLogged
      ? <ButtonLink onClick={handleLogin}>Login</ButtonLink>
      : <ButtonLink onClick={handleLogout}>Logout</ButtonLink>
  );

  const createLink = (desc: string, url: string): JSX.Element => {
    return (
      <li>
        <ButtonLink onClick={() => navigate(url)}>{desc}</ButtonLink>
      </li>
    );
  };

  return (
    <header className="App-header">
      <h1>My Products App</h1>
      <nav>
        <ul>
          {createLink('Home', '/')}
          {userLogged && createLink('Favourites', '/favourites')}
          <li>{loginLogoutLink}</li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
