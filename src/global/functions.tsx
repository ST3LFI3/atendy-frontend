function formatName(name:string) {
    if(!name)return ''
    // Dividir o nome em palavras separadas
    const nameParts = name.split(' ');
  
    if (nameParts.length >= 2) {
      const firstName = nameParts[0];
      const lastNameInitial = nameParts[nameParts.length - 1][0]; // Pegar a primeira letra do último sobrenome
      return `${firstName} ${lastNameInitial?lastNameInitial:''}`;
    } else {
      return name; // Retorna o nome original se não for possível formatar
    }
  }

  export {
    formatName
  }
  