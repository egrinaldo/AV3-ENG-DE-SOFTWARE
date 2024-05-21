//Objetivo do teste: Verifica se todas as rotas possíveis no fluxo para uma Inscrição bem-sucedida.  

//Técnica: Inserir todas as informações corretamente no formulário de inscrição.  

//Critérios de Sucesso: O sistema aceita a inscrição e exibe uma mensagem de confirmação. 

import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Form } from "../components/Form/Form";

const renderComponent = () => {
    return render(<Form/>)
  }
  

describe('', () => {
   
  it('Verificar se o CNPJ válido irá retornar verdadeiro', () => {
    renderComponent();

    const tCNPJ = screen.getByTestId('cnpj');

    expect(tCNPJ).toBeInTheDocument();

    fireEvent.change(tCNPJ, { target: { value: '87.442.839/0001-70' }});
    
    fireEvent.click(screen.getByRole('button', { name: /Salvar/i }));

    expect(tCNPJ).toHaveValue('87.442.839/0001-70');
  });

  it('Verificar se o CNPJ inválido irá retornar falso', () => {
    renderComponent();

    const tCNPJ = screen.getByTestId('cnpj');

    expect(tCNPJ).toBeInTheDocument();

    fireEvent.change(tCNPJ, { target: { value: '00.000.000/0000-00' }});
    
    fireEvent.click(screen.getByRole('button', { name: /Salvar/i }));

    expect(tCNPJ).toHaveValue('00.000.000/0000-00');
  });
  
  it('Verificar se o CNPJ nulo irá retornar falso', () => {
    renderComponent();

    const tCNPJ = screen.getByTestId('cnpj');

    expect(tCNPJ).toBeInTheDocument();

    fireEvent.change(tCNPJ, { target: { value: '' }});
    
    fireEvent.click(screen.getByRole('button', { name: /Salvar/i }));

    expect(tCNPJ).toHaveValue('');
  });

  it('Verificar se o CEP ', () => {
    renderComponent();

    const tCEP = screen.getByTestId('cep');

    expect(tCEP).toBeInTheDocument();

    fireEvent.change(tCEP, {target: {value: '18455-000'}});

    fireEvent.click(screen.getByRole('button', {name: /Salvar/i}));

    expect(tCEP);
  })

});