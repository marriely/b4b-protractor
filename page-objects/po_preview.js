var Preview = function() {}

    Preview.prototype = Object.create({}, {

    novo_fluxo: {get: function() {return element.all(by.dataTest('flowNewButton'))}},
    primeiro_state: {get: function() {return element(by.dataTest('stateContent'))}},
    mensagem: {get: function() {return element(by.dataTest('messageTextArea'))}},
    btn_salvar: {get: function() {return element(by.dataTest('saveState'))}},
    btn_preview: {get: function() {return element(by.dataTest('preview'))}},
    mensagem_preview: {get: function() {return element(by.dataTest('previewRobotMessage'))}},








    })

module.exports = Preview;