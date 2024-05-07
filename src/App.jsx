import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import animesData from './data/animesData';
import Search from './components/Search';
import NumResult from './components/NumResult';
import Box from './components/Box';
import AnimeList from './components/AnimeList';
import AnimeDetail from './components/AnimeDetail';

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [animes, setAnimes] = useState(animesData);
  const [selectedAnime, setSelectedAnime] = useState(animes[0]);

  function handleSelectedAnime(id) {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  }

  return (
    <>
      <NavBar>
        <Search>
          <NumResult animes={animes} />
        </Search>
      </NavBar>
      <Main>
        <Box>
          <AnimeList animes={animes} onSelectedAnime={handleSelectedAnime} />
        </Box>
        <Box>
          <AnimeDetail selectedAnime={selectedAnime} />
        </Box>
      </Main>
    </>
  );
}
