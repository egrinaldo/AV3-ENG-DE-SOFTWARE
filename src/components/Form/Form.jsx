import { useState } from "react";
import axios from "axios";
import { PatternFormat } from "react-number-format";
import { toast } from "react-toastify";
import { ValidaCnpj } from "../Functions/ValidarCnpj";
import { ValidaCep } from '../Functions/ValidaCep';
import { ValidaUf } from '../Functions/ValidaUf';
import { ValidaEmail } from '../Functions/ValidaEmail';
import { ValidaCpf } from "../Functions/ValidaCpf";
import {ValidaBairro} from "../Functions/ValidaBairro"
import {ValidaEscola} from "../Functions/ValidaEscola"
import {ValidaLogradouro} from "../Functions/ValidaLogradouro"
import {ValidaResponsavel} from "../Functions/ValidaResponsavel"
import {ValidaTipoEscola} from "../Functions/ValidaTipoEscola"

export const Form = () => {
  // Estes campos irão criar um estado para cada campo do formulário
  const [escola, setEscola] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [bairro, setBairro] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cep, setCep] = useState("");
  const [tipoEscola, setTipoEscola] = useState("");
  const [email, setEmail] = useState("");
  const [uf, setUf] = useState("");
  const [cpf, setCpf] = useState("");
  const [responsavel, setResponsavel] = useState("");


  // Função para limpar todos os dados do formulario
  const limparFormulario = () => {
    setEscola("");
    setCnpj("");
    setBairro("");
    setLogradouro("");
    setCep("");
    setTipoEscola("");
    setEmail("");
    setUf("");
    setResponsavel(""),
    setCpf("");
  };

  const validarCampos = () => {
    if (!ValidaCnpj(cnpj) || !ValidaBairro(bairro) || !ValidaCep(cep) || !ValidaCpf(cpf) || !ValidaEmail(email) || 
    !ValidaEscola(escola) || !ValidaLogradouro(logradouro) || !ValidaResponsavel(responsavel) || !ValidaTipoEscola(tipoEscola)
    || !ValidaUf(uf)) {
      toast.error("CNPJ inválido.");
      return false;
    }
    // Adicione mais validações conforme necessário
    return true;
  };
  // Esta variavel irá lidar com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validarCampos()) {
      return;
    }
    // Esta variavel irá trazer os dados
    const formData = {
      escola,
      cnpj,
      bairro,
      logradouro,
      cep,
      tipoEscola,
      email,
      uf,
      responsavel,
      cpf,
    };



    // Este Campo irá fazer o envio dos dados adquiridos POST para o servidor db
    try {
      const response = await axios.post(
        "http://localhost:8080/instituicao",
        formData
      );
      console.log(response.data);

      toast.success("Dados enviados com sucesso!", {
        position: "top-center",
        autoClose: 5000});
      //Este comando irá recarregar a página automaticamente após o sucesso do preenchimento
      setTimeout(() => {
        event.target.reset();
        window.location.reload();
      },5000)


      // Em caso de erro teremos este campo
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao enviar os dados.", {
      position: "top-center",
      autoClose: 8000});
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12 p-6">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Bem-vindo à página de cadastro do Projeto Escola de Campeões!
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Por favor, seja cuidadoso ao inserir seus dados, pois eles são
              essenciais para garantir uma comunicação eficaz e um cadastro
              seguro.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nome da Instituição Escolar
                </label>
                <div className="col-span-full">
                  <div className="flex  rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                      Instituição:
                    </span>
                    <input
                      type="text"
                      name="escola"
                      id="escola"
                      data-testId="escola"
                      autoComplete="username"
                      value={escola}
                      onChange={(e) => setEscola(e.target.value)}
                      className="block w-3/4 flex-1  border-0 bg-transparent py-1.5 pl-1 ml-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  CNPJ Da Instituição
                </label>
                <div className="col-span-full">
                  <div className="flex  rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                      CNPJ:
                    </span>
                    {/* Função PatternFormat para adicionar a formatação desejada do campo cnpj neste caso */}
                    <PatternFormat
                      format="##.###.###/####-##"
                      mask={"_"}
                      displayType="input"
                      type="text"
                      name="cnpj"
                      id="cnpj"
                      data-testId="cnpj"
                      autoComplete="username"
                      value={cnpj}
                      onChange={(e) => setCnpj(e.target.value)}
                    //   Neste campo onBlur ele irá fazer que ao tirar o mouse do campo imncompleto ele trara um erro na tela através do toastify
                      onBlur={() => {
                        if (ValidaCnpj(cnpj) === false) {    
                          toast.error('O número de caracteres do CNPJ é menor que o padrão.'); }
                      }}
                      className="block w-3/4 flex-1  border-0 bg-transparent py-1.5 pl-1 ml-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                    {/* <input
                      type="text"
                      name="cnpj"
                      id="cnpj"
                      autoComplete="username"
                      value={cnpj}
                      onChange={(e) => setCnpj(e.target.value)}
                      className="block w-3/4 flex-1  border-0 bg-transparent py-1.5 pl-1 ml-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    /> */}
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nome Completo do Responsável pela Instituição Escolar
                </label>
                <div className="col-span-full">
                  <div className="flex  rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                      Responsável:
                    </span>
                    <input
                      type="text"
                      name="escola"
                      id="escola"
                      data-testId="escola"
                      autoComplete="username"
                      value={responsavel}
                      onChange={(e) => setResponsavel(e.target.value)}
                      className="block w-3/4 flex-1  border-0 bg-transparent py-1.5 pl-1 ml-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  CPF do Responsável
                </label>
                <div className="col-span-full">
                  <div className="flex  rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                      CPF:
                    </span>
                    {/* Função PatternFormat para adicionar a formatação desejada do campo cnpj neste caso */}
                    <PatternFormat
                      format="###.###.###-##"
                      mask={"_"}
                      displayType="input"
                      type="text"
                      name="cpf"
                      id="cpf"
                      data-testId="cpf"
                      autoComplete="username"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                    //   Neste campo onBlur ele irá fazer que ao tirar o mouse do campo imncompleto ele trara um erro na tela através do toastify
                      onBlur={() => {
                        if (ValidaCpf(cpf) === false) {    
                          toast.error('O número de caracteres do CPF é menor que o padrão.'); }
                      }}
                      className="block w-3/4 flex-1  border-0 bg-transparent py-1.5 pl-1 ml-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                    {/* <input
                      type="text"
                      name="cnpj"
                      id="cnpj"
                      autoComplete="username"
                      value={cnpj}
                      onChange={(e) => setCnpj(e.target.value)}
                      className="block w-3/4 flex-1  border-0 bg-transparent py-1.5 pl-1 ml-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    /> */}
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Endereço
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Informe o endereço onde esta localizada a Instituição de Ensino
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Logradouro
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="logradouro"
                    id="logradouro"
                    data-testId="logradouro"
                    autoComplete="street-address"
                    value={logradouro}
                    onChange={(e) => setLogradouro(e.target.value)}
                    className="block w-2/3 rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Bairro
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="bairro"
                    id="bairro"
                    data-testId="bairro"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  CEP
                </label>
                <div className="mt-2">
                  <PatternFormat
                    format="#####-###"
                    mask={"_"}
                    displayType="input"
                    name="cep"
                    id="cep"
                    data-testId="cep"
                    autoComplete="cep"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    onBlur={() => {
                        if (ValidaCep(cep) === false) {
                          toast.error('O número de caracteres do CEP é menor que o padrão.');
                        }
                      }}
                    className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {/* <input
                    type="text"
                    name="cep"
                    id="cep"
                    autoComplete="cep"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  /> */}
                </div>
              </div>
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Estado
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="uf"
                    id="uf"
                    data-testId="uf"
                    value={uf}
                    onChange={(e) => setUf(e.target.value)}
                    onBlur={() => {
                      if (ValidaUf(uf) === false) {
                        toast.error('Este Projeto é válido somente no municipio de Salvador Ba.');
                      }
                    }}
                    className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 sm:col-start-0">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Tipo da Instituição Pública ou Privada
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="tipoEscola"
                    id="tipoEscola"
                    data-testId="tipoEscola"
                    autoComplete="cep"
                    value={tipoEscola}
                    onChange={(e) => setTipoEscola(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Notificação
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Atenção ao Email pois a escola será notificada após o periodo de
              inscrição e levantamento sobre as próximas etapas do projeto.
            </p>
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email da Instituição Para Contato.
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  data-testId="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => {
                    if (ValidaEmail(email) === false) {
                      toast.error('E-mail inválido. Verifique o novamente.');
                    }
                  }}
                  className="block w-2/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-10 space-y-10"></div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6  p-2">
          <button
            type="reset"
            data-testId="limpar"
            onClick={() => {
              limparFormulario();
              toast.info('Limpo Com Sucesso');
            }}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Limpar
          </button>
          <button
            type="submit"
            data-testId="salvar"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Salvar
          </button>
        </div>
      </form>
    </>
  );
};
