export function ValidaEmail(email) {

    const VerificaFormatoEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!VerificaFormatoEmail.test(email)){
        return 'E-mail inválido. Verifique o novamente.'
    }

}