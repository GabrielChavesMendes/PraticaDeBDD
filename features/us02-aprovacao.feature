# language: pt
Funcionalidade: Aprovar edição para envio
  Como revisor
  Quero aprovar ou reprovar o conteúdo escrito por um redator
  Para garantir a qualidade do que será enviado aos assinantes sem virar um gargalo

  Contexto:
    Dado que existe a edição "Novidades de Março" com status de rascunho finalizado

  @feliz
  Cenário: Revisor aprova a edição com sucesso
    Dado que estou autenticado como revisor
    E não sou o autor da edição
    Quando aprovo a edição
    Então o status da edição deve mudar para aprovada
    E a edição deve ser liberada para agendamento

  @excecao
  Cenário: Autor tenta aprovar o próprio texto
    Dado que estou autenticado como redator
    E sou o autor da edição "Novidades de Março"
    Quando tento aprovar a edição
    Então devo ver a mensagem "O autor não pode aprovar a própria edição"
    E o status da edição deve permanecer como rascunho

  @excecao
  Cenário: Reprovação exige comentário obrigatório
    Dado que estou autenticado como revisor
    Quando reprovo a edição deixando o comentário em branco
    Então devo ver a mensagem "É obrigatório preencher o motivo da reprovação"
    E a edição não deve ser devolvida ao redator