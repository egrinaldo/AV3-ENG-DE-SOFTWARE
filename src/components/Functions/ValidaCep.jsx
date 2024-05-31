export function ValidaCep(cep){
   cep = cep.replace(/[^0-9]/g, '')

    if(cep.length < 8){
        return 'O número de caracteres do CEP é menor que o padrão.'
    }
}