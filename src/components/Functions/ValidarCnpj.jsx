export function ValidaCnpj(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g,'');

  if (cnpj.length < 14) {
    return false;
  }

  return true;
}
