var Preview = function() {}

    Preview.prototype = Object.create({}, {

    novo_fluxo: {get: function() {return element(by.className('el-card flows-card flows-add-new is-always-shadow'))}},
    primeiro_state: {get: function() {return element(by.className('flow-state-content'))}},
    mensagem: {get: function() {return element(by.className('el-textarea__inner'))}},
    btn_salvar: {get: function() {return element(bt.className('el-button el-button--primary'))}},
    btn_preview: {get: function() {return element(by.className('el-button header__settings-button el-button--default control-button-green el-popover__reference'))}},
    mensagems_preview: {get: function() {return element(by.className('preview-modal-messages'))}},








    })

module.exports = Preview;