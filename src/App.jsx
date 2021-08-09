import './styles/App.css';
import {React, useState} from 'react';
// import { useSpring, animated } from 'react-spring'

import About from './sections/About';
import Contacts from './sections/Contacts';
import Experience from './sections/Experience';
import Hobbies from './sections/Hobbies';
import Languages from './sections/Languages';
import Studies from './sections/Studies';
import Skills from './sections/Skills';

import img from './assets/logo192.png';

const axios = require('axios');

// const herokuApp = 'https://mypersonal-api-cv.herokuapp.com/';
const localHost = 'http://localhost:3001';

const dummyData = {
  welcomeTitle: "Teste titulo",
  welcomeBody: "Teste Body"
};


let dummyMenu = {
  about: "About me",
  experience: "Experience",
  skills: "Skills",
  studies: "Studies",
  languages: "Languages",
  hobbies: "Hobbies",
  contacts: "Contacts"  
};

function App() {
  axios.get(localHost).then(function (response) {
    let data = response.data.PT[0];
    let data2 = response.data.EN[0];
    console.log(data);
    console.log(data2);
  }).catch(function (error) {
    console.log(error);
});

const [isActive, setActive] = useState(0);

const handleClick = (number) => {
  if(number !== isActive)
  {
    setActive(number);
  }
};
  // const props = useSpring({
  // to: { opacity: 1 },
  // from: { opacity: 0 },
  // delay: 500,
  // config: {duration: 500},
  // // config: config.molasses,
  // // onRest: () => set(!flip),
  // })

  const pages = [
  <About data={dummyData} img={img}/>,
  <Experience />,
  <Skills />,
  <Studies />,
  <Languages />,
  <Hobbies />,
  <Contacts />  
]

  const menu =  <>
            <div className="menu">
                <ul className="menu-list">
                  <li className="item" onClick={handleClick.bind(this, 0)}>{dummyMenu.about}</li>
                  <li className="item" onClick={handleClick.bind(this, 1)}>{dummyMenu.experience}</li>
                  <li className="item" onClick={handleClick.bind(this, 2)}>{dummyMenu.studies}</li>
                  <li className="item" onClick={handleClick.bind(this, 3)}>{dummyMenu.skills}</li>
                  <li className="item" onClick={handleClick.bind(this, 4)}>{dummyMenu.languages}</li>
                  <li className="item" onClick={handleClick.bind(this, 5)}>{dummyMenu.hobbies}</li>
                  <li className="item" onClick={handleClick.bind(this, 6)}>{dummyMenu.contacts}</li>
                </ul>
            </div>
        </>;

  return (
    <>
      <div className="app">
          <div className="div-content">
              <div className="div-menu">
                {menu}
              </div>
              <div className="header"> 
                <h1 className="main-title"> MIGUEL ANDRADE </h1>
              </div>
              {pages[isActive]}
          </div>
    </div>
  </>
  );
}

export default App;
