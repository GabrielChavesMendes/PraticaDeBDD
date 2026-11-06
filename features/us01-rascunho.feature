# language: pt
Funcionalidade: Salvar rascunho automaticamente
  Como redatora
  Quero que meu texto seja salvo enquanto escrevo
  Para não perder trabalho quando a conexão cair

  Contexto:
    Dado que estou autenticada como redatora
    E iniciei a escrita de uma nova edição chamada "Novidades de Março"

  @feliz
  Cenário: Salvamento após inatividade
    Dado que o texto atual ainda não foi salvo
    Quando fico 30 segundos sem digitar
    Então o sistema deve salvar o rascunho
    E uma nova versão numerada deve ser criada

  @excecao
  Cenário: Restaurar versão anterior não apaga histórico
    Dado que a edição possui 5 versões salvas
    Quando solicito a restauração da versão 3
    Então o conteúdo da edição deve ser substituído pelo texto da versão 3
    E as versões 4 e 5 devem continuar disponíveis no histórico