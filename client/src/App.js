import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';

import YarntypeList from './components/YarntypeList';

function App() {
  const [yarntypes, setYarntypes] = useState();

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/yarntypes')
      .then(res => {
          setYarntypes(res.data);
      })
      .catch(err => {
          console.log('err', err)
      })
      .then(res => {
        console.log('axios call complete')
      })
  }, [])

  return (
    <div className="App">
      <p>The Yarn Tracker FE</p>
      { yarntypes ? <YarntypeList yarntypes={yarntypes}/> : <p>My Yarn</p> }
    </div>
  );
}

export default App;
