//Objetivo do teste: Verifica se todas as rotas possíveis no fluxo para uma Inscrição bem-sucedida.  

//Técnica: Inserir todas as informações corretamente no formulário de inscrição.  

//Critérios de Sucesso: O sistema aceita a inscrição e exibe uma mensagem de confirmação. 

import { describe, it, expect, vi } from "vitest";
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

// -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- //
function validarESCOLA(escola) {
  if (!escola) {
    return 'Erro: Escola Inválida'
  }

  return 'Escola Válida'
}

describe('VERIFICA SE A ESCOLA É VÁLIDO / INVÁLIDO A PARTIR DOS DADOS DE ENTRADA', () => {
  it('Irá retornar "Escola Válida" para uma Escola Válida', () => {
    const validarESCOLAmock = vi.fn();
    validarESCOLAmock.mockReturnValue(true)

    const tESCOLA = validarESCOLA('T-VI ACADEMY')
    expect(tESCOLA).toEqual('Escola Válida')
  });

  it('Irá retornar "Erro: Escola Inválida", caso a Escola seja "NULL"', () => {
    const validarESCOLAmock = vi.fn();
    validarESCOLAmock.mockReturnValue(true)

    const tESCOLA = validarESCOLA('')
    expect(tESCOLA).toEqual('Erro: Escola Inválida')
  });

})

// -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- //

function validarCNPJ(cnpj) {
 // A Função irá remover os caracteres não numéricos
 cnpj = cnpj.replace(/[^\d]+/g, '');

 // A Função irá remover os caracteres não numéricos
 if (!cnpj) {
   return 'Erro: CNPJ Inválido';
 }
 
 // A Função irá verificar se o CNPJ é uma "String"
 if (typeof cnpj !== 'string') {
   return 'Erro: CNPJ Inválido'
 }

 // A Função irá verificar se a quantidade de numeros é diferente de 14 digitos eque é o padrão de um CNPJ 
 if (cnpj.length !== 14) {
   return 'Erro: CNPJ Inválido';
 }

 // A Função irá verificar se todos os dígitos são iguais (ex: 11.111.111/1111-11)
 if (/^(\d)\1{13}$/.test(cnpj)) {
   return 'Erro: CNPJ Inválido';
 }
 // Caso não exista nenhuma divergência o CNPJ é valido
  return 'CNPJ Válido';
}

describe('VERIFICA SE O CNPJ É VÁLIDO / INVÁLIDO A PARTIR DE DIFERENTES DADOS DE ENTRADA', () => {
  it('Irá retornar "CNPJ Válido" para um CNPJ válido', () => {
      const validarCNPJmock = vi.fn();
      validarCNPJmock.mockReturnValue(true);

      const tCNPJ = validarCNPJ('87.442.839/0001-70');
      expect(tCNPJ).toEqual('CNPJ Válido');
  });

  it('Irá retornar "CNPJ Válido" para um CNPJ válido, sem os caracteres não numericos', () => {
    const validarCNPJmock = vi.fn();
    validarCNPJmock.mockReturnValue(true);

    const tCNPJ = validarCNPJ('87442839000170');
    expect(tCNPJ).toEqual('CNPJ Válido');
  });

  it('Irá retornar "Erro: CNPJ Inválido", caso o CNPJ seja "NULL"', () => {
    const validarCNPJmock = vi.fn();
    validarCNPJmock.mockReturnValue(false);
    
    const tCNPJ = validarCNPJ('');
    expect(tCNPJ).toEqual('Erro: CNPJ Inválido');
  });

  it('Irá retornar "Erro: CNPJ Inválido", caso CNPJ seja uma "String"', () => {
    const validarCNPJmock = vi.fn();
    validarCNPJmock.mockReturnValue(false);
    
    const tCNPJ = validarCNPJ('aaaaaaaaa');
    expect(tCNPJ).toEqual('Erro: CNPJ Inválido');
  });

  it('Irá retornar "Erro: CNPJ Inválido", caso o CNPJ não tenha 14 digitos', () => {
    const validarCNPJmock = vi.fn();
    validarCNPJmock.mockReturnValue(false);
    
    const tCNPJ = validarCNPJ('11.111.111/1111-');
    expect(tCNPJ).toEqual('Erro: CNPJ Inválido');
  });

  it('Irá retornar "Erro: CNPJ Inválido", caso todos seus digitos sejão iguais', () => {
    const validarCNPJmock = vi.fn();
    validarCNPJmock.mockReturnValue(false);
    
    const tCNPJ = validarCNPJ('11.111.111/1111-11');
    expect(tCNPJ).toEqual('Erro: CNPJ Inválido');
  });

});

