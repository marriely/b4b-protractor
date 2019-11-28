var Login = require('../page-objects/po_login')

describe('Login no b4b', function() {
  var login

  var urlExpectFlow = "https://teste.botfactory.newwaycorp.io/flows/"
  var urlExpectLogin = "https://teste.botfactory.newwaycorp.io/credentials/login"

  beforeEach( function() {
    console.log("passando pelo beforeEach");
    login = new Login();
    browser.driver.get('https://teste.botfactory.newwaycorp.io'); 
    browser.driver.manage().window().maximize();
    //https://app.builder4bots.com.br/ - produção
   // https://teste.botfactory.newwaycorp.io - teste
    browser.ignoreSynchronization = true; //preciso dessa linha, pq o b4b não é angular
  }); // termina o before each

  afterEach(function() {
    console.log("passando pelo afterEach");
   // referencia https://code-examples.net/en/q/1715a20
    function getWindowLocation() {
      return window.location;
    }

    function clearStorage() {
    
      window.localStorage.clear();
    }

    return browser.executeScript(getWindowLocation).then(function(location) {
    if (location.hostname.length > 0) {
      return browser.executeScript(clearStorage);
    }
    else {
      return Promise.resolve();
    }
    });// função para limpar o storage, hoje no b2b não tem o logout

});
     

  it('Login com sucesso - Usuário e senha válido', function() {
          
      login.email.sendKeys('novo@teste.com.br');
      login.senha.sendKeys('123456');
      login.btn_entrar.click();

      console.log("Passou pelo login sucesso");

     
      browser.sleep(5000);
      expect(browser.getCurrentUrl()).toBe(urlExpectFlow);
      console.log("deu certo a comparaçao");
    })// it com sucesso

  it('Deve falhar ao fazer o login com senha inválida', function() {  
    
        login.email.sendKeys('qateste@teste.com.br');
        login.senha.sendKeys('123456789');
        login.btn_entrar.click();
        browser.sleep(5000);
        console.log("Passou pelo login com falha");
        expect(browser.getCurrentUrl()).toBe(urlExpectLogin);
  
  }); // fim do it falha

  it('Deve falhar ao fazer o login com email inválido', function() {  
    
    login.email.sendKeys('novo');
    login.senha.sendKeys('123456');
    login.btn_entrar.click();
    browser.sleep(5000);
    console.log("Passou pelo login com falha");
    expect(browser.getCurrentUrl()).toBe(urlExpectLogin);

  }); // fim do it falha

  it('Deve falhar ao fazer o login com os campos em branco', function() {
        
    login.email.sendKeys('');
    login.senha.sendKeys('');
    login.btn_entrar.click();
    browser.sleep(5000);
    console.log("Passou pelo login em branco");
    expect(login.mensagem_obrigatorio.getText()).toBe('Por favor preencha este campo.');

}); // fim do it em bracno

      

console.log("Fim do teste");
     
    
})
