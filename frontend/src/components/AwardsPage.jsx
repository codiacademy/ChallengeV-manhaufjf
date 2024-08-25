import React from 'react';
import FundoAwards from '../images/FundoAwards.png';
import Embrapa from '../images/embrapa.png';
import Zencheck from '../images/Zencheck.png';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function AwardsPage() {

    // Primeiro ref para a seção principal
    const { ref: refAwards, inView: inViewAwards } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    // Segundo ref para a seção "Nossos Cases de Sucesso"
    const { ref: refCases, inView: inViewCases } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });



    //Controlador do efeito de typing
    const typingEffect = {
        hidden: { opacity: 1 },
        visible: (i) => ({
            opacity: 1,
            transition: {
                delayChildren: i * 0.01,
                staggerChildren: 0.01,
            },
        }),
    };
    const characterVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const text1 = "Se a sua empresa enfrenta desafios na criação de soluções tecnológicas devido à falta de especialistas, o Codi Magic é a escolha ideal para você. Combinando rapidez, preços acessíveis e garantia total, oferecemos uma experiência de desenvolvimento sem complicações. Escolha o Codi Magic e transforme suas ideias em realidade, sem se preocupar com a complexidade do desenvolvimento de software. Veja o que já consquistamos:";
    return (
        <section id="AwardsPage" className="w-full min-h-screen overflow-hidden">
            <div className="bg-gradient-to-b from-magic-200 to-magic-400 z-[99]">
                <div className=" bg-center bg-cover w-full" style={{ backgroundImage: `url(${FundoAwards})`}}>
                    <motion.div
                        initial={{ opacity: 0}}
                        animate={inViewAwards ? { opacity: 1} : { opacity: 0}}
                        transition={{ duration: 2 }}
                        className="w-full md:text-5xl text-4xl text-white flex text-center items-center justify-center pt-8 font-bold"
                    >
                        <h1 className="md:border-b-8 w-auto md:border-white rounded-lg opacity-100  md:block flex flex-col items-center">Por que escolher a <span className="bg-white text-magic-200 md:rounded-t-lg md:rounded-ee-lg rounded-lg text-5xl md:mt-0 mt-2 w-48 h-14">Magic?</span></h1>
                    </motion.div>
                    <motion.p
                                ref={refAwards}
                                initial="hidden"
                                animate={inViewAwards ? "visible" : "hidden"}
                                variants={typingEffect}
                                custom={0}
                                className=" text-center md:px-32 px-2 md:py-14 py-12 text-white md:text-2xl text-xl"
                            >
                                {text1.split("").map((char, index) => (
                                    <motion.span key={index} variants={characterVariant}>
                                        {char}
                                    </motion.span>
                                ))}
                    </motion.p>
                    <div className="flex md:flex-row flex-col items-center justify-between w-full md:pt-7 md:px-56">
                        <div
                        className="flex flex-col w-96 p-8">
                            <span className="rotate-shake text-8xl text-white text-center"><ion-icon name="ribbon"></ion-icon></span>
                            <p className="text-center font-semibold text-white"> Fomos eleitos em 2023 como a “Melhor Escola de  Programação de Juiz de Fora”, com votação popular  pelo instituto Idealize</p>
                        </div>
                        <div className="brilhante md:h-64 h-1 w-[40%] md:w-1 bg-white"></div>
                        <div
                        className="flex flex-col w-96 p-8">
                            <span className=" rotate-shake text-8xl text-white text-center"><ion-icon name="trophy"></ion-icon></span>
                            <p className="text-center font-semibold text-white"> Também recebemos o prêmio de “Melhor Escola de  Informatica/Tecnologia” da Zona da Mata Mineira pelo  instituto Previlege.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-screen bg-gradient-to-b from-magic-400 to-magic-500 md:px-36 flex flex-col gap-20 py-20">
                <div className="w-full flex justify-center">
                    <h1 className="brilhante text-center md:text-4xl text-2xl text-white font-semibold border-2 px-4 pb-1 rounded-xl">Nossos Cases de sucesso</h1>
                </div>
                <div className="w-full flex justify-center items-center flex-col">
                    <div className="md:w-[70%] w-full flex flex-col gap-12">
                        <div className="flex md:justify-start justify-center">
                            <motion.div
                                ref={refCases}
                                initial={{ opacity: 0, x: -80 }}
                                animate={inViewCases ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
                                transition={{ duration: 1.2 }}
                                className="flex md:flex-row flex-col gap-2 text-magic-400 md:h-80 h-auto p-6 bg-gradient-to-b from-offwhite to-white md:w-[34rem] w-full rounded-3xl brilhante font-semibold">
                                <div className="md:h-full md:w-64 w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${Embrapa})`}}></div>
                                <p className="md:w-64 md:text-start text-center w-full">Case com A Empresa Brasileira de Pesquisa Agropecuária (Embrapa). uma instituição pública de pesquisa vinculada ao Ministério da Agricultura, Pecuária e Abastecimento do Brasil. Fundada em 1973, a Embrapa tem como missão desenvolver soluções de pesquisa, inovação e tecnologia para o setor agropecuário.</p>
                            </motion.div>
                        </div>
                        <div className="flex md:justify-end justify-center">
                            <motion.div 
                                initial={{ opacity: 0, x: 80 }}
                                animate={inViewCases ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                                transition={{ duration: 1.2 }} className="flex md:flex-row flex-col gap-2 text-magic-400 md:h-80 h-auto p-6 bg-gradient-to-b from-offwhite to-white w-full md:w-[34rem] rounded-3xl brilhante font-semibold" >
                                <div className="md:h-full md:w-64 w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${Zencheck})`}}></div>
                                <p className="md:w-64 md:text-start text-center w-full">Case com a Zencheck. A líder quando o assunto é softwares para controle de equipamentos de prevenção de incêndio. Os profissionais da Zencheck são formados em Engenharia e Tecnologia da Informação, com larga experiência em desenvolvimento de softwares.</p>
                            </motion.div>
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
            
        </section>
    );
}

export default AwardsPage;