# language: pt
Funcionalidade: Segmentar público do envio
  Como gestora de comunicação
  Quero selecionar segmentos de assinantes para o envio
  Para falar com o público certo e não queimar a lista com excesso de e-mails irrelevantes

  Contexto:
    Dado que estou autenticada como gestora
    E estou configurando o envio da edição "Informativo #42"

  @feliz
  Cenário: Assinante em múltiplos segmentos recebe apenas um e-mail
    Dado que o assinante "joao@email.com" pertence aos segmentos "Premium" e "Belo Horizonte"
    Quando seleciono os segmentos "Premium" e "Belo Horizonte" para o envio
    Então o disparo deve contabilizar apenas um e-mail para "joao@email.com"

  @excecao
  Cenário: Bloqueio ao tentar enviar para segmento sem assinantes
    Dado que o segmento "Inativos" possui 0 assinantes
    Quando seleciono o segmento "Inativos" para o envio
    Então devo ver a mensagem "Não é possível agendar envios para segmentos vazios"
    E o agendamento deve ser bloqueado

  @excecao
  Cenário: Limite máximo de segmentos por edição
    Dado que a edição já possui 5 segmentos selecionados
    Quando tento adicionar o segmento "Estudantes"
    Então devo ver a mensagem "Uma edição permite no máximo 5 segmentos"
    