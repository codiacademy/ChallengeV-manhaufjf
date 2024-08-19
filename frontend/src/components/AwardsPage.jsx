import React from 'react';
import FundoAwards from '../images/FundoAwards.png';

function AwardsPage() {
    return (
        <section id="AwardsPage" className="w-full min-h-screen ">
            <div className="bg-gradient-to-b from-magic-200 to-magic-400 z-[99]">
                <div className=" bg-center bg-cover min-h-screen w-full" style={{ backgroundImage: `url(${FundoAwards})`,opacity: 0.3 }}>
                    {/* implemente a primeira parte aqui */}
                </div>
            </div>
            <div className="w-full min-h-screen bg-gradient-to-b from-magic-400 to-magic-500">
                {/* implemente a segunda parte aqui */}
            </div>
            
        </section>
    );
}

export default AwardsPage;