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
        <div>
            <div><img src = {myImage} alt="Imagem do Nexus"/></div>
            <div>
                <div><h1>Entre em contato</h1></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="name">Name </label>
                        <input id="name" {...register('name')} />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>

                    <div>
                        <div>
                            <label htmlFor="email">Email </label>
                            <input id="email" type="email" {...register('email')} />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="telefone">Telefone </label>
                            <input id="telefone" type="telefone" {...register('telefone')} />
                            {errors.telefone && <p>{errors.telefone.message}</p>}
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="nome_empresa">Nome da Empresa </label>
                            <input id="nome_empresa" {...register('nome_empresa')} />
                            {errors.nome_empresa && <p>{errors.nome_empresa.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="departamento">Departamento </label>
                            <select id="departamento" {...register('departamento')}>
                                <option value="">--Please choose an option--</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                            {errors.departamento && <p>{errors.departamento.message}</p>}
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="segmento_empresa">Segmento da Empresa </label>
                            <select id="segmento_empresa" {...register('segmento_empresa')}>
                                <option value="">--Please choose an option--</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                            {errors.segmento_empresa && <p>{errors.segmento_empresa.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="solucao_interesse">Solução que tem interesse </label>
                            <select id="solucao_interesse" {...register('solucao_interesse')}>
                                <option value="">--Please choose an option--</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                            {errors.solucao_interesse && <p>{errors.solucao_interesse.message}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="mensagem">Mensagem </label>
                        <input id="Mmnsagem" {...register('Mensagem')} />
                        {errors.mensagem && <p>{errors.mensagem.message}</p>}
                    </div>


                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default FormsPage;

