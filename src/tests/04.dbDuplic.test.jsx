// Verificar controle de duplicidade de dados no cadastro de escolas

// Técnica: Preencha o formulário de inscrição com as mesmas
// informações da escola que já está registrada e submeta

// Critérios de Sucesso: A escola recebe uma mensagem de erro indicando que já está
// registrada.
 
import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Form } from "../components/Form/Form";


describe('VERIFICAÇÃO SE EXISTE CONTROLE DE DUPLICIDADE EM RELAÇÃO AO db', () => {

    it('Será validado se o componente Form será renderizado', () => {
        render(<Form />)
    })


})

    