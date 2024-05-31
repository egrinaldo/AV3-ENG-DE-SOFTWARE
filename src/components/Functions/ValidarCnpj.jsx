
export function ValidaCnpj(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g,'');

  if (cnpj.length < 14) {
    return 'O número de caracteres do CNPJ é menor que o padrão.'
  }
}
