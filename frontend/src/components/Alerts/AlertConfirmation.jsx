import React from 'react';


function AlertConfirmation() {
    return (
        <div className="fixed top-0 left-0 h-screen w-full backdrop-blur-sm z-[10000] flex justify-center items-center">
            <div
                class="grow-animation w-80 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden rounded-xl border-r-2 border-b-4 border-magic-200"
                >
                <div class="w-24 h-24 bg-magic-200 rounded-full absolute -right-5 -top-7">
                    <p class="absolute bottom-6 left-7 text-white text-2xl">01</p>
                </div>
                <div className="text-6xl text-magic-200">
                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                </div>
                <h1 class="font-bold text-xl">Formulário enviado com Sucesso!</h1>
                <p class="text-sm text-zinc-500 leading-6">
                    Uma confirmação de contato foi enviada ao seu email e logo em seguida entraremos em contato com mais informações.
                </p>
            </div>
        </div>
    );
}

export default AlertConfirmation;