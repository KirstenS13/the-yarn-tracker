import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';

import YarntypeList from './components/YarntypeList';

function App() {
  const [yarntypes, setYarntypes] = useState();

  useEffect(() => {
    const getYarntypes = () => {
      axios
        .get("http://localhost:3000/api/yarntypes")
        .then(res => {
          setYarntypes(res.data);
        })
        .catch(err => {
          console.log('err', err)
        })
    };
    getYarntypes();
  }, []);

  return (
    <div className="App">
      <p>The Yarn Tracker FE</p>
      <YarntypeList yarntypes={yarntypes}/>
    </div>
  );
}

export default App;
