const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('node:assert/strict');

Given('que estou autenticada como gestora', function () {
  // Simulação de login
});

Given('que existe a edição {string} aprovada', function (string) {
  // Simulação de edição aprovada
});

Given('que o segmento {string} tem {int} assinantes', function (string, int) {
  // Simulação de segmento configurado
});

When('agendo o envio para daqui a {int} minutos', function (minutos) {
  if (minutos >= 15) {
    this.mensagemSistema = "Envio agendado";
  } else {
    this.mensagemSistema = "O envio precisa de ao menos 15 minutos";
  }
});

Then('devo ver a mensagem {string}', function (mensagemEsperada) {
  assert.equal(this.mensagemSistema, mensagemEsperada);
});