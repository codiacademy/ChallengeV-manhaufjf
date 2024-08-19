import React from 'react';


function AlertSubmitting() {
    return (
        <div className="fixed top-0 left-0 h-screen w-full backdrop-blur-sm z-[10000] flex justify-center items-center">
            <div
                class="grow-animation w-80 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden rounded-xl flex flex-col items-center justify-center"
                >
                <div className="Kick text-6xl text-center text-magic-200">
                    <ion-icon name="cloud-outline"></ion-icon>
                </div>
                <h1 class="font-bold text-xl">Enviando seus dados</h1>
                <p class="text-sm text-zinc-500 leading-6">
                    Aguarde um momento
                </p>
            </div>
        </div>
    );
}

export default AlertSubmitting;