const { setWorldConstructor } = require('@cucumber/cucumber')

class MundoDoNewsFlow {
  constructor() {
    this.mensagemSistema = null;
  }
}

setWorldConstructor(MundoDoNewsFlow)