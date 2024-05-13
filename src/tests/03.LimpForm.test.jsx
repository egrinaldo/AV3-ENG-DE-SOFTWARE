import {describe, it, expect} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ClearMock } from './mock2.1/ClearMock';
import { Form } from '../components/Form/Form';

describe('VALIDANDO SE AO INSERIR UM DETERMINADO DADO E AO CLICAR NO BOTÃO LIMPAR TUDO SERÁ EXCLUIDO E O INPUT PRONTO PARA INCLUIR NOVOS DADOS',() => {
    it('VALIDANDO SE AO INSERIR UM DETERMINADO DADO E AO LIMPAR O BOTÃO REALMENTE IRÁ RESETAR O FORMS', async() => {
        render(<ClearMock />)

        await userEvent.type(screen.getByRole('textbox'), 'escolaTeste');
        
        fireEvent.click(screen.getByRole('button', { name: /Limpar/i }));

        expect(screen.getByRole('textbox')).toHaveValue('');

    });

    it('VALIDANDO SE AO INSERIR UM DETERMINADO DADO E AO LIMPAR O BOTÃO REALMENTE IRÁ RESETAR O FORMS E OS INPUTS SERÃO APAGADOS', async() => {
        render(<Form />)

        await userEvent.type(screen.getByTestId('escola'), 'escolaTeste');
        await userEvent.type(screen.getByTestId('cnpj'), '11111111111111');
        await userEvent.type(screen.getByTestId('logradouro'), 'logradouroTeste');
        await userEvent.type(screen.getByTestId('bairro'), 'bairroTeste');
        await userEvent.type(screen.getByTestId('cep'), '22222222');
        await userEvent.type(screen.getByTestId('tipoEscola'), 'tipoEscolaTeste');
        await userEvent.type(screen.getByTestId('email'), 'emailTeste@gmail.com');

        
        fireEvent.click(screen.getByRole('button', { name: /Limpar/i }));

        expect(screen.getByTestId('escola')).toHaveValue('');
        expect(screen.getByTestId('cnpj')).toHaveValue('');
        expect(screen.getByTestId('logradouro')).toHaveValue('');
        expect(screen.getByTestId('bairro')).toHaveValue('');
        expect(screen.getByTestId('cep')).toHaveValue('');
        expect(screen.getByTestId('tipoEscola')).toHaveValue('');
        expect(screen.getByTestId('email')).toHaveValue('');

    })
})
