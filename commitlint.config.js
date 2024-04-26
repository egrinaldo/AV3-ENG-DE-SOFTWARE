export default {
  extends: ["@commitlint/config-conventional"],
  parserPreset: "conventional-changelog-conventionalcommits",
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // Novas funcionalidades
        "fix", // Correções de bugs
        "docs", // Alterações na documentação
        "style", // Alterações de estilo que não afetam o significado do código
        "refactor", // Refatorações de código que não corrigem bugs nem adicionam funcionalidades
        "perf", // Melhorias de performance
        "test", // Adição ou correção de testes
        "build", // Alterações que afetam o sistema de build ou dependências externas
        "ci", // Alterações nos arquivos e scripts de configuração de CI
        "chore", // Outras alterações que não modificam os arquivos de src ou test
        "revert", // Reversões de commits anteriores
      ],
    ],
    "scope-case": [2, "always", "lower-case"], // Define que o escopo deve estar em minúsculas
    "subject-full-stop": [2, "never", "."], // Não permite ponto final no assunto
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ], // Define casos permitidos para o assunto
    // Você pode adicionar mais regras aqui conforme necessário
  },
  prompt: {
    settings: {},
    messages: {
      skip: ":skip",
      max: "upper %d chars",
      min: "%d chars at least",
      emptyWarning: "can not be empty",
      upperLimitWarning: "over limit",
      lowerLimitWarning: "below limit",
    },
    questions: {
      type: {
        description:
          "Selecione o tipo de alteração que você está comprometendo:",
        enum: {
          feat: {
            description: "Um novo recurso",
            title: "Features(Características)",
            emoji: "✨",
          },
          fix: {
            description: "Uma correção de bug",
            title: "Bug Fixes(Bug Fixes)",
            emoji: "🐛",
          },
          docs: {
            description: "Mudança apenas na documentaçãos",
            title: "Documentation(Documentation)",
            emoji: "📚",
          },
          refactor: {
            description:
              "Uma alteração de código que não corrige um bug nem adiciona um recurso",
            title: "Code Refactoring(Refatoração de código)",
            emoji: "📦",
          },
          test: {
            description:
              "Adicionar testes ausentes ou corrigir testes existentes",
            title: "Tests(Testes)",
            emoji: "🚨",
          },
          build: {
            description:
              "Mudanças que afetam o sistema de compilação ou dependências externas (example scopes: gulp, broccoli, npm)",
            title: "Builds(Construções)",
            emoji: "🛠",
          },
        },
      },
      scope: {
        description:
          "Qual é o escopo desta mudança (por exemplo, componente ou nome do arquivo)",
      },
      body: {
        description: "Escreva uma descrição curta e imperativa da mudança",
      },
      footer:{
        description: 'Adicionar referências de problemas (por exemplo, "correção #123", "re #123".)',
      },
    },
  },
};
// type(scope? AQUI VOCÊ PODE ADICIONAR MAIS DADOS ESPECIFICOS SOBRE AS ALTERAÇÕES FEITAS): subject
// body?
// footer?
// footer?
// footer?
