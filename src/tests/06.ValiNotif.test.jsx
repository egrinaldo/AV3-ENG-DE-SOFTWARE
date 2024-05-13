// Verificar se o sistema de notificação está funcionando adequadamente trazendo mensagem de êxito ou erro ao concluir cadastro

// Técnica: Após o registro bem-sucedido de uma escola, verifique se uma
// notificação de confirmação é enviada.

// Critérios de Sucesso: Uma notificação de confirmação é mostrada para a escola após
// o registro bem-sucedido.

import { render, getByText, getByTestId } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Form } from "../components/Form/Form";
import userEvent from "@testing-library/user-event";


describe('VERIFICAÇÃO SE O PROCESSO DE NOTIFICAÇÃO ESTA FUNCIONANDO ', () => {

    it('Será validado se o componente Form será renderizado', () => {
       const { getByText } = render(<Form/>);

       const botaoSalvar = getByTestId('Salvar');
       userEvent.click(botaoSalvar);
       expect(getByText("Ocorreu um erro ao enviar os dados.")).toBeInTheDocument();

    //    const { getByTestId, getByText} = render(<Form />)
    //    userEvent.click(getByTestId('salvar'));
    //    expect(getByText("Dados enviados com sucesso!")).toBeInTheDocument();

    })


})

    