export function ValidaCpf(cpf){

    const verificacpf = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;
    if(!verificacpf.test(cpf)){
        return false;
    }
  
    return true;
  }