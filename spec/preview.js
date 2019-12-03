var Preview = require('../page-objects/po_preview')
var Login = require('../page-objects/po_login')

describe('Executar preview', function() {
    var preview

    beforeEach( function() {
        console.log("passando pelo beforeEach");
        preview = new Preview();
        login = new Login();
        browser.driver.get('https://teste.botfactory.newwaycorp.io/'); 
       // browser.driver.manage().window().maximize();
        var width = 1200;
        var height = 400;
        browser.driver.manage().window().setSize(width, height);
        browser.ignoreSynchronization = true;

           
        login.email.sendKeys('novo@teste.com.br');
        login.senha.sendKeys('123456');
        login.btn_entrar.click();
        console.log("Passou pelo login sucesso");

    });

    it('Novo fluxo', function() {  
        
        browser.sleep(2000);
        //expect(browser.getCurrentUrl()).toBe('https://teste.botfactory.newwaycorp.io/flows/');

        preview.novo_fluxo.click();       
        browser.sleep(2000);
        preview.primeiro_state.click();
        preview.mensagem.sendKeys('Oi teste.');
        browser.sleep(2000);
        preview.btn_salvar.click();
        browser.sleep(2000);
        preview.btn_preview.click();
        browser.sleep(2000);
        expect(preview.mensagem_preview.getText()).toBe('Oi teste.');
        console.log("passou pelo it");
       
        //clicou no novo fluxo
  
  }); // fim do preview



})