// Verificar controle de duplicidade de dados no cadastro de escolas

// Técnica: Preencha o formulário de inscrição com as mesmas
// informações da escola que já está registrada e submeta

// Critérios de Sucesso: A escola recebe uma mensagem de erro indicando que já está
// registrada.

// criar uma função que leia dois jsons e verifique se existem itens iguais
 
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Form } from "../components/Form/Form";
import { verificarDuplicata } from "../components/Functions/VerificaDuplicidade";


describe('VERIFICAÇÃO SE EXISTE CONTROLE DE DUPLICIDADE EM RELAÇÃO AO DB', () => {

    it('Será validado se o componente Form será renderizado', () => {
        render(<Form />)
        
        const mockJSON = [
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
      
        const novoJSON = {
          "id": 2,
          "escola": "Escola B",
          "cnpj": "9876543210001",
          "bairro": "Bairro B",
          "logradouro": "Rua 2",
          "cep": "98765-432",
          "tipoEscola": "Privada",
          "email": "escolaB@example.com"
        }
        
        const resultado = verificarDuplicata(mockJSON, novoJSON)
        expect(resultado.duplicata).toBe(true);
        expect(resultado.mensagem).toBe("Escola já cadastrada");
      })

    })
