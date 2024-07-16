import React from 'react';
import ReadMoreButton from '../buttons/ReadMoreButton';

function Card({ icon, title, description }) {
  return (
    <div className="bg-white border-2 border-magic-200 group/card min-h-36 relative justify-center flex w-72 flex-col items-center overflow-hidden rounded-xl p-4 text-center transition-all duration-500 hover:shadow-lg hover:shadow-zinc-400 cursor-pointer">
      <div className="text-magic-300 transition-all text-5xl">
        <ion-icon name={icon}></ion-icon>
      </div>

      <div className="transition-all delay-200 duration-500 group-hover/card:pb-48">
        <h1 className="font-[Poppins] text-lg font-semibold text-gray-800">{title}</h1>
      </div>

      <div className="absolute flex items-end h-full w-full justify-end text-2xl text-magic-300 group-hover/card:opacity-0 transition-all duration-500">
        <ion-icon name="add-circle"></ion-icon>
      </div>

      <div className="absolute -bottom-[135%] flex w-full items-center justify-evenly gap-2 transition-all delay-200 duration-500 group-hover/card:bottom-3 flex-col">
        <p className="font-[Poppins] text-base px-2">{description}</p>
        <button><ReadMoreButton /></button>
      </div>
    </div>
  );
}

export default Card;