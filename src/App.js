import logo from './musical-notes.svg';
import './App.css';
import React from "react";
import { getSongs } from './api/songs';

function App() {
  const [songs, setSongs] = React.useState(null);
  const SONGS_URL = "/songs/ed-sheeran";

  React.useEffect(() => {}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ height: '100px', weight: '100px' }} />
        <p>
          Ed Sheeran
        </p>
        <button onClick={async (e) => {
            e.preventDefault()
            const songs = await getSongs(SONGS_URL)
            setSongs(songs)
          }
          } type='button'>Show songs
        </button>
        <ul>
          {songs && songs.map(item => (
            <li key={item} data-cy={item}>{item}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
