import React from "react";
import Card from "./cards/Card";
import FundoService from '../images/FundoService.png';
import { services } from '../static-data';

function ServicesPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="absolute bg-cover bg-center top-0 left-0 w-full pointer-events-none min-h-screen md:h-screen h-[950px] z-[0]" style={{ backgroundImage: `url(${FundoService})` }}></div>

            <div className="z-20">
                <div className="w-full h-auto">
                    <h1 className="font-[Poppins] md:text-5xl md:text-start text-center text-2xl md:pt-0 pt-7 font-semibold">
                        Soluções oferecidas pelo <span className="text-magic-300 font-bold">Magic</span>
                    </h1>
                </div>

                <div className="w-auto md:h-96 h-[800px] justify-center items-center flex md:flex-row flex-col gap-16 z-10">
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
    );

}

export default ServicesPage;