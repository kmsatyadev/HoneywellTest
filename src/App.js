import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import PokemonList from './components/PokemonList';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <LoginButton />
      <LogoutButton />
      <PokemonList />
    </>
  );
}

export default App;
