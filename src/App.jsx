import React from 'react';
import HomePage from './components/HomePage'
import Footer from './components/Footer';

// Paleta de cores já está definida no arquivo tailwind.config.js

function App() {
    return (
        <div className="App">
            <HomePage />
            <Footer />
        </div>
    );
}

export default App;