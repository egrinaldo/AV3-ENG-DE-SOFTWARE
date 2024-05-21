import {describe, it, expect} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import { Form } from '../components/Form/Form';
import { SubmitMock } from './mock2.1/SubmitMock';
import { toast } from "react-toastify";


describe('VERIFICANDO SE UM CAMPO ACEITA UMA ENTRADA VÁLIDA', () => {

    it('SERÁ VALIDADO SE OS CAMPOS RECEBEM ENTRADAS VÁLIDAS', async () => {
        const {getByTestId} = render(<Form />);
        render(<SubmitMock />);

        const campo_string = ['escola', 'bairro', 'logradouro', 'tipoEscola']
        const campo_cnpj = ['cnpj']
        const campo_cep = ['cep']
        const campo_email = ['email']

        campo_string.forEach(campo => {
            const input = getByTestId(campo) 
            fireEvent.change(input, { target: { value: 'TESTE' } })
          })

        campo_cnpj.forEach(campo => {
            const input = getByTestId(campo) 
            fireEvent.change(input, { target: { value: '12321123123123' } })
          })

          campo_cep.forEach(campo => {
            const input = getByTestId(campo) 
            fireEvent.change(input, { target: { value: '12321123' } })
          })

          campo_email.forEach(campo => {
            const input = getByTestId(campo) 
            fireEvent.change(input, { target: { value: '123@123.com' } })
          })

          fireEvent.click(screen.getByRole('button', { name: /Salvar/ }));

          expect(screen.getByTestId('escola')).toHaveValue('TESTE');
          expect(screen.getByTestId('cnpj')).toHaveValue('12.321.123/1231-23');
          expect(screen.getByTestId('logradouro')).toHaveValue('TESTE');
          expect(screen.getByTestId('bairro')).toHaveValue('TESTE');
          expect(screen.getByTestId('cep')).toHaveValue('12321-123');
          expect(screen.getByTestId('tipoEscola')).toHaveValue('TESTE');
          expect(screen.getByTestId('email')).toHaveValue('123@123.com');

    })


})