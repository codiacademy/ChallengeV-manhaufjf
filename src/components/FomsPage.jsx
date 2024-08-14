import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import myImage from '../images/NexusMago.png';
import InputMask from 'react-input-mask';

const schema = yup.object().shape({
    name: yup.string().required('Nome é necessário').min(3, 'Nome precisa ter pelo menos 3 caracteres'),
    email: yup.string().required('Email é necessário').email('Formato de email inválido'),
    telefone: yup.string().required('Telefone é necessário').matches(/^\+\d{2} \d{2} \d{5}\.\d{4}$/, 'Telefone deve ter exatamente 13 dígitos no formato +XX XX XXXXX.XXXX'),
    nome_empresa: yup.string().required('Nome da Empresa é necessário'),
    departamento: yup.string().required('Selecionar é necessário'),
    segmento_empresa: yup.string().required('Selecionar é necessário'),
    solucao_interesse: yup.string().required('Selecionar é necessário'),
    mensagem: yup.string().required('Mensagem é necessária'),
});

const FormsPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="bg-gradient-to-br from-white to-offwhite p-2 w-full">
            <div className="flex justify-center items-center w-full">
                <h1
                    style={{ boxShadow: 'inset 0 4px 6px rgba(0, 0, 0, 0.4)' }}
                    className="text-4xl text-white w-96 bg-magic-200 rounded-lg p-4 text-center"
                >
                    Entre em contato
                </h1>
            </div>

            <div className="flex justify-center items-center">
                <div className="flex flex-col md:flex-row justify-between md:w-[85%] w-full items-center">
                    <div
                        className="bg-cover bg-center flex items-center justify-center p-0 m-0 overflow-hidden mb-2 md:mb-0 md:w-[500px] md:h-[500px] w-80 h-80"
                        style={{ backgroundImage: `url(${myImage})` }}
                    ></div>

                    <div className="p-2 md:mr-24 md:w-[50%] w-full rounded-lg">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-2">
                                <label htmlFor="name" className="block text-magic-100 text-lg mb-2">
                                    Nome
                                </label>
                                <input
                                    id="name"
                                    {...register('name')}
                                    placeholder="Escreva seu nome"
                                    className="w-full px-16 py-3 border bg-magic-100 text-white rounded-lg placeholder-white shadow-md transition-opacity duration-300 ease-in-out hover:opacity-75 focus:opacity-75 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-indent-[1rem]"
                                    style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)', paddingLeft: '1.5rem' }}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 mb-2">
                                <div className="md:flex-1">
                                    <label htmlFor="email" className="block text-magic-100 text-lg mb-2">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        {...register('email')}
                                        placeholder="melhor@email.com"
                                        className="w-full px-16 py-3 border bg-magic-100 text-white rounded-lg placeholder-white shadow-md transition-opacity duration-300 ease-in-out hover:opacity-75 focus:opacity-75 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-indent-[1rem]"
                                        style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)', paddingLeft: '1.5rem' }}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                </div>
                                <div className="md:flex-1">
                                    <label htmlFor="telefone" className="block text-magic-100 text-lg mb-2">
                                        Telefone
                                    </label>
                                    <InputMask
                                        id="telefone"
                                        mask="+99 99 99999.9999"
                                        {...register('telefone')}
                                        placeholder="+XX XX XXXXX.XXXX"
                                        className="w-full px-16 py-3 border bg-magic-100 text-white rounded-lg placeholder-white shadow-md transition-opacity duration-300 ease-in-out hover:opacity-75 focus:opacity-75 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-indent-[1rem]"
                                        style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)', paddingLeft: '1.5rem' }}
                                    />
                                    {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>}
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 mb-2">
                                <div className="md:flex-1">
                                    <label htmlFor="nome_empresa" className="block text-magic-100 text-lg mb-2">
                                        Nome da Empresa
                                    </label>
                                    <input
                                        id="nome_empresa"
                                        {...register('nome_empresa')}
                                        placeholder="Nome da empresa"
                                        className="w-full px-16 py-3 border bg-magic-100 text-white rounded-lg placeholder-white shadow-md transition-opacity duration-300 ease-in-out hover:opacity-75 focus:opacity-75 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-indent-[1rem]"
                                        style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)', paddingLeft: '1.5rem' }}
                                    />
                                    {errors.nome_empresa && <p className="text-red-500 text-sm mt-1">{errors.nome_empresa.message}</p>}
                                </div>
                                <div className="md:flex-1">
                                    <label htmlFor="departamento" className="block text-magic-100 text-lg mb-2">
                                        Departamento
                                    </label>
                                    <select
                                        id="departamento"
                                        {...register('departamento')}
                                        className="w-full px-16 py-3 border bg-magic-100 rounded-lg shadow-md transition-opacity duration-300 ease-in-out hover:opacity-75 focus:opacity-75 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-indent-[1rem]"
                                        style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)', paddingLeft: '1.5rem' }}
                                    >
                                        <option value="">selecione ...</option>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                    {errors.departamento && <p className="text-red-500 text-sm mt-1">{errors.departamento.message}</p>}
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 mb-2">
                                <div className="md:flex-1">
                                    <label htmlFor="segmento_empresa" className="block text-magic-100 text-lg mb-2">
                                        Segmento da Empresa
                                    </label>
                                    <select
                                        id="segmento_empresa"
                                        {...register('segmento_empresa')}
                                        className="w-full px-16 py-3 border bg-magic-100 rounded-lg shadow-md transition-opacity duration-300 ease-in-out hover:opacity-75 focus:opacity-75 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-indent-[1rem]"
                                        style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)', paddingLeft: '1.5rem' }}
                                    >
                                        <option value="">selecione ...</option>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                    {errors.segmento_empresa && <p className="text-red-500 text-sm mt-1">{errors.segmento_empresa.message}</p>}
                                </div>
                                <div className="md:flex-1">
                                    <label htmlFor="solucao_interesse" className="block text-magic-100 text-lg mb-2">
                                        Solução de interesse
                                    </label>
                                    <select
                                        id="solucao_interesse"
                                        {...register('solucao_interesse')}
                                        className="w-full px-16 py-3 border bg-magic-100 rounded-lg shadow-md transition-opacity duration-300 ease-in-out hover:opacity-75 focus:opacity-75 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-indent-[1rem]"
                                        style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)', paddingLeft: '1.5rem' }}
                                    >
                                        <option value="">selecione ...</option>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                    {errors.solucao_interesse && <p className="text-red-500 text-sm mt-1">{errors.solucao_interesse.message}</p>}
                                </div>
                            </div>

                            <div className="mb-2">
                                <label htmlFor="mensagem" className="block text-magic-100 text-lg mb-2">
                                    Mensagem
                                </label>
                                <textarea
                                    id="mensagem"
                                    {...register('mensagem')}
                                    placeholder="Escreva sua mensagem"
                                    className="w-full h-24 px-16 py-3 border bg-magic-100 text-white rounded-lg placeholder-white shadow-md transition-opacity duration-300 ease-in-out hover:opacity-75 focus:opacity-75 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-indent-[1rem]"
                                    style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)', paddingLeft: '1.5rem' }}
                                />
                                {errors.mensagem && <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>}
                            </div>
                            <div className="w-full flex justify-center">
                                <button
                                    type="submit"
                                    className="px-10 text-center z-30 py-2 bg-magic-300 rounded-lg text-white relative font-semibold font-[Poppins] after:-z-20 after:absolute after:h-1 after:w-1 after:bg-magic-400 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-500 after:transition-all after:duration-500 transition-all duration-500 text-xl"
                                    style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)', paddingLeft: '1.5rem' }}
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormsPage;