import {describe, it, expect} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ClearMock } from './mock2.1/ClearMock';

describe('VALIDANDO SE AO INSERIR UM DETERMINADO DADO E AO CLICAR NO BOTÃO LIMPAR TUDO SERÁ EXCLUIDO E O INPUT PRONTO PARA INCLUIR NOVOS DADOS',() => {
    it('VALIDANDO SE AO INSERIR UM DETERMINADO DADO E AO SALVAR O BOTÃO REALMENTE IRÁ SUBMETER O FORMS', async() => {
        render(<ClearMock />)

        await userEvent.type(screen.getByRole('textbox'), 'escolaTeste');
        
        fireEvent.click(screen.getByRole('button', { name: /Limpar/i }));

        expect(screen.getByRole('textbox')).toHaveValue('');

    })
})
