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

  }

};
