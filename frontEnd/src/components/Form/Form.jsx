import { useState } from 'react';
import { Select } from "../Select/Select"
import { SelectEscola } from "../Select/SelectEscola"
import axios from 'axios'; // Importe o Axios

export const Form = () => {

      // Crie um estado para cada campo do formulário
    const [escola, setEscola] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [bairro, setBairro] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [cep, setCep] = useState('');
    const [tipoEscola, setTipoEscola] = useState('');
    const [email, setEmail] = useState('');

        // Função para lidar com o envio do formulário
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Dados do formulário
        const formData = {
            escola,
            cnpj,
            bairro,
            logradouro,
            cep,
            tipoEscola,
            email
        };

                // Enviar requisição POST para o servidor
        try {
            const response = await axios.post('http://localhost:8080/instituicao', formData);
            console.log(response.data);
            event.target.reset();
            // Recarregar a página
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <>
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 p-6">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Bem-vindo à página de cadastro do Projeto Escola de Campeões!</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
          Por favor, seja cuidadoso ao inserir seus dados, pois eles são essenciais para garantir uma comunicação eficaz e um cadastro seguro.
          </p>
          

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Nome da Instituição Escolar
              </label>
              <div className="col-span-full">
                <div className="flex  rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Instituição:</span>
                  <input
                    type="text"
                    name="escola"
                    id="escola"
                    autoComplete="username"
                    value={escola}
                    onChange={e => setEscola(e.target.value)}
                    className="block w-3/4 flex-1  border-0 bg-transparent py-1.5 pl-1 ml-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
                
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              CNPJ Da Instituição
              </label>
              <div className="col-span-full">
                <div className="flex  rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">CNPJ:</span>
                  <input
                    type="text"
                    name="cnpj"
                    id="cnpj"
                    autoComplete="username"
                    value={cnpj}
                    onChange={e => setCnpj(e.target.value)}
                    className="block w-3/4 flex-1  border-0 bg-transparent py-1.5 pl-1 ml-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
                
              </div>
            </div>

          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Endereço</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Informe o endereço onde esta localizada a Instituição de Ensino</p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
               Logradouro
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="logradouro"
                  id="logradouro"
                  autoComplete="street-address"
                  value={logradouro}
                  onChange={e => setLogradouro(e.target.value)}
                  className="block w-2/3 rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Bairro
              </label>
              <div className="mt-2">
                <Select value={bairro} onChange={e => setBairro(e.target.value)}/>
              </div>
            </div>


            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                CEP
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="cep"
                  id="cep"
                  autoComplete="cep"
                  value={cep}
                  onChange={e => setCep(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Tipo de Instituição
              </label>
              <div className="mt-2">
                <SelectEscola value={tipoEscola} onChange={e => setTipoEscola(e.target.value)} />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Notificação</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Atenção ao Email pois a escola será notificada após o periodo de inscrição e levantamento sobre as próximas etapas do projeto.</p>
          <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email da Instituição Para Contato.
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="block w-2/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          <div className="mt-10 space-y-10">
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-6  p-2">
        <button type="reset" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>

        </>
    )
}

