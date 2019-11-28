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

           
        element(by.css('[data-test="emailCredentialsLogin"]')).sendKeys('novo@teste.com.br');
        login.senha.sendKeys('123456');
        element(by.className('el-button credentials-actions-button el-button--default color-default credentials-actions-button-green')).click();
        console.log("Passou pelo login sucesso");

    });

    it('Novo fluxo', function() {  
        
        browser.sleep(10000);
        //expect(browser.getCurrentUrl()).toBe('https://teste.botfactory.newwaycorp.io/flows/');

        //  preview.novo_fluxo.click();
       
        element(by.className('el-card flows-card flows-add-new is-always-shadow')).click();
        browser.sleep(10000);
        console.log("passou pelo it")
       
        //clicou no novo fluxo
  
  }); // fim do preview



})