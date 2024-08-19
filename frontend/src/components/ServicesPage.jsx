import React from "react";
import Card from "./cards/Card";
import FundoService from '../images/FundoService.png';
import { services } from '../static-data-cards';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ServicesPage() {

    const { ref, inView } = useInView({
        threshold: 0.1,     // Ativa quando 10% da seção está visível
    });

    return (
        <section id="Services" className="bg-center bg-cover  overflow-x-hidden" style={{ backgroundImage: `url(${FundoService})` }}>
            <div className="h-24 w-full bg-gradient-to-b from-magic-500 to-transparent"></div>
            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="z-20">
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="w-full h-auto">
                            <h1 className="font-[Poppins] md:text-5xl md:text-start text-center text-2xl md:pt-0 pt-7 font-semibold">
                                Soluções oferecidas pela <span className="text-magic-300 font-bold text-5xl ">Magic</span>
                            </h1>
                        </div>
                    </motion.div>

                    <div ref={ref} className="w-auto md:h-96 h-[800px] justify-center items-center flex md:flex-row flex-col gap-16 z-10">
                        {services.map((service, i) => (
                            <Card
                                key={i}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="h-20 w-full bg-gradient-to-t from-magic-200 to-transparent"></div>
        </section>
    );

}

export default ServicesPage;