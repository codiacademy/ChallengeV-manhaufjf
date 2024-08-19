import React, { useState } from 'react';
import axios from 'axios';
import './Alerts/AlertSucess'
import AlertSucess from './Alerts/AlertSucess';

const FormListTable = () => {
    const [formList, setFormList] = useState([]);
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');
    const [alertSuccess, setAlertSuccess] = useState(false);

    // Função para buscar os dados da API
    const fetchFormList = async () => {
        try {
            const response = await axios.get('http://localhost:3333/formlist');
            setFormList(response.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    // Função para deletar um item pelo ID
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3333/formlist/${id}`);
            // Remover o item da lista local após deletar do banco de dados
            setFormList(formList.filter(item => item.id !== id));
        } catch (error) {
            console.error('Erro ao deletar o item:', error);
        }
    };

    // Função para verificar a senha
    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (password === process.env.REACT_APP_TABLE_PASSWORD) {
            setIsAuthenticated(true);
            fetchFormList();
        } else {
            setError('Senha incorreta. Tente novamente.');
        }
    };

    // Função para copiar texto e exibir o alerta de sucesso
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setAlertSuccess(true);
            setTimeout(() => {
                setAlertSuccess(false);
            }, 2000);
        }, (err) => {
            console.error("Erro ao copiar texto: ", err);
        });
    };

    if (!isAuthenticated) {
        return (
            <div className="bg-gradient-to-br from-gray-900 to-purple-950 w-full min-h-screen flex justify-center items-center">
                <div className="p-4 bg-gradient-to-tl from-gray-900 to-purple-950 w-96 border-2 rounded-3xl flex items-center flex-col border-gray-600 shadow-md shadow-gray-700">
                    <h2 className="text-2xl mb-4 font-semibold text-gray-400 text-center">Digite a senha para acessar o administrador</h2>
                    <form onSubmit={handlePasswordSubmit} className="flex justify-center flex-col">
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                        <input
                            type="password"
                            className="border border-gray-600 px-4 py-2 mb-4 bg-transparent rounded text-gray-200"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="text-zinc-700 hover:text-gray-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-gray-200 duration-700">
                            Acessar
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-gray-900 to-purple-950 w-full min-h-screen p-10 flex flex-col items-center">
            {alertSuccess && (
                <AlertSucess>Copiado para a área de transferência</AlertSucess>
            )}
            <h2 className="text-3xl mb-4 text-gray-400">Contatos não lidos</h2>
            <div className="w-full">
                {formList.length === 0 ? (
                    <div className="border border-gray-400 text-center py-4 text-gray-400">
                        Nenhum contato recente
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {formList.map((item) => (
                            <div key={item.id} className="border border-gray-400 rounded-2xl p-4 bg-transparent text-gray-300 flex flex-col">
                                <strong className="text-white text-2xl pb-2 text-center border-b-2">{item.name}</strong> 
                                <p><strong className="text-white">Email:</strong> <span className="cursor-pointer hover:text-blue-400" onClick={() => handleCopy(item.email)}>{item.email}</span></p>
                                <p><strong className="text-white">Telefone:</strong> <span className="cursor-pointer hover:text-blue-400" onClick={() => handleCopy(item.phone)}>{item.phone}</span></p>
                                <p><strong className="text-white">Empresa:</strong> {item.company_name}</p>
                                <p><strong className="text-white">Departamento:</strong> {item.department}</p>
                                <p><strong className="text-white">Segmento:</strong> {item.segment}</p>
                                <p><strong className="text-white">Solução:</strong> {item.solution}</p>
                                <p><strong className="text-white">Mensagem:</strong> {item.message}</p>
                                <button
                                    className="bg-red-950 hover:bg-red-700 duration-300 text-white px-4 py-2 rounded-xl mt-4"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Contatado
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
    
    
};

export default FormListTable;
