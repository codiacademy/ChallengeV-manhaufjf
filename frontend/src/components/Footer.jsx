import React from "react";
import { Link } from 'react-scroll';

function Footer() {
    let Links = [
        "Home",
        "Sobre",
        "Serviços",
        "Prêmios",
        "Forms"
    ]

    let Redes = [
        {
            icon: "logo-youtube",
            link: "https://www.youtube.com/channel/UC28bZX0d_qdl3mHEAYqhJhg"
        },
        {
            icon: "logo-facebook",
            link: "https://www.facebook.com/codiacademy"
        },
        {
            icon: "logo-instagram",
            link: "https://www.instagram.com/codi.academy/"
        },
        {
            icon: "logo-twitter",
            link: "https://twitter.com/codiacademy"
        }
    ]

    return (
        <div className="w-full md:h-[500px] h-auto bg-magic-500 flex flex-col items-center justify-center overflow-hidden">
            <div className="flex md:gap-52 md:items-center mt-10 gap-9 md:flex-row flex-col">
                <div> 
                    <h2 className="text-2xl font-[Poppins] font-semibold text-white mb-4">Menu</h2>
                    <ul className="text-base font-[Poppins] text-offwhite">
                        {
                            Links.map((link, i) => (
                                <li className="hover:text-white hover:underline hover:underline-offset-2 cursor-pointer duration-300" key={i}>
                                    <Link 
                                    to={link} 
                                    smooth={true}
                                    duration={500}
                                    spy={true}>
                                        {link}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="w-72">
                    <h2 className="text-2xl font-[Poppins] font-semibold text-white mb-4">Contato</h2>
                    <ul className="text-base font-[Poppins] text-offwhite">
                        <li><span className="text-white"><ion-icon name="location-sharp"></ion-icon></span> CRITT - Centro Regional de Inovação e Transferência de Tecnologia. Campus Universitário, s/n - Martelos, Juiz de Fora - MG.</li>
                        <li><span className="text-white"><ion-icon name="call"></ion-icon></span> (32) 9 9114 6046 (Suporte)</li>
                        <li><span className="text-white"><ion-icon name="mail"></ion-icon></span> suporte@codiacademy.com</li>
                    </ul>
                </div>
                <div className="google-map-code">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.018820995399!2d-43.378078724722336!3d-21.779532580064295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989ba4f5d4d0e3%3A0xce26e835a31bd3fc!2sCRITT%20-%20Juiz%20de%20Fora%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1721743587310!5m2!1spt-BR!2sbr"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        className="md:h-[360px] md:w-[360px] h-[300px] w-[300px]"
                        title = "Google Maps"
                    />
                </div>
            </div>

            <div className="flex gap-8 mt-6">
                {
                    Redes.map((rede, i) => (
                        <a href={rede.link} key={i}><span className="text-2xl text-offwhite hover:text-white duration-100"><ion-icon name={rede.icon}></ion-icon></span></a>
                    ))
                }
            </div>

            <div className="my-3">
                <p className="text-offwhite text-base font-[Poppins]">© 2024 Magic. Todos os direitos reservados.</p>
            </div>
        </div>
    )
}

export default Footer;