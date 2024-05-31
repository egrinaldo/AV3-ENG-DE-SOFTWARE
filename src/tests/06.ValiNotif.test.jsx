// Verificar se o sistema de notificação está funcionando adequadamente trazendo mensagem de êxito ou erro ao concluir cadastro

// Técnica: Após o registro bem-sucedido de uma escola, verifique se uma
// notificação de confirmação é enviada.

// Critérios de Sucesso: Uma notificação de confirmação é mostrada para a escola após
// o registro bem-sucedido.

import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Form } from "../components/Form/Form";
import userEvent from "@testing-library/user-event";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


describe('VERIFICAÇÃO SE O PROCESSO DE NOTIFICAÇÃO ESTA FUNCIONANDO', () => {

  it('Será validado se o componente Form será renderizado', async () => {

    render(
      <>
        <Form />
        <ToastContainer />
      </>
    );

    const buttonTestID = screen.getByTestId('salvar');
    userEvent.click(buttonTestID);

    await waitFor(() => {
      expect(screen.getByText("Ocorreu um erro ao enviar os dados.")).toBeInTheDocument();
    });
  });
});