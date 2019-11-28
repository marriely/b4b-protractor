

var Login = function() {}

Login.prototype = Object.create({}, {

email: {get: function() {return element.all(by.dataTest('emailCredentialsLogin'))}},

senha: {get: function() {return element.all(by.dataTest('passowrdCredentialsLogin'))}},

btn_entrar: {get: function(){return element(by.dataTest('saveButtonCredentials')) }},

mensagem_obrigatorio: {get: function() {return element(by.className('el-form-item__error'))}},

mensagem_invalido: {get: function() {return element(by.className('el-message el-message--error'))}},

})

module.exports = Login;
