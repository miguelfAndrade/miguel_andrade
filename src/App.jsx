import './styles/App.css';
import {React, useState, useEffect} from 'react';
import { motion, useAnimation } from "framer-motion"

import About from './sections/About';
import Contacts from './sections/Contacts';
import Experience from './sections/Experience';
import Hobbies from './sections/Hobbies';
import Languages from './sections/Languages';
import Studies from './sections/Studies';
import Skills from './sections/Skills';

import img from './assets/Perfil_cc.jpg';

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


const [mobileMenu, setMobileMenu] = useState(false);
const [isActive, setActive] = useState(0);
const [activeStyle, setActiveStyle] = useState([
  "active",
  "item",
  "item",
  "item",
  "item",
  "item",
  "item"
]);

const showPages = useAnimation();

const handleClick = (number) => {
  let newStyles = activeStyle;
  if(number !== isActive)
  {
    newStyles[isActive] = 'item'
    newStyles[number] = 'active'
    setActiveStyle(newStyles);
    setActive(number);

    showPages.start({ opacity: [0,1], transition: { duration: 1 } });
  }
};

const showMobileMenu = () => {
  setMobileMenu(!mobileMenu);
}

const variants = {
  open: { height: 'auto',
    transition: {
      duration: 1,
      staggerChildren: 0.2
    } 
  },
  closed: { height: 0 },
}

const rotateArrow = {
  from: { rotate: 45 },
  to: {rotate: -135 }
}

const showMenu = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

  const pages = [
    <About data={dummyData} img={img}/>,
    <Experience />,
    <Studies />,
    <Skills />,
    <Languages />,
    <Hobbies />,
    <Contacts />  
]

  const menu =  <>
            <motion.div className="menu">
                <motion.ul className="menu-list">
                  <motion.li variants={showMenu} className={activeStyle[0]} onClick={handleClick.bind(this, 0)}>{dummyMenu.about}</motion.li>
                  <motion.li variants={showMenu} className={activeStyle[1]} onClick={handleClick.bind(this, 1)}>{dummyMenu.experience}</motion.li>
                  <motion.li variants={showMenu} className={activeStyle[2]} onClick={handleClick.bind(this, 2)}>{dummyMenu.studies}</motion.li>
                  <motion.li variants={showMenu} className={activeStyle[3]} onClick={handleClick.bind(this, 3)}>{dummyMenu.skills}</motion.li>
                  <motion.li variants={showMenu} className={activeStyle[4]} onClick={handleClick.bind(this, 4)}>{dummyMenu.languages}</motion.li>
                  <motion.li variants={showMenu} className={activeStyle[5]} onClick={handleClick.bind(this, 5)}>{dummyMenu.hobbies}</motion.li>
                  <motion.li variants={showMenu} className={activeStyle[6]} onClick={handleClick.bind(this, 6)}>{dummyMenu.contacts}</motion.li>
                </motion.ul>
            </motion.div>
        </>;

useEffect(() => {
  showPages.start({ opacity: [0,1], transition: { duration: 1, delay: 0.5 } })
}, [showPages])

  return (
    <>
      <div className="app">
          <div className="div-content">
              <div className="div-menu">
                {menu}
              </div>
              <div className="header"> 
                <h1 className="main-title"> MIGUEL ANDRADE </h1>
                <motion.div 
                  initial="closed"
                  animate={mobileMenu ? "open" : "closed"} 
                  variants={variants}
                  transition={{ duration: 1 }}
                >
                  {menu}
                </motion.div>
                <motion.div 
                  initial="from"
                  animate={mobileMenu ? "to" : "from"} 
                  variants={rotateArrow}
                  transition={{ duration: 0.5 }}
                  className="button-mobile" onClick={showMobileMenu}
                />
              </div>
              <motion.div 
              animate={showPages}
              className="pages">
                {pages[isActive]}
              </motion.div>
          </div>
    </div>
  </>
  );
}

export default App;
