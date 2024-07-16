import React from 'react';

function HomeButton(Props) {
    return (
        <button className=" homebutton md:mt-12 mt-6 md:w-[470px] h-16 md:font-normal font-semibold  w-56 md:ml-6 z-30 py-2 bg-magic-200 rounded-md text-white relative font-[Poppins] after:-z-20 after:absolute after:h-1 after:w-1 after:bg-magic-400 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-500 after:transition-all after:duration-500 transition-all duration-500 md:text-4xl text-xl hover:animate-none">
            {Props.children}
        </button>
    );
}

export default HomeButton;