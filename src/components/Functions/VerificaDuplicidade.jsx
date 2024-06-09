export  function verificarDuplicata(matriz, novoJSON) {
    for (let json of matriz) {
      if (json.cnpj === novoJSON.cnpj && json.escola === novoJSON.escola && json.email === novoJSON.email) {
        return {duplicata: true, mensagem: "Escola já cadastrada"};
      }
    }
    return {duplicata: false}; 
  }