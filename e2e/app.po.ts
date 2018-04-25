import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root nav a span')).getText();
  }

  getAppTitle(){
    return element(by.id('app-title')).getText();
  }

  getBotaoBuscar(){
    return element(by.tagName('button'));
  }

  getCampoNome(){
    return element(by.tagName('input'));
  }

  getNomeUsuarioGit(){
    return element(by.id('nomeUsuarioGit')).getText();
  }

  getElementNomeUsuarioGit(){
    return element(by.id('nomeUsuarioGit')).isDisplayed();
  }

  getElementNaoEncontrado(){
    return element(by.id('nao-encontrado')).isDisplayed();
  }

  getElementFormBusca(){
    return element(by.id('form-busca')).isDisplayed();
  }

  sleepSeconds(seconds){
    browser.sleep(seconds);
  }
}

