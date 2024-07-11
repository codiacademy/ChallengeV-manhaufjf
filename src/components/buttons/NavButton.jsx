import React from 'react';

function NavButton(Props) {
    return (
        <button className="px-4 md:ml-6 z-30 py-2 bg-magic-200 rounded-lg text-white relative font-semibold font-[Poppins] after:-z-20 after:absolute after:h-1 after:w-1 after:bg-magic-400 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-500 after:transition-all after:duration-500 transition-all duration-500 text-lg">
          {Props.children}
        </button>
    );
}

export default NavButton;