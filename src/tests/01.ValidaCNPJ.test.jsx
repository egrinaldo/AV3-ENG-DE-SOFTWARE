// import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
// import { Form } from "../components/Form/Form";
import { ValidaCnpj } from "../components/Functions/ValidarCnpj";



describe('Função que verifica se o CNPJ é válido ou inválido a partir da entrada', () => {
    it('Irá retornar false para um CNPJ inválido', () => {
        const cnpj = '069247890003';
        const retorno = ValidaCnpj(cnpj);
        expect(retorno).toEqual('O número de caracteres do CNPJ é menor que o padrão.');
    });
})

// function RenderForm(formulario) {
//     // Função que simula um HTML do formulario
//     if(formulario === true){
//         return '<form> <input> <button> <form>'
//     }
//     return '','Erro' ;
// }

// describe('VERIFICAÇÃO SE O FORMULARIO SERA RENDERIZADO E SEUS COMPONENTES', () => {

//     it('Será validado se o componente Form será renderizado', () => {
//         render(<Form />)
//     });

//     it('Será validado se o Input com name escola no Form será renderizado', () => {
//         const {getByTestId} = render(<Form />);
//         const inputElement = getByTestId('escola');
//         expect (inputElement).toBeInTheDocument();
//     });
//     it('Será validado se o Input com name cnpj no Form será renderizado', () => {
//         const {getByTestId} = render(<Form />);
//         const inputElement = getByTestId('cnpj');
//         expect (inputElement).toBeInTheDocument();
//     });
//     it('Será validado se o Input com name logradouro no Form será renderizado', () => {
//         const {getByTestId} = render(<Form />);
//         const inputElement = getByTestId('logradouro');
//         expect (inputElement).toBeInTheDocument();
//     });
//     it('Será validado se o Input com name bairro no Form será renderizado', () => {
//         const {getByTestId} = render(<Form />);
//         const inputElement = getByTestId('bairro');
//         expect (inputElement).toBeInTheDocument();
//     });
//     it('Será validado se o Input com name cep no Form será renderizado', () => {
//         const {getByTestId} = render(<Form />);
//         const inputElement = getByTestId('cep');
//         expect (inputElement).toBeInTheDocument();
//     });
//     it('Será validado se o Input com name Tipo da Escola no Form será renderizado', () => {
//         const {getByTestId} = render(<Form />);
//         const inputElement = getByTestId('tipoEscola');
//         expect (inputElement).toBeInTheDocument();
//     });
//     it('Será validado se o Input com name email no Form será renderizado', () => {
//         const {getByTestId} = render(<Form />);
//         const inputElement = getByTestId('email');
//         expect (inputElement).toBeInTheDocument();
//     });
//     it('Será validado se o Input com name limpar no Form será renderizado', () => {
//         const {getByTestId} = render(<Form />);
//         const inputElement = getByTestId('limpar');
//         expect (inputElement).toBeInTheDocument();
//     });
//     it('Será validado se o Input com name salvar no Form será renderizado', () => {
//         const {getByTestId} = render(<Form />);
//         const inputElement = getByTestId('salvar');
//         expect (inputElement).toBeInTheDocument();
//     });

//     it('VERIFICAÇÃO SE O FORMULARIO SERA RENDERIZADO E SEUS COMPONENTES', () =>{
//         const formularioRender = RenderForm(true);

// // ---------------------------------------------------------------------------------------------
// // Mock 
// // Verifica se o HTML contem as partes informadas na função
//         expect(formularioRender).toContain('<form>')
//         expect(formularioRender).toContain('<button>')
//         expect(formularioRender).toContain('<input>')

//     })

    
//     it('VERIFICAÇÃO SE O FORMULARIO APRESENTAR ERROS IRÁ TRAZER ALGUMA DAS INFORMAÇÕES', () =>{
//         const formularioRender = RenderForm(false);
// // Verifica caso não tenha irá trazer os erros abaixo
//         expect(formularioRender).not.toBe('')
//         expect(formularioRender).toContain('Erro')


//     })

// })

// // ---------------------------------------------------------------------------------------------
// // Mock para validação de CNPJ

// function verificaCNPJ(cnpj){
//     // A Função de verificar o cnpj tem como logica validar se a quantidade de numeros é diferente de 14 digitos eque é o padrão  
//     if(cnpj.length !== 14){
//         return 'Erro: CNPJ Inválido';
//     }
//     // Caso não exista nenhuma diverência o numero é valido
//     return 'Válido'
// }

// describe('Verifica se o CNPJ é válido ou inválido a partir da entrada', () => {
//     it('Irá retornar um erro para um CNPJ inválido', () => {
//         const validarCNPJmock = vi.fn();
//         validarCNPJmock.mockReturnValue(false);
    
//         const retorno = verificaCNPJ('069247890003');
//         expect(retorno).toEqual('Erro: CNPJ Inválido');
//     });

//     it('Irá retornar um erro para um CNPJ inválido', () => {
//         const validarCNPJmock = vi.fn();
//         validarCNPJmock.mockReturnValue(true);
    
//         const retorno = verificaCNPJ('61137574000109');
//         expect(retorno).toEqual('Válido');
//     });
// })







    


