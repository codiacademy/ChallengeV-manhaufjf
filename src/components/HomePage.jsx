import React from 'react';

function HomePage() {
    return (
        <div className="Home h-screen w-full bg-offwhite">
            <div className="paleta flex gap-4 p-10">
                <div className="rounded-full w-8 h-8 bg-magic-100"></div>
                <div className="rounded-full w-8 h-8 bg-magic-200"></div>
                <div className="rounded-full w-8 h-8 bg-magic-300"></div>
                <div className="rounded-full w-8 h-8 bg-magic-400"></div>
                <div className="rounded-full w-8 h-8 bg-magic-500"></div>
            </div>
        </div>
    );
}

export default HomePage;