// -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- //

function validarBAIRRO(bairro) {
  if (!bairro) {
    return 'Erro: Bairro Inválido'
  }

  return 'Bairro Válido'
}

describe('VERIFICA SE A BAIRRO É VÁLIDO / INVÁLIDO A PARTIR DOS DADOS DE ENTRADA', () => {
  it('Irá retornar "Bairro Válido" para uma Bairro Válido', () => {
    const validarBAIRROmock = vi.fn();
    validarBAIRROmock.mockReturnValue(true)

    const tBAIRRO = validarBAIRRO('Mata Escura')
    expect(tBAIRRO).toEqual('Bairro Válido')
  });

  it('Irá retornar "Erro: Bairro Inválido", caso a Bairro seja "NULL"', () => {
    const validarBAIRROmock = vi.fn();
    validarBAIRROmock.mockReturnValue(false)

    const tBAIRRO = validarBAIRRO('')
    expect(tBAIRRO).toEqual('Erro: Bairro Inválido')
  });

})

// -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- //

function validarLOGRADOURO(logradouro) {
  if (!logradouro) {
    return 'Erro: Logradouro Inválido'
  }

  return 'Logradouro Válido'
}

describe('VERIFICA SE A BAIRRO É VÁLIDO / INVÁLIDO A PARTIR DOS DADOS DE ENTRADA', () => {
  it('Irá retornar "Logradouro Válido" para um Logradouro Válido', () => {
    const validarLOGRADOUROmock = vi.fn();
    validarLOGRADOUROmock.mockReturnValue(true)

    const tLOGRADOURO = validarLOGRADOURO('Mata Escura')
    expect(tLOGRADOURO).toEqual('Logradouro Válido')
  });

  it('Irá retornar "Erro: Logradouro Inválido", caso o Logradouro seja "NULL"', () => {
    const validarLOGRADOUROmock = vi.fn();
    validarLOGRADOUROmock.mockReturnValue(false)

    const tLOGRADOURO = validarLOGRADOURO('')
    expect(tLOGRADOURO).toEqual('Erro: Logradouro Inválido')
  });

})

// -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- //

function validarCEP(cep) {
  // A Função irá remover os caracteres não numéricos
  cep = cep.replace(/[^\d]+/g, '');

  // A Função irá remover os caracteres não numéricos
  if (!cep) {
   return 'Erro: CEP Inválido';
  }

  // A Função irá verificar se o CEP é uma "String"
  if (typeof cep !== 'string') {
   return 'Erro: CEP Inválido'
  }

  // A Função irá verificar se a quantidade de numeros é diferente de 14 digitos eque é o padrão de um CEP 
  if (cep.length !== 8) {
   return 'Erro: CEP Inválido';
  }

  // A Função irá verificar se todos os dígitos são iguais (ex: 11.111.111/1111-11)
  if (/^(\d)\1{7}$/.test(cep)) {
   return 'Erro: CEP Inválido';
  }

  // Caso não exista nenhuma divergência o CEP é valido
   return 'CEP Válido';
}

describe('VERIFICA SE O CEP É VÁLIDO / INVÁLIDO A PARTIR DE DIFERENTES DADOS DE ENTRADA', () => {
  it('Irá retornar "CEP Válido" para um CEP válido', () =>{
    const validarCEPmock = vi.fn();
    validarCEPmock.mockReturnValue(true);

    const tCEP = validarCEP('42840-000');
    expect(tCEP).toEqual('CEP Válido');
  });

  it('Irá retornar "CEP Válido" para um CEP válido, sem os caracteres não numericos', () =>{
    const validarCEPmock = vi.fn();
    validarCEPmock.mockReturnValue(true);

    const tCEP = validarCEP('42840000');
    expect(tCEP).toEqual('CEP Válido');
  });

  it('Irá retornar "Erro: CEP Inválido", caso o CEP seja "NULL"', () =>{
    const validarCEPmock = vi.fn();
    validarCEPmock.mockReturnValue(false);

    const tCEP = validarCEP('');
    expect(tCEP).toEqual('Erro: CEP Inválido');
  });

  it('Irá retornar "Erro: CEP Inválido", caso o CEP seja uma "String"', () =>{
    const validarCEPmock = vi.fn();
    validarCEPmock.mockReturnValue(false);

    const tCEP = validarCEP('aaaaa-aaa');
    expect(tCEP).toEqual('Erro: CEP Inválido');
  });

  it('Irá retornar "Erro: CEP Inválido", caso o CEP não tenha 8 digitos', () =>{
    const validarCEPmock = vi.fn();
    validarCEPmock.mockReturnValue(false);

    const tCEP = validarCEP('42840-0');
    expect(tCEP).toEqual('Erro: CEP Inválido');
  });

  it('Irá retornar "Erro: CEP Inválido", caso todos seus digitos sejão iguais', () =>{
    const validarCEPmock = vi.fn();
    validarCEPmock.mockReturnValue(false);

    const tCEP = validarCEP('11111-111');
    expect(tCEP).toEqual('Erro: CEP Inválido');
  });
})

