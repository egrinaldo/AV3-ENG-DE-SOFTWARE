export default { extends: ['@commitlint/config-conventional'],
rules: {
    'type-enum': [2, 'always', [
      'feat', // Novas funcionalidades
      'fix', // Correções de bugs
      'docs', // Alterações na documentação
      'style', // Alterações de estilo que não afetam o significado do código
      'refactor', // Refatorações de código que não corrigem bugs nem adicionam funcionalidades
      'perf', // Melhorias de performance
      'test', // Adição ou correção de testes
      'build', // Alterações que afetam o sistema de build ou dependências externas
      'ci', // Alterações nos arquivos e scripts de configuração de CI
      'chore', // Outras alterações que não modificam os arquivos de src ou test
      'revert' // Reversões de commits anteriores
    ]],
    'scope-case': [2, 'always', 'lower-case'], // Define que o escopo deve estar em minúsculas
    'subject-full-stop': [2, 'never', '.'], // Não permite ponto final no assunto
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']], // Define casos permitidos para o assunto
    // Você pode adicionar mais regras aqui conforme necessário
  
  }

};

// type(scope? AQUI VOCÊ PODE ADICIONAR MAIS DADOS ESPECIFICOS SOBRE AS ALTERAÇÕES FEITAS): subject
// body?
// footer?

