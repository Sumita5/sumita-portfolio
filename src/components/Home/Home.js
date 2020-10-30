import React from 'react';
import About from './About/About';
import Header from './Header/Header';
import './Home.css';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div className="home">
          <Header/>
          <Projects/>
          <About/>
        </div>
    );
};

export default Home;