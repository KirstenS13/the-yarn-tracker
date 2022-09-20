import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';

import YarntypeList from './components/YarntypeList';

function App() {
  const [yarntypes, setYarntypes] = useState();

  console.log('this is right before the useEffect')
  // the useEffect seems to be running twice
  useEffect(() => {
    console.log('Hi, this is useEffect')
    const getYarntypes = () => {
      axios
        .get("http://localhost:3000/api/yarntypes")
        .then(res => {
          setYarntypes(res.data.yarntypes);
          console.log('res.data.yarntypes', res.data.yarntypes);
        })
        .catch(err => {
          console.log('err', err)
        })
    };
    getYarntypes();
  }, []);
    
  console.log('state (yarntypes)', yarntypes)

  return (
    <div className="App">
      <p>The Yarn Tracker FE</p>
      <YarntypeList yarntypes={yarntypes}/>
    </div>
  );
}

export default App;
