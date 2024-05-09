// Verificar controle de duplicidade de dados no cadastro de escolas

// Técnica: Preencha o formulário de inscrição com as mesmas
// informações da escola que já está registrada e submeta

// Critérios de Sucesso: A escola recebe uma mensagem de erro indicando que já está
// registrada.

// criar uma função que leia dois jsons e verifique se existem itens iguais
 
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Form } from "../components/Form/Form";

describe('VERIFICAÇÃO SE EXISTE CONTROLE DE DUPLICIDADE EM RELAÇÃO AO DB', () => {

    it('Será validado se o componente Form será renderizado', () => {
        render(<Form />)
        
        const mockJSON = [
          {
            "id": "1",
            "escola": "Escola FC",
            "cnpj": "10230480000300",
            "bairro": "Paralela",
            "logradouro": "Av Luis Viana filho",
            "cep": "41650010",
            "tipoEscola": "publica",
            "email": "escolafc@gmail.com"
          },
          {
            "id": "1",
            "escola": "Escola FC",
            "cnpj": "10230480000300",
            "bairro": "Paralela",
            "logradouro": "Av Luis Viana filho",
            "cep": "41650010",
            "tipoEscola": "publica",
            "email": "escolafc@gmail.com"
          }
        ];
        

        function verificarDuplicatas(jsonArray) {
          let duplicatasEncontradas = false;
          const itensUnicos = [];
          const itensDuplicados = [];
        
          for (let i = 0; i < jsonArray.length; i++) {
            const itemAtual = jsonArray[i];
            const itemString = JSON.stringify(itemAtual);
        
            if (itensUnicos.includes(itemString)) {
              // Item duplicado encontrado
              duplicatasEncontradas = true;
              itensDuplicados.push(itemAtual);
            } else {
              // Item único encontrado
              itensUnicos.push(itemString);
            }
          }
        
          return {
            duplicatasEncontradas: duplicatasEncontradas,
            itensDuplicados: itensDuplicados
          };
        }
        
        // Teste para verificar se há duplicatas
        expect(duplicatasEncontradas).toBe(true);
})

    }) 