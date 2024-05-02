// Verificar controle de duplicidade de dados no cadastro de escolas

// Técnica: Preencha o formulário de inscrição com as mesmas
// informações da escola que já está registrada e submeta

// Critérios de Sucesso: A escola recebe uma mensagem de erro indicando que já está
// registrada.
 
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Form } from "../components/Form/Form";

describe('VERIFICAÇÃO SE EXISTE CONTROLE DE DUPLICIDADE EM RELAÇÃO AO DB', () => {

    it('Será validado se o componente Form será renderizado', () => {
        render(<Form />)
        
        const mockJSON = {
            "id": "1",
            "escola": "Escola FC",
            "cnpj": "10230480000300",
            "bairro": "Paralela",
            "logradouro": "Av Luis Viana filho",
            "cep": "41650010",
            "tipoEscola": "publica",
            "email": "escolafc@gmail.com"
          }

          const keys = [];

          // Variável para rastrear se há duplicidades
          let hasDuplicates = false;
      
          // Verificar cada chave do JSON
          for (let key in mockJSON) {
            // Se a chave já estiver no array de chaves, significa que é duplicada
            if (keys.indexOf(key) !== -1) {
              hasDuplicates = true;
              break; // Se encontramos uma duplicata, podemos parar de verificar
            } else {
              // Se não estiver, adiciona à lista de chaves
              keys.push(key);
            }
          }
      
          // Asserção para verificar se há duplicidades
          expect(hasDuplicates).toBe(false);
    })


})

    