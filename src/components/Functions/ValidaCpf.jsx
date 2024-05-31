export function ValidaCpf(cpf){

    const verificacpf = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;
    if(!verificacpf.test(cpf)){
        return 'O número de caracteres do CPF é menor que o padrão.'
    }
}