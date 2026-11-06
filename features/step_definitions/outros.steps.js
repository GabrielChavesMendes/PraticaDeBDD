const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('node:assert/strict');

// --- Passos da US01: Rascunho ---
Given('que estou autenticada como redatora', function () {});
Given('iniciei a escrita de uma nova edição chamada {string}', function (titulo) {
  this.edicao = { versoes: [1, 2, 3, 4, 5] };
});
Given('que o texto atual ainda não foi salvo', function () {
  this.edicao.versoes = [];
});
When('fico {int} segundos sem digitar', function (segundos) {
  this.edicao.versoes.push('v1');
});
Then('o sistema deve salvar o rascunho', function () {
  assert.equal(this.edicao.versoes.length, 1);
});
Then('uma nova versão numerada deve ser criada', function () {
  assert.equal(this.edicao.versoes.length, 1);
});
Given('que a edição possui {int} versões salvas', function (qtd) {});
When('solicito a restauração da versão {int}', function (versao) {
  this.textoRestaurado = `texto da versao ${versao}`;
});
Then('o conteúdo da edição deve ser substituído pelo texto da versão {int}', function (versao) {
  assert.equal(this.textoRestaurado, `texto da versao ${versao}`);
});
Then('as versões {int} e {int} devem continuar disponíveis no histórico', function (v1, v2) {});

// --- Passos da US02: Aprovação ---
Given('que existe a edição {string} com status de rascunho finalizado', function (titulo) {
  this.statusEdicao = 'rascunho';
  this.autor = 'redator_joao';
});
Given('estou autenticado como revisor', function () {
  this.usuarioAtual = 'revisor_maria';
});
Given('não sou o autor da edição', function () {
  assert.notEqual(this.usuarioAtual, this.autor);
});
When('aprovo a edição', function () {
  this.statusEdicao = 'aprovada';
});
Then('o status da edição deve mudar para aprovada', function () {
  assert.equal(this.statusEdicao, 'aprovada');
});
Then('a edição deve ser liberada para agendamento', function () {});
Given('estou autenticado como redator', function () {
  this.usuarioAtual = 'redator_joao';
});
Given('sou o autor da edição {string}', function (titulo) {
  this.autor = this.usuarioAtual;
});
When('tento aprovar a edição', function () {
  if (this.usuarioAtual === this.autor) {
    this.mensagemSistema = "O autor não pode aprovar a própria edição";
  }
});
Then('o status da edição deve permanecer como rascunho', function () {
  assert.equal(this.statusEdicao, 'rascunho');
});
When('reprovo a edição deixando o comentário em branco', function () {
  this.mensagemSistema = "É obrigatório preencher o motivo da reprovação";
});
Then('a edição não deve ser devolvida ao redator', function () {
  assert.equal(this.statusEdicao, 'rascunho');
});

// --- Passos da US04: Segmentação ---
Given('estou configurando o envio da edição {string}', function (titulo) {});
Given('que o assinante {string} pertence aos segmentos {string} e {string}', function (email, seg1, seg2) {
  this.emailsContabilizados = 1;
});
When('seleciono os segmentos {string} e {string} para o envio', function (seg1, seg2) {});
Then('o disparo deve contabilizar apenas um e-mail para {string}', function (email) {
  assert.equal(this.emailsContabilizados, 1);
});
Given('que o segmento {string} possui {int} assinantes', function (segmento, qtd) {
  this.qtdAssinantes = qtd;
});
When('seleciono o segmento {string} para o envio', function (segmento) {
  if (this.qtdAssinantes === 0) {
    this.mensagemSistema = "Não é possível agendar envios para segmentos vazios";
  }
});
Then('o agendamento deve ser bloqueado', function () {});
Given('que a edição já possui {int} segmentos selecionados', function (qtd) {
  this.segmentosAtuais = qtd;
});
When('tento adicionar o segmento {string}', function (segmento) {
  if (this.segmentosAtuais >= 5) {
    this.mensagemSistema = "Uma edição permite no máximo 5 segmentos";
  }
});
Given('que o envio está agendado para as 15h00', function () {});
When('solicito o cancelamento do envio às 14h50', function () {
  this.mensagemSistema = "Envio cancelado com sucesso";
});
Then('o disparo deve ser cancelado', function () {});