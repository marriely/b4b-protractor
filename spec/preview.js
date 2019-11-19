var Preview = require('../page-objects/po_preview')
var Login = require('../page-objects/po_login')

describe('Executar preview', function() {
    var preview

    beforeEach( function() {
        console.log("passando pelo beforeEach");
        preview = new Preview();
        login = new Login();
        browser.driver.get('https://teste.botfactory.newwaycorp.io/'); 
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;

           
        login.email.sendKeys('novo@teste.com.br');
        login.senha.sendKeys('123456');
        login.btn_entrar.click();
        console.log("Passou pelo login sucesso");

    });

    it('Novo fluxo', function() {  
        
        browser.sleep(5000);
        //expect(browser.getCurrentUrl()).toBe('https://teste.botfactory.newwaycorp.io/flows/');

    //  preview.novo_fluxo.click();
       
    element.all(by.className('[data-test=flowNewButton]')).click();
       console.log("passou pelo it")
       
        //clicou no novo fluxo
  
  }); // fim do preview



})