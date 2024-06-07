export function ValidaCep(cep){
   cep = cep.replace(/[^0-9]/g, '')

    if(cep.length < 8){
        return false;
    }
  
    return true;
  }