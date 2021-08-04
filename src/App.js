// import logo from './logo.svg';
import './App.css';
const axios = require('axios');

const herokuApp = 'https://mypersonal-api-cv.herokuapp.com/';
const localHost = 'http://localhost:3001';

function App() {
  axios.get(localHost).then(function (response) {
    let data = response.data.PT[0];
    let data2 = response.data.EN[0];
    console.log(data);
    console.log(data2);
  }).catch(function (error) {
    console.log(error);
});

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          MIGUEL ANDRADE
        </p>
        <p>SITE</p>
      </header>
    </div>
  );
}

export default App;
