# Histórias de Usuário - NewsFlow

## US01 Salvar rascunho automaticamente
**Como** redatora
**Quero** que meu texto seja salvo enquanto escrevo
**Para** não perder trabalho quando a conexão cair

**Critérios de aceitação**
* O rascunho é salvo a cada 30 segundos de inatividade.
* Cada salvamento cria uma versão numerada.
* As últimas 20 versões podem ser restauradas.
* Restaurar uma versão não apaga as seguintes.

**Regras cobertas:** RN01
**Prioridade:** Alta - perda de conteúdo é a reclamação número um dos redatores.
**Cenários:** features/us01-rascunho.feature

---

## US02 Aprovar edição para envio
**Como** revisor
**Quero** aprovar ou reprovar o conteúdo escrito por um redator
**Para** garantir a qualidade do que será enviado aos assinantes sem virar um gargalo

**Critérios de aceitação**
* O autor da edição não pode aprovar o próprio texto.
* A aprovação libera a edição para agendamento.
* A reprovação devolve a edição para o status de rascunho.
* Toda reprovação exige o preenchimento de um comentário justificando o motivo.

**Regras cobertas:** RN02
**Prioridade:** Alta - garante que nenhum conteúdo não revisado chegue aos assinantes.
**Cenários:** features/us02-aprovacao.feature

---

## US03 Agendar envio de newsletter
**Como** gestora de comunicação
**Quero** agendar o envio de uma edição aprovada
**Para** que ela chegue no melhor horário sem eu precisar apertar o botão

**Critérios de aceitação**
* O envio só pode ser agendado com pelo menos 15 minutos de antecedência.
* O sistema deve usar o fuso horário America/Sao_Paulo.
* É permitido reagendar o envio no máximo 2 vezes.
* O cancelamento do envio pode ser feito até 5 minutos antes do horário marcado.

**Regras cobertas:** RN03
**Prioridade:** Alta - o agendamento é o núcleo da operação da plataforma.
**Cenários:** features/us03-agendamento.feature

---

## US04 Segmentar público do envio
**Como** gestora de comunicação
**Quero** selecionar segmentos de assinantes para o envio
**Para** falar com o público certo e não queimar a lista com excesso de e-mails irrelevantes

**Critérios de aceitação**
* Uma mesma edição pode ser enviada para no máximo 5 segmentos diferentes.
* Se um segmento selecionado tiver zero assinantes, o agendamento é bloqueado.
* Se um assinante pertencer a mais de um segmento selecionado, ele deve receber apenas um e-mail.

**Regras cobertas:** RN04
**Prioridade:** Média - essencial para a assertividade da comunicação.
**Cenários:** features/us04-segmentacao.feature

---

## Fora de Escopo
* **RN05 (Frequência):** O controle de limite de 2 newsletters por semana por assinante não será implementado nesta etapa, pois exige simulação de passagem de semanas e fila de espera complexa.
* **RN08 (Notificação):** A janela de silêncio (22h às 8h) para notificações push ficará para uma próxima iteração, focaremos apenas no envio padrão de e-mails.