import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import myImage from '../images/NexusMago.png'

// Define validation schema using yup
const schema = yup.object().shape({
    name: yup.string().required('Nome is required').min(3, 'Name must be at least 3 characters long'),
    email: yup.string().required('Email is required').email('Invalid email format'),
    telefone: yup.number().required('Telefone is required').positive().integer(),
    nome_empresa: yup.string().required('Nome da Empresa is required'),
    departamento: yup.string().required('Selection is required'),
    segmento_empresa: yup.string().required('Selection is required'),
    solucao_interesse: yup.string().required('Selection is required'),
    mensagem: yup.string().required('Mensassem é requerida'),
});

// Define the form component
const FormsPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    };



    return (
        <div className='bg-radial-gradient min-h-screen p-4'>
            <div className="flex justify-center items-start h-full p-4">
                <h1
                    style={{ boxShadow: 'inset 0 4px 6px rgba(0, 0, 0, 0.4)' }}
                    className="text-6xl text-white bg-magic-200 mb-8 w-auto h-auto rounded-lg p-6 text-center"
                >
                    Entre em contato
                </h1>
            </div>
            <div className="flex justify-center items-center h-screen p-4 space-x-12">
                {/* Image Section */}
                <div className="flex-none w-1/2 p-0 m-0 overflow-hidden">
                    <img
                        src={myImage}
                        alt="Imagem do Nexus"
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Form Section */}
                <div className="w-1/2 p-12  rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name Field */}
                        <div className="mb-8">
                            <label htmlFor="name" className="block text-magic-100 text-xl mb-3">
                                Nome
                            </label>
                            <input
                                id="name"
                                {...register('name')}
                                placeholder="Escreva seu nome"
                                className="w-full px-5 py-4 border bg-magic-100 text-white rounded-lg placeholder-white shadow-md transition-opacity duration-300 ease-in-out hover:opacity-75 focus:opacity-75 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)' }}
                            />
                            {errors.name && <p className="text-red-500 text-base mt-2">{errors.name.message}</p>}
                        </div>

                        {/* Other Fields */}
                        <div className="flex flex-wrap gap-8 mb-8">
                            <div className="flex-1">
                                <label htmlFor="email" className="block text-magic-100 text-xl mb-3">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    {...register('email')}
                                    placeholder="melhor@email.com"
                                    className="w-full px-5 py-4 border bg-magic-100 text-white rounded-lg placeholder-white shadow-md transition-opacity duration-300 ease-in-out hover:opacity-75 focus:opacity-75 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                />
                                {errors.email && <p className="text-red-500 text-base mt-2">{errors.email.message}</p>}
                            </div>
                            <div className="flex-1">
                                <label htmlFor="telefone" className="block text-magic-100 text-xl mb-3">
                                    Telefone
                                </label>
                                <input
                                    id="telefone"
                                    type="tel"
                                    {...register('telefone')}
                                    placeholder="+32 11 11111.1111"
                                    className="w-full px-5 py-4 border bg-magic-100 text-white rounded-lg placeholder-white shadow-md transition-opacity duration-300 ease-in-out hover:opacity-75 focus:opacity-75 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                />
                                {errors.telefone && <p className="text-red-500 text-base mt-2">{errors.telefone.message}</p>}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-8 mb-8">
                            <div className="flex-1">
                                <label htmlFor="nome_empresa" className="block text-magic-100 text-xl mb-3">
                                    Nome da Empresa
                                </label>
                                <input
                                    id="nome_empresa"
                                    {...register('nome_empresa')}
                                    placeholder="Nome da empresa"
                                    className="w-full px-5 py-4 border bg-magic-100 text-white rounded-lg placeholder-white shadow-md transition-opacity duration-300 ease-in-out hover:opacity-75 focus:opacity-75 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                />
                                {errors.nome_empresa && <p className="text-red-500 text-base mt-2">{errors.nome_empresa.message}</p>}
                            </div>
                            <div className="flex-1">
                                <label htmlFor="departamento" className="block text-magic-100 text-xl mb-3">
                                    Departamento
                                </label>
                                <select
                                    id="departamento"
                                    {...register('departamento')}
                                    className="w-full px-5 py-4 border bg-magic-100 rounded-lg shadow-md transition-opacity duration-300 ease-in-out hover:opacity-75 focus:opacity-75 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                >
                                    <option value="">selecione ...</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                                {errors.departamento && <p className="text-red-500 text-base mt-2">{errors.departamento.message}</p>}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-8 mb-8">
                            <div className="flex-1">
                                <label htmlFor="segmento_empresa" className="block text-magic-100 text-xl mb-3">
                                    Segmento da Empresa
                                </label>
                                <select
                                    id="segmento_empresa"
                                    {...register('segmento_empresa')}
                                    className="w-full px-5 py-4 border bg-magic-100 rounded-lg shadow-md transition-opacity duration-300 ease-in-out hover:opacity-75 focus:opacity-75 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                >
                                    <option value="">selecione ...</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                                {errors.segmento_empresa && <p className="text-red-500 text-base mt-2">{errors.segmento_empresa.message}</p>}
                            </div>
                            <div className="flex-1">
                                <label htmlFor="solucao_interesse" className="block text-magic-100 text-xl mb-3">
                                    Solução que tem interesse
                                </label>
                                <select
                                    id="solucao_interesse"
                                    {...register('solucao_interesse')}
                                    className="w-full px-5 py-4 border bg-magic-100 rounded-lg shadow-md transition-opacity duration-300 ease-in-out hover:opacity-75 focus:opacity-75 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                >
                                    <option value="">selecione ...</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                                {errors.solucao_interesse && <p className="text-red-500 text-base mt-2">{errors.solucao_interesse.message}</p>}
                            </div>
                        </div>

                        <div className="mb-8">
                            <label htmlFor="mensagem" className="block text-magic-100 text-xl mb-3">
                                Mensagem
                            </label>
                            <textarea
                                id="mensagem"
                                {...register('mensagem')}
                                placeholder="Sua mensagem"
                                className="w-full px-5 py-4 border bg-magic-100 text-white rounded-lg placeholder-white shadow-md transition-opacity duration-300 ease-in-out hover:opacity-75 focus:opacity-75 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                rows="4"
                                style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)' }}
                            />
                            {errors.mensagem && <p className="text-red-500 text-base mt-2">{errors.mensagem.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="px-4 z-30 py-2 bg-magic-300 rounded-lg text-white relative font-semibold font-[Poppins] after:-z-20 after:absolute after:h-1 after:w-1 after:bg-magic-400 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-500 after:transition-all after:duration-500 transition-all duration-500 text-xl"
                            style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)' }}
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormsPage;

