import { AppPage } from './app.po';

/**
 * Tests e2e
 */
describe('itau-git-client App', () => {
  let page: AppPage;
  let botaoBuscar;
  let campoNome;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Mostrar nome da aplicação', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('Itaú Git Client');
  });

  it('Buscar usuario na API Git', () => {
    page.navigateTo();
    this.botaoBuscar = page.getBotaoBuscar();
    this.campoNome = page.getCampoNome();
    this.campoNome.sendKeys('angular');
    this.botaoBuscar.click();
    page.sleepSeconds(3000);
    expect(page.getElementNomeUsuarioGit()).toBeTruthy();
  });

  it('Buscar usuario não encontrado na API Git', () => {
    page.navigateTo();
    this.botaoBuscar = page.getBotaoBuscar();
    this.campoNome = page.getCampoNome();
    this.campoNome.sendKeys('nome-nao-existe-no-git-lalalala');
    this.botaoBuscar.click();
    page.sleepSeconds(3000);
    expect(page.getElementNaoEncontrado()).toBeTruthy();
  });
});
