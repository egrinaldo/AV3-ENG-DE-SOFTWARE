import {describe, it, expect} from 'vitest';
import { ValidaEmail } from '../components/Functions/ValidaEmail';





describe('Função que verifica se o E-MAIL inválido a partir da entrada', () => {
    it('Irá retornar false para um  E-MAIL inválido', () => {
        const email = 'Sergipe';
        const retorno = ValidaEmail(email);
        expect(retorno).toEqual(false);
    });
})
