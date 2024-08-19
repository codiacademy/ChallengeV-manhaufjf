import React from "react";

function ReadMoreButton() {
  return (
    <div className="group/button relative flex justify-center items-center text-white text-sm font-[Poppins] font-semibold">
      <div className="shadow-md flex items-center text-base justify-center group-hover/button:gap-2 bg-magic-200 active:bg-magic-400 py-[10px] px-[14px] rounded-full cursor-pointer duration-300">
        <ion-icon name="arrow-redo"></ion-icon>
        <span className="text-[0px] group-hover/button:text-base duration-300">Saiba Mais</span>
      </div>
    </div>
  );
} 

export default ReadMoreButton;