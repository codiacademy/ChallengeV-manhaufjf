import React from 'react';
import HomePage from './components/HomePage'
import FormsPage from './components/FomsPage';

// Paleta de cores já está definida no arquivo tailwind.config.js

function App() {
    return (
        <div className="App">
            {/* <HomePage /> */}
            <FormsPage/>
        </div>
    );
}

export default App;