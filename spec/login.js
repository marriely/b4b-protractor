var Login = require('../page-objects/po_login')



describe('Login no b4b', function() {
  var login

  beforeEach( function() {
    console.log("passando pelo beforeEach");
    login = new Login();
    browser.driver.get('https://teste.botfactory.newwaycorp.io'); 
    browser.ignoreSynchronization = true; //preciso dessa linha, pq o b4b não é angular
  }); // termina o before each

  afterEach(function() {
    console.log("passando pelo afterEach");
   
    function getWindowLocation() {
      return window.location;
    }

    function clearStorage() {
    
      window.localStorage.clear();
    }

    return browser.executeScript(getWindowLocation).then(function(location) {
    // NB If no page is loaded in the scneario then calling clearStorage will cause exception
    // so guard against this by checking hostname (If no page loaded then hostname == '')
    if (location.hostname.length > 0) {
      return browser.executeScript(clearStorage);
    }
    else {
      return Promise.resolve();
    }
  });

});
   

  

    it('Login com sucesso alteração', function() {
          
      login.email.sendKeys('qateste@teste.com.br');
      login.senha.sendKeys('123456');
      login.btn_entrar.click();

      console.log("Passou pelo login sucesso");

      element.all(by.className('el-input__inner')).count().then((contador)=>{
        console.log(contador);
        for (let i =0; i<contador;++i){
          element.all(by.className('el-input__inner')).get(i).getAttribute('placeholder').then((texto)=>{
            console.log(texto);
            console.log(i);
          })

        } })//ver o nome do elemento
        
      //=> isso é mesma coisa que o function

      browser.sleep(5000);
      expect(browser.getCurrentUrl()).toBe('https://teste.botfactory.newwaycorp.io/flows/');
      console.log("deu certo a comparaçao");
    })// it com sucesso

  it('Login com falha', function() {
        
    

        login.email.sendKeys('qateste@teste.com.br');
        login.senha.sendKeys('123456789');
        login.btn_entrar.click();
        browser.sleep(5000);
        console.log("Passou pelo login com falha");
  
  }); // fim do it falha

      

console.log("Fim do teste");
     
    
  })
