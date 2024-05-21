import {describe, it, expect, vi} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SubmitMock } from './mock2.1/SubmitMock';

describe('VALIDANDO SE AO INSERIR UM DETERMINADO DADO E AO SALVAR O BOTÃO REALMENTE IRÁ SUBMETER O FORMS',() => {
    it('VALIDANDO SE AO INSERIR UM DETERMINADO DADO E AO SALVAR O BOTÃO REALMENTE IRÁ SUBMETER O FORMS', async() => {
        const originalLog = console.log;
        let consoleOutput = [];
        console.log = (...output) => consoleOutput.push(...output);

        render(<SubmitMock />)

        await userEvent.type(screen.getByRole('textbox'), 'escolaTeste');
        
        fireEvent.click(screen.getByRole('button'));

        expect(consoleOutput).toContain(JSON.stringify({ escola: 'escolaTeste' }));

        console.log = originalLog;
    })
})
// ---------------------------------------------------------------------------------------------
// Mock para validação de submit

function subValida(subButton) {
    if (subButton !== '') {
        return 'Enviado com Sucesso';
    }
    return 'Erro ao enviar';
}

describe('VALIDANDO SE AO INSERIR UM DETERMINADO DADO E AO SALVAR O BOTÃO REALMENTE IRÁ SUBMETER O FORMS', () =>{
    it('VALIDANDO SE AO INSERIR UM DETERMINADO DADO E AO SALVAR O BOTÃO REALMENTE IRÁ SUBMETER O FORMS', () => {
        const validarEnvio = vi.fn()
        validarEnvio.mockReturnValue(true)

        const dataForm = {
            escola: 'Paulo Afonso',
            cnpj: '91141165000139',
            bairro: 'Pituba',
            logradouro: 'rua',
            cep: '44531145',
            tipoEscola: 'Publica',
            email: 'pauloafonsomunicipal@gmail.com',
        };

        const retorno = subValida(dataForm)
        expect(retorno).toEqual('Enviado com Sucesso')
    })

    it('VALIDANDO SE AO INSERIR UM DETERMINADO DADO E AO SALVAR O BOTÃO REALMENTE IRÁ SUBMETER O FORMS', () => {
        const validarEnvio = vi.fn()
        validarEnvio.mockReturnValue(false)


        const retorno = subValida('')
        expect(retorno).toEqual('Erro ao enviar')
    })
})