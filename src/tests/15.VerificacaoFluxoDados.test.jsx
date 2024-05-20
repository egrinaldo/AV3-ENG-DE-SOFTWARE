//Objetivo do teste: Verifica se os detalhes da inscrição de uma escola são inseridos em um formulário e depois usados para atualizar um banco de dados 

//Técnica: Completar uma inscrição e verificar se os detalhes são refletidos no banco de dados. 

//Critérios de Sucesso: O banco de dados é atualizado com as informações corretas da inscrição. 


import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from "../components/Form/Form";

describe('VERIFICAÇÃO SE O FORMULARIO ESTÁ INSERINDO OS DADOS CORRETAMENTE E DEPOIS ATUALIZANDO O BANCO', () => {

  it('Será validado se os dados são inseridos e enviados pra atualizar o banco de dados', () => {
    const atualizaBancoMock = vi.fn();

    render(<Form atualizaBanco={atualizaBancoMock} />)

    fireEvent.change(screen.getByTestId('escola'), { target: { value: 'Escola Teste' }});
    fireEvent.change(screen.getByTestId('cnpj'), { target: { value: '87.442.839/0001-70' }});
    fireEvent.change(screen.getByTestId('logradouro'), { target: { value: 'Rua Alcrides Cunha, 144' }});
    //fireEvent.change(screen.getByTestId('bairro'), {target: {value:'Mata Escura'}});
    //fireEvent.change(screen.getByTestId('cep'), {target: {value:'19699-111'}});
    //fireEvent.change(screen.getByTestId('tipoEscola'), {target: {value:'Pública'}});
    //fireEvent.change(screen.getByTestId('email'), {target: {value:'Diretoria@escolateste.com.br'}});

    fireEvent.click(screen.getByRole('button', { name: /Save/i }));

    expect(atualizaBancoMock).toHaveBeenCalledWith({
      escola: 'Escola Teste',
      cnpj: '87.442.839/0001-70',
      logradouro: 'Rua Alcrides Cunha, 144'
      //bairro: 'Mata escura',
      //cep: '19699-111',
      //tipoEscola: 'Pública',
      //email: 'Diretoria@escolateste.com.br'
    });

  })

})