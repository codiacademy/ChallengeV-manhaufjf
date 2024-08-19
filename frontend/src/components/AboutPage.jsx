import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagem1 from '../images/carrousell/MagicCarrousell.png'
import imagem2 from '../images/carrousell/Certificado.png'
import imagem3 from '../images/carrousell/FotoParede.png'

function AboutPage() {

    //Controla a animação inview
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    //Controlador do efeito de typing
    const typingEffect = {
        hidden: { opacity: 1 },
        visible: (i) => ({
            opacity: 1,
            transition: {
                delayChildren: i * 0.02,
                staggerChildren: 0.02,
            },
        }),
    };
    const characterVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const text1 = "O estúdio Magic é uma das soluções B2B oferecidas pela Codi Academy, o estúdio é composto pelos melhores alunos da instituição, que juntos constroem tecnologia para empresas parceiras.";
    const text2 = "Já a Codi Academy é a escola de programação do Centro Regional de Inovação e Transferência de Tecnologia (CRITT) da UFJF. Nossa missão é criar novos talentos para o mercado da Tecnologia.";

    // Configuração da biblioteca do carrousell
    const settings = {
        dots: true, // Mostra pontos de navegação
        infinite: true, // Loop infinito
        speed: 500, // Velocidade de transição
        slidesToShow: 1, // Mostra uma imagem por vez
        slidesToScroll: 1, // Desliza uma imagem por vez
        autoplay: true, // Ativa a transição automática
        autoplaySpeed: 3000, // Tempo em milissegundos para a transição automática
        arrows: false, // Desativa as setas de navegação
    };

    return (
        <section className="md:h-screen h-auto w-full bg-gradient-to-b from-magic-300 to-magic-500 flex items-center justify-center md:gap-20 gap-8 md:p-20 p-14 flex-col overflow-x-hidden">
            <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                        className=" text-center py-1 md:text-4xl text-3xl font-medium text-white bg-magic-500 md:w-72 w-44 rounded-full border-2 border-white font-[Poppins] md:mt-0 mt-8"
            >
                Sobre nós
            </motion.div>
            <div className="flex items-center justify-center md:gap-36 gap-6 md:flex-row flex-col"> 
                <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="border-4 rounded-xl h-auto w-80 border-offwhite"
                >
                    <Slider {...settings} className="h-full w-full">
                        <img src={imagem1} alt="Imagem 1" className="h-full w-full object-cover rounded-lg" />
                        <img src={imagem2} alt="Imagem 1" className="h-full w-full object-cover rounded-lg" />
                        <img src={imagem3} alt="Imagem 1" className="h-full w-full object-cover rounded-lg" />
                    </Slider>
                </motion.div>
                <div className="h-auto flex justify-center md:w-[55%] w-full md:gap-16 gap-6 items-center">
                    
                    <div ref={ref} className="text-white text-justify text-lg mt-4 font-[Poppins] flex md:flex-row flex-col gap-4">
                        <div className="border-l-4 border-b-4 border-magic-500 px-8 pb-8 rounded-xl text-center flex justify-between flex-col">
                            <span className="text-5xl"><ion-icon name="analytics-outline"></ion-icon></span>
                            <motion.p
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={typingEffect}
                                custom={0}
                                className="md:text-start text-center"
                            >
                                {text1.split("").map((char, index) => (
                                    <motion.span key={index} variants={characterVariant}>
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.p>
                        </div>
                        <div className="border-l-4 border-b-4 border-magic-500 px-8 pb-8 rounded-xl text-center flex justify-between flex-col">
                            <span className="text-5xl"><ion-icon name="school-outline"></ion-icon></span>
                            <motion.p
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={typingEffect}
                                custom={text1.length + 1}
                                className="md:text-start text-center"
                            >
                                {text2.split("").map((char, index) => (
                                    <motion.span key={index} variants={characterVariant}>
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;
