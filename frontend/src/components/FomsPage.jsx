import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import myImage from '../images/NexusMago.png';
import InputMask from 'react-input-mask';
import axios from 'axios';
import { useState } from 'react';
import AlertConfirmation from './Alerts/AlertConfirmation';
import FundoForm from '../images/FundoForm.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AlertSubmitting from './Alerts/AlertSubmitting';

// Validando dados utilizando Yup
const schema = yup.object().shape({
    name: yup.string().required('Nome é necessário').min(3, 'Nome precisa ter pelo menos 3 caracteres'),
    email: yup.string().required('Email é necessário').email('Formato de email inválido'),
    telefone: yup.string().required('Telefone é necessário').matches(/^\d{2} \d{5}\.\d{4}$/, 'Telefone deve ter exatamente 11 dígitos no formato XX XXXXX.XXXX'),
    nome_empresa: yup.string().required('Nome da Empresa é necessário'),
    departamento: yup.string().required('Selecionar é necessário'),
    segmento_empresa: yup.string().required('Selecionar é necessário'),
    solucao_interesse: yup.string().required('Selecionar é necessário'),
    mensagem: yup.string().required('Mensagem é necessária'),
});


const FormsPage = () => {

    const [alertConfirmation, setAlertConfirmation] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0.2,     // Ativa quando 10% da seção está visível
        triggerOnce: true,
    });
    // Utilizando React Hook Form
    const { register, handleSubmit, formState: { errors },reset } = useForm({
        resolver: yupResolver(schema)
    });


    // Função para enviar dados do formulário controle do backend com axios
    const onSubmit = async (data) => {
        try {
            setIsSubmitting(true);
            await axios.post('http://localhost:3333/formlist', {
                department: data.departamento,
                email: data.email,
                message: data.mensagem,
                name: data.name,
                company_name: data.nome_empresa,
                segment: data.segmento_empresa,
                solution: data.solucao_interesse,
                phone: data.telefone
            });
            setAlertConfirmation(true);
            setTimeout(() => {
                setAlertConfirmation(false);
            }, 3000);
            reset();
        } catch (error) {
            console.error('Error:', error);
        }finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id = "Forms" className="bg-cover bg-center p-2 w-full border-t-4 overflow-x-hidden"style={{ background: `url(${FundoForm})` }}>
            {alertConfirmation && <AlertConfirmation>Formulário enviado com sucesso!</AlertConfirmation>}
            {isSubmitting && <AlertSubmitting>Aguarde... Enviando informações</AlertSubmitting>}
            <motion.div
                    initial={{ opacity: 0, y: -80 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -80 }}
                    transition={{ duration: 1.2 }}
            >
                <div className="flex justify-center items-center w-full my-7">
                    <h1
                        className="text-4xl text-magic-200 font-bold w-full rounded-lg p-4 text-center bg-transparent flex md:flex-row flex-col gap-2 justify-center items-center" 
                    >
                        <span className="md:border-b-4 border-b-0 border-magic-200" >Entre em</span> <span className="bg-magic-200 text-white px-3 pb-1 rounded-xl md-w-auto w-64"style={{ boxShadow: 'inset 0 4px 6px rgba(0, 0, 0, 0.4)' }}>contato</span>
                    </h1>
                </div>
            </motion.div>
            

            <div className="flex justify-center items-center">
                <div className="flex justify-between md:w-[85%] w-full md:flex-row flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
                    transition={{ duration: 1.2 }}
                >
                    <div ref={ref} className=" NexusAnimate bg-cover bg-center flex items-center justify-center p-0 m-0 overflow-hidden mb-2 md:mb-0 md:w-[500px] md:h-[500px] w-80 h-80" style={{ backgroundImage: `url(${myImage})` }} ></div>
                </motion.div>

                    <div className="md:hidden flex justify-center flex-col w-full border-t-2 border-magic-100 pt-3">
                        <p className="font-bold text-magic-100 text-center">{isFormVisible ? "Fechar Formulário" : "Abrir Formulário"}</p>
                        <button
                            className="text-magic-100 text-5xl hover:scale-150 transition-all duration-500 ease-in-out"
                            onClick={() => setIsFormVisible(!isFormVisible)}
                        >
                            {isFormVisible ? <ion-icon name="caret-up-outline"></ion-icon> : <ion-icon name="caret-down-outline"></ion-icon>}
                        </button>
                    </div>
                    <div className={`p-2 md:mr-24 md:w-[50%] w-full rounded-lg transition-all duration-500 ${isFormVisible ? 'block' : 'hidden md:block'}`}>
                    <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 1 }}
                    >
                        <form  onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-2">
                                <label htmlFor="name" className="block text-magic-100 text-lg mb-2">
                                    Nome
                                </label>
                                <input
                                    id="name"
                                    {...register('name')}
                                    placeholder="Escreva seu nome"
                                    className="w-full px-16 py-3 border bg-magic-100 text-white rounded-lg placeholder-offwhite shadow-md transition-opacity duration-300 ease-in-out hover:opacity-75 focus:opacity-75 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-indent-[1rem]"
                                    style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)', paddingLeft: '1.5rem' }}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 mb-2 md:items-end">
                                <div className="md:flex-1">
                                    <label htmlFor="email" className="block text-magic-100 text-lg mb-2">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        {...register('email')}
                                        placeholder="melhor@email.com"
                                        className="w-full px-16 py-3 border bg-magic-100 text-white rounded-lg placeholder-offwhite shadow-md transition-opacity duration-300 ease-in-out hover:opacity-75 focus:opacity-75 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-indent-[1rem]"
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
                                        mask="99 99999.9999"
                                        {...register('telefone')}
                                        placeholder="XX XXXXX.XXXX"
                                        className="w-full px-16 py-3 border bg-magic-100 text-white rounded-lg placeholder-offwhite shadow-md transition-opacity duration-300 ease-in-out hover:opacity-75 focus:opacity-75 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-indent-[1rem]"
                                        style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)', paddingLeft: '1.5rem' }}
                                    />
                                    {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>}
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 mb-2 md:items-end">
                                <div className="md:flex-1">
                                    <label htmlFor="nome_empresa" className="block text-magic-100 text-lg mb-2">
                                        Nome da Empresa
                                    </label>
                                    <input
                                        id="nome_empresa"
                                        {...register('nome_empresa')}
                                        placeholder="Nome da empresa"
                                        className="w-full px-16 py-3 border bg-magic-100 text-white rounded-lg placeholder-offwhite shadow-md transition-opacity duration-300 ease-in-out hover:opacity-75 focus:opacity-75 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-indent-[1rem]"
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
                                        <option value="Recursos Humanos">Recursos Humanos</option>
                                        <option value="Financeiro">Financeiro</option>
                                        <option value="Vendas">Vendas</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Tecnologia da Informação">Tecnologia da Informação</option>
                                        <option value="Produção">Produção</option>
                                        <option value="Compras">Compras</option>
                                        <option value="Atendimento ao Cliente">Atendimento ao Cliente</option>
                                        <option value="Logística">Logística</option>
                                        <option value="Jurídico">Jurídico</option>
                                    </select>
                                    {errors.departamento && <p className="text-red-500 text-sm mt-1">{errors.departamento.message}</p>}
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 mb-2 md:items-end">
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
                                        <option value="Tecnologia da Informação">Tecnologia da Informação</option>
                                        <option value="Saúde">Saúde</option>
                                        <option value="Educação">Educação</option>
                                        <option value="Varejo">Varejo</option>
                                        <option value="Indústria">Indústria</option>
                                        <option value="Serviços Financeiros">Serviços Financeiros</option>
                                        <option value="Alimentação">Alimentação</option>
                                        <option value="Construção Civil">Construção Civil</option>
                                        <option value="Transporte e Logística">Transporte e Logística</option>
                                        <option value="Marketing e Publicidade">Marketing e Publicidade</option>
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
                                        <option value="Desenvolvimento de Software">Desenvolvimento de Software</option>
                                        <option value="Templates">Templates</option>
                                        <option value="Soluções Próprias">Soluções Próprias</option>
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
                                    className="w-full h-24 px-16 py-3 border bg-magic-100 text-white rounded-lg placeholder-offwhite shadow-md transition-opacity duration-300 ease-in-out hover:opacity-75 focus:opacity-75 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-indent-[1rem]"
                                    style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)', paddingLeft: '1.5rem' }}
                                />
                                {errors.mensagem && <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>}
                            </div>
                            <div className="w-full flex justify-center">
                                <button
                                    type="submit"
                                    className="px-10 text-center z-30 py-2 bg-magic-300 rounded-lg text-white relative font-semibold font-[Poppins] after:-z-20 after:absolute after:h-1 after:w-1 after:bg-magic-400 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-500 after:transition-all after:duration-500 transition-all duration-500 text-xl"
                                    style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                        </motion.div>
                    </div>

                </div>
                
            </div>
       </section>
    );
};

export default FormsPage;