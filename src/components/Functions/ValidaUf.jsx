export function ValidaUf(uf){
    
    if(uf.length < 3 || !['Bahia','bahia'].includes(uf)){
        return 'Este Projeto é válido somente no municipio de Salvador Ba.'
    }
}