import logo from './musical-notes.svg';
import './App.css';
import axios from "axios";
import React from "react";

const SONGS_URL = "/songs/ed-sheeran";



function App() {
  const [songs, setSongs] = React.useState(null);

  React.useEffect(() => {

  }, []);

  const getSongs = (e) => {
    e.preventDefault()

    axios.get(`${process.env.REACT_APP_API_URL}${SONGS_URL}`, {
      headers: {
        Accept: 'application/json'
      }
    })
      .then((response) => {
        setSongs(response.data)
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ height: '100px', weight: '100px' }} />
        <p>
          Ed Sheeran
        </p>
        <button onClick={(e) => getSongs(e)} type='button'>Show songs</button>
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
