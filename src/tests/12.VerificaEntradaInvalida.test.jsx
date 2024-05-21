import {describe, it, expect} from 'vitest';
import {render, fireEvent} from '@testing-library/react';
import { Form } from "../components/Form/Form";
import { toast } from "react-toastify";


describe('VERIFICAÇÃO SE O CAMPO ESTÁ RECEBENDO UM DADO INVÁLIDO', () => {

    it('SERÁ VALIDADO SE OS CAMPOS DE INT RECEBEM STRING (CNPJ E CEP)', async () => {
        const {getByTestId} = render(<Form />);

        const campos = ['escola', 'cnpj', 'bairro', 'logradouro', 'cep', 'tipoEscola', 'email']

        campos.forEach(campo => {
            const input = getByTestId(campo) 
            fireEvent.change(input, { target: { value: 'TESTE' } })
          })

        fireEvent.click(getByTestId('salvar'));

        await (() => {
            const toastMessage = toast.isActive(toast.id) ? toast.message : null
            expect(toastMessage).to.equal('Ocorreu um erro ao enviar os dados.')
          })
    })


})