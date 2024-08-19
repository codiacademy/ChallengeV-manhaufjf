import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import HomeButton from './buttons/HomeButton';
import { Link } from 'react-scroll';
import Title from '../images/parallax/Title.png';
import Fundo from '../images/Fundo.png';
import { Images } from '../static-data-parallax';
import LayerFrente from '../images/parallax/LayerFrente.png';

function HomePage() {

    useEffect(() => {
        const handleScroll = () => {
            let value = window.scrollY;
            let parallax_group = document.querySelector('.parallax_group');
            let fundodireita = document.querySelector('.fundodireita');
            let fundoesquerda = document.querySelector('.fundoesquerda');
            let layermeio = document.querySelector('.layermeio');
            let meiodireita = document.querySelector('.meiodireita');
            let meioesquerda = document.querySelector('.meioesquerda');

            if (value < window.innerHeight / 2 + 100) {
                parallax_group.style.marginTop = value * 1.6 + 'px';
                fundodireita.style.marginLeft = value * 0.5 + 'px';
                fundoesquerda.style.marginLeft = value * -0.5 + 'px';
                layermeio.style.marginTop = value * 1.3 + 'px';
                meiodireita.style.marginLeft = value * 0.5 + 'px';
                meioesquerda.style.marginLeft = value * -0.5 + 'px';
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const layerfrente = {
        hidden: { y: '80%', opacity: 0 },
        visible: {
            y: 0.9,
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 1,
            }
        },
    };

    const layerVariants = {
        hidden: { y: '80%', opacity: 0 },
        visible: i => ({
            y: 0.9,
            opacity: 1,
            transition: {
                delay: 0.2 + i * 0.3,
                duration: 1,
            }
        }),
    };

    const parallaxGroupVariants = {
        hidden: { y: '-50%', opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.8,
                duration: 1,
            }
        }
    };

    return (
        <section id="Home" className="h-screen w-full overflow-hidden">
            <div className="bg-cover bg-center absolute top-0 left-0 w-full pointer-events-none h-full z-[0]" style={{ backgroundImage: `url(${Fundo})` }}></div>
            <div className="relative flex justify-center md:p-28 pt-32 h-full">
                {Images.map((image, index) => (
                    <motion.div
                        key={index}
                        className={`bg-cover bg-center absolute top-0 left-0 w-full pointer-events-none h-full z-[${image.z}] ${image.class}`}
                        style={{ backgroundImage: `url(${image.name})` }}
                        custom={image.custom}
                        initial="hidden"
                        animate="visible"
                        variants={layerVariants}
                    ></motion.div>
                ))}
                <motion.div
                    className="bg-cover bg-center absolute top-0 left-0 w-full pointer-events-none h-full z-[1000] layerfrente"
                    style={{ backgroundImage: `url(${LayerFrente})` }}
                    initial="hidden"
                    animate="visible"
                    variants={layerfrente}
                ></motion.div>
                <motion.div
                    className="parallax_group md:w-[70%] items-center md:items-start z-[900] flex flex-col gap-2"
                    initial="hidden"
                    animate="visible"
                    variants={parallaxGroupVariants}
                >
                    <h2 className="text-magic-100 font-bold text-2xl text-start font-[Poppins]">Boas-Vindas ao:</h2>
                    <div className="flex justify-center md:w-full md:px-0 px-8 w-96 md:h-36 h-28"><img src={Title} alt="" className="md:w-[420px]" /></div>
                    <p className="px-6 text-center pt-3 pb-3 font-[Poppins] text-offwhite font-medium text-sm md:text-lg">Estúdio de software da Codi Academy, oferece tecnologia de ponta para empresas com equipes tecnológicas reduzidas. Garantimos desenvolvimento rápido e preços acessíveis, além de total assistência na manutenção dos produtos após a entrega.</p>
                    <div className="w-full flex justify-center">
                        <Link
                        to={"Forms"} 
                        smooth={true}
                        duration={500}
                        spy={true}>
                            <HomeButton>Entre em contato</HomeButton>
                        </Link>
                        
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default HomePage;
