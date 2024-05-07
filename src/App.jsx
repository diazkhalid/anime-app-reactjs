import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import animesData from './data/animesData';

export default function App() {
  const [animes, setAnimes] = useState(animesData);
  return (
    <>
      <NavBar animes={animes} />
      <Main animes={animes} />
    </>
  );
}
