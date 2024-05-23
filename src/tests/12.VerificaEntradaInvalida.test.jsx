import {describe, it, expect} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import { Form } from '../components/Form/Form';
import { SubmitMock } from './mock2.1/SubmitMock';
import { toast } from "react-toastify";


describe('VERIFICAÇÃO SE O CAMPO ESTÁ RECEBENDO UM DADO INVÁLIDO', () => {

    it('SERÁ VALIDADO SE OS CAMPOS DE INT RECEBEM STRING (CNPJ E CEP)', async () => {
        const {getByTestId} = render(<Form />);
        render(<SubmitMock />);

        const campos = ['escola', 'cnpj', 'bairro', 'logradouro', 'cep', 'tipoEscola', 'email']

        campos.forEach(campo => {
            const input = getByTestId(campo) 
            fireEvent.change(input, { target: { value: 'TESTE' } })
          })

          fireEvent.click(screen.getByRole('button', { name: /Salvar/ }));

        await (() => {
            const toastMessage = toast.isActive(toast.id) ? toast.message : null
            expect(toastMessage).to.equal('Ocorreu um erro ao enviar os dados.')
          })
    })


})