// -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- //

function validarTIPOESCOLA (tipoEscola) {
  if (!tipoEscola) {
    return 'Erro: Tipo Escola Inválido'
  }

  if (tipoEscola !== 'Pública' && tipoEscola !== 'Particular') {
    return 'Erro: Tipo Escola Inválido'
  }

  return 'Tipo Escola Válido'
}

describe('VERIFICA SE O TIPO DE ESCOLA É VÁLIDO / INVÁLIDO A PARTIR DOS DADOS DE ENTRADA', () => {
  it('Irá retornar "Erro: Tipo Escola Inválido" caso o Tipo de Escola seja "NULL"', () => {    
    const validarEMAILmock = vi.fn();
    validarEMAILmock.mockReturnValue(false);

    const tTIPOESCOLA = validarTIPOESCOLA('');
    expect(tTIPOESCOLA).toEqual('Erro: Tipo Escola Inválido');
  });

  it('Irá retornar "Erro: Tipo Escola Inválido" para um Tipo de Escola diferente de "Particular && Pública"', () => {
    const validarEMAILmock = vi.fn();
    validarEMAILmock.mockReturnValue(false);

    const tTIPOESCOLA = validarTIPOESCOLA('Municipal');
    expect(tTIPOESCOLA).toEqual('Erro: Tipo Escola Inválido');
  });

  it('Irá retornar "Tipo Escola Válido" para um Tipo de Escola Válido "Pública"', () => {
    const validarEMAILmock = vi.fn();
    validarEMAILmock.mockReturnValue(true);

    const tTIPOESCOLA = validarTIPOESCOLA('Pública');
    expect(tTIPOESCOLA).toEqual('Tipo Escola Válido');
  });

  it('Irá retornar "Tipo Escola Válido" para um Tipo de Escola Válido "Particular"', () => {
    const validarEMAILmock = vi.fn();
    validarEMAILmock.mockReturnValue(true);

    const tTIPOESCOLA = validarTIPOESCOLA('Particular');
    expect(tTIPOESCOLA).toEqual('Tipo Escola Válido');
  });


});

// -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- //

function validarEMAIL(email) {
  // Expressão regular para validar o formato do email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Verifica se o email corresponde ao formato válido
  if (!emailRegex.test(email)) {
    return 'Erro: Email Inválido';
  }

  if (!email) {
    return 'Erro: Email Inválido';
  }

  return 'Email Válido';
}

describe('Validação do Email', () => {
  it('Irá retornar "Email Válido" se o email estiver no formato correto', () => {
    const validarEMAILmock = vi.fn();
    validarEMAILmock.mockReturnValue(true);

    const tEMAIL = validarEMAIL('Diretoria@escolateste.com.br');
    expect(tEMAIL).toEqual('Email Válido');
  });

  it('Irá retornar "Erro: Email Inválido" se o email estiver em um formato inválido', () => {
    const validarEMAILmock = vi.fn();
    validarEMAILmock.mockReturnValue(false);

    const tEMAIL = validarEMAIL('Diretoria.escolateste');
    expect(tEMAIL).toEqual('Erro: Email Inválido');
  });

  it('Irá retornar "Erro: Email Inválido", caso o EMAIL seja "NULL"', () => {
    const validarEMAILmock = vi.fn();
    validarEMAILmock.mockReturnValue(false);

    const tEMAIL = validarEMAIL('');
    expect(tEMAIL).toEqual('Erro: Email Inválido');
});
});
