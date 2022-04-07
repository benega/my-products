import React from 'react';
import './app-header.css';

type Props = {
  showLogin?: boolean;
}

const AppHeader: React.FC<Props> = ({ showLogin = false }) => {
  return (
    <header className="App-header">
      <h1>My Products App</h1>
      {showLogin && <div>Login</div>}
    </header>
  );
}

export default AppHeader;
