import React, { useState } from "react";
import { Link } from 'react-scroll';
import logoMagic from "../images/logo-magic.png";
import Button from "./buttons/NavButton";


function Nav() {

    // Gerenciador de Links da navbar
    let Links = [
        {name: "Home"},
        {name: "Sobre"},
        {name: "Serviços"},
        {name: "Prêmios"},
    ]

    let [open, setOpen] = useState(false);
    
    return(
        <nav className="shadow-md w-full fixed top-0 left-0 z-[10000]">
            <div className="md:flex items-center justify-between bg-nav py-4 md:px-10 px-7">
                <img src={logoMagic} alt="" className="h-12" />

                <div onClick = {() => setOpen(!open)}   className="text-3xl hover:text-4xl text-offwhite absolute right-8 top-6 cursor-pointer md:hidden transition-all duration-500">
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-nav md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? ' top-14 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0 `}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                                <Link 
                                to={link.name} 
                                smooth={true}
                                duration={500}
                                onClick={()=> setOpen(false)} 
                                activeClass="after:content-[''] after:bg-magic-200 after:h-[3px] after:w-[100%] after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute"
                                spy={true}
                                className="cursor-pointer relative text-offwhite hover:text-magic-200 h-2 duration-500 font-[Poppins] after:content-[''] after:bg-magic-200 after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute hover:after:w-[100%] after:duration-300">{link.name}
                                </Link>
                            </li>
                        ))
                    }
                    <Link
                    to={"Forms"} 
                    smooth={true}
                    duration={500}
                    spy={true}
                    onClick={()=> setOpen(false)}>
                        <Button>Contate-nos</Button>
                    </Link>
                    
                </ul>
            </div>
        </nav>
    )
}

export default Nav;