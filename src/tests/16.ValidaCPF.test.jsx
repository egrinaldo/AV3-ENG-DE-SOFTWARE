import { describe, expect, it } from "vitest";
import { ValidaCpf } from "../components/Functions/ValidaCpf";



describe('Função que verifica se o CNPJ é válido ou inválido a partir da entrada', () => {
    it('Irá retornar false para um CNPJ inválido', () => {
        const cpf = '122.134.123-';
        const retorno = ValidaCpf(cpf);
        expect(retorno).toEqual('O número de caracteres do CPF é menor que o padrão.');
    });
})