// Verificar se os dados enviados serão salvos corretamente no banco de dados

// Técnica: Após o registro bem-sucedido de uma escola, verifique os
// dados no banco de dados.

// Critérios de Sucesso: Os dados da escola no banco de dados correspondem aos
// dados fornecidos durante o registro.

import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Form } from "../components/Form/Form";


describe('VERIFICAÇÃO SE OS DADOS ENVIADOS SERÃO SALVOS', () => {

    it('Será validado se o componente Form será renderizado', () => {
        render(<Form />)
    })


})

    