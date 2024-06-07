export function ValidaUf(uf){
    
    if(uf.length < 3 || !['Bahia','bahia'].includes(uf)){
        return false;
    }
  
    return true;
  }