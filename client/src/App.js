import logo from './logo.svg';
import './App.css';

import axios from 'axios';

function App() {
  
  const callServer = () => {
    console.log("clicked call server button");
    axios
      .get("https://localhost:3001/api")
      .then(res => {
        console.log('res', res);
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  return (
    <div className="App">
      <p>The Yarn Tracker FE</p>
      <button onClick={callServer}>Call the server</button>
    </div>
  );
}

export default App;
