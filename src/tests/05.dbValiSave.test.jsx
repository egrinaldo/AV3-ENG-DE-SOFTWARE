// Verificar se os dados enviados serão salvos corretamente no banco de dados

// Técnica: Após o registro bem-sucedido de uma escola, verifique os
// dados no banco de dados.

// Critérios de Sucesso: Os dados da escola no banco de dados correspondem aos
// dados fornecidos durante o registro.

import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Form } from "../components/Form/Form";


describe('VERIFICAÇÃO SE OS DADOS ENVIADOS SERÃO SALVOS', () => {

    it('Será validado se o componente Form será renderizado', () => {
        render(<Form />)
        // Definição da função para adicionar um novo objeto à matriz JSON
function adicionarEscola(escola, novaEscola) {
    // Adiciona o novo objeto à matriz JSON
    escola.push(novaEscola);
    
    // Retorna a matriz atualizada
    return escola;
}

// Exemplo de uso da função
// Vamos supor que temos uma matriz JSON existente de escolas
const escolasMockJson = [
    {
        "id": 1,
        "escola": "Escola A",
        "cnpj": "1234567890001",
        "bairro": "Bairro A",
        "logradouro": "Rua 1",
        "cep": "12345-678",
        "tipoEscola": "Pública",
        "email": "escolaA@example.com"
    },
    {
        "id": 2,
        "escola": "Escola B",
        "cnpj": "9876543210001",
        "bairro": "Bairro B",
        "logradouro": "Rua 2",
        "cep": "98765-432",
        "tipoEscola": "Privada",
        "email": "escolaB@example.com"
    }
];

// Novo objeto escola a ser adicionado
const novoCadastro = {
    "id": 3,
    "escola": "Escola C",
    "cnpj": "6543219870001",
    "bairro": "Bairro C",
    "logradouro": "Rua 3",
    "cep": "54321-876",
    "tipoEscola": "Pública",
    "email": "escolaC@example.com"
};

// Adiciona a nova escola à matriz de escolas
escolasMockJson = adicionarEscola(escolasMockJson, novoCadastro);

// Exibe a matriz de escolas atualizada
console.log(escolasMockJson);


    })


})

    