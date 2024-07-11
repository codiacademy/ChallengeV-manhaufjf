import React from 'react';
import { Element } from 'react-scroll';
import HomePage from './components/HomePage'
import Nav from './components/Nav'
import AboutPage from './components/AboutPage';


function App() {
    return (
        <div className="App">
            <Nav/>
            <Element name="Home">
                <HomePage />
            </Element>
            <Element name="About">
                <AboutPage/>
            </Element>       
        </div>
    );
}

export default App;