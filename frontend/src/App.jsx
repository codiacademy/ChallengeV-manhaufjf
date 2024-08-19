import React from 'react';
import { Element } from 'react-scroll';
import HomePage from './components/HomePage'
import Nav from './components/Nav'
import FormsPage from './components/FomsPage'
import ServicesPage from './components/ServicesPage';
import Footer from './components/Footer';
import AwardsPage from './components/AwardsPage';
import AboutPage from './components/AboutPage';


function App() {
    return (
        <div className="App">
            <Nav/>
            <Element name="Home">
                <HomePage />
            </Element>
            <Element name="Sobre">
                <AboutPage />
            </Element>
            <Element name="Serviços">
                <ServicesPage />
            </Element>
            <Element name="Prêmios">
                <AwardsPage />
            </Element>
            <Element name="Forms">
                <FormsPage />
            </Element>  
            <Footer />
        </div>
    );
}

export default App;