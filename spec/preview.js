var Preview = require('../page-objects/po_preview')
var Login = require('../page-objects/po_login')

describe('Executar preview', function() {
    var preview

    beforeEach( function() {
        console.log("passando pelo beforeEach");
        preview = new Preview();
        login = new Login();
        browser.driver.get('https://teste.botfactory.newwaycorp.io'); 
        browser.ignoreSynchronization = true;

           
        login.email.sendKeys('qateste@teste.com.br');
        login.senha.sendKeys('123456');
        login.btn_entrar.click();
        console.log("Passou pelo login sucesso");

    });

    it('Executar o preview', function() {  

        var EC = protractor.ExpectedConditions;
        // Waits for the element with id 'abc' to be clickable.
      
        browser.wait(EC.elementToBeClickable($(preview.novo_fluxo)), 5000);
        
  
  }); // fim do preview



})