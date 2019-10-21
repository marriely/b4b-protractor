var Login = require('../page-objects/po_login')

describe('Login no b4b', function() {
  console.log('teste1');
  var login

  beforeEach( function() {
    console.log("passando pelo beforeEach");
    login = new Login();
    var fork = browser.forkNewDriverInstance();
    fork.get('http://teste.botfactory.newwaycorp.io'); 
    browser.ignoreSynchronization = true; //preciso dessa linha, pq o b4b não é angular

   // browser.driver.get('http://teste.botfactory.newwaycorp.io');  

  });

    it('Login com sucesso', function() {
          
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
      })// contador

  it('Login com falha', function() {
        
    

        login.email.sendKeys('qateste@teste.com.br');
        login.senha.sendKeys('123456789');
        login.btn_entrar.click();
        console.log("Passou pelo login com falha");
  
  }); // fim do it

      

console.log("Fim do teste");
     
    
  })
