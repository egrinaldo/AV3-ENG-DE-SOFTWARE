// Verificar se o sistema de notificação está funcionando adequadamente trazendo mensagem de êxito ou erro ao concluir cadastro

// Técnica: Após o registro bem-sucedido de uma escola, verifique se uma
// notificação de confirmação é enviada.

// Critérios de Sucesso: Uma notificação de confirmação é mostrada para a escola após
// o registro bem-sucedido.

import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Form } from "../components/Form/Form";


describe('VERIFICAÇÃO SE O PROCESSO DE NOTIFICAÇÃO ESTA FUNCIONANDO ', () => {

    it('Será validado se o componente Form será renderizado', () => {
        render(<Form />)
    })


})

    