import {describe, it, expect} from 'vitest';
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
