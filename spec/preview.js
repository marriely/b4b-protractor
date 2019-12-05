var Preview = require('../page-objects/po_preview')
var Login = require('../page-objects/po_login')

describe('Executar preview', function() {
    var preview

    beforeEach( async function() {
        console.log("passando pelo beforeEach");
        preview = new Preview();
        login = new Login();
        browser.driver.get('https://teste.botfactory.newwaycorp.io/'); 
       // browser.driver.manage().window().maximize();
        var width = 1200;
        var height = 400;
        browser.driver.manage().window().setSize(width, height);
        browser.ignoreSynchronization = true;

           
        await login.email.sendKeys('novo@teste.com.br');
        await  login.senha.sendKeys('123456');
        await login.btn_entrar.click();
        console.log("Passou pelo login sucesso");

    });

    it('Novo fluxo', async function() {  
        
        browser.sleep(2000);
        //expect(browser.getCurrentUrl()).toBe('https://teste.botfactory.newwaycorp.io/flows/');

        await preview.novo_fluxo.click();       
        await browser.sleep(2000);
        await preview.primeiro_state.click();
        await preview.mensagem.sendKeys('Oi teste.');
        await browser.sleep(2000);
        await preview.btn_salvar.click();
        await browser.sleep(2000);
        await preview.btn_preview.click();
        await browser.sleep(2000);
        expect(preview.mensagem_preview.getText()).toBe('Oi teste.');
        console.log("passou pelo it");
       
        //clicou no novo fluxo
  
  }); // fim do preview



})