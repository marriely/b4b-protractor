//var HtmlReporter = require('protractor-beautiful-reporter');
// usei o comando npm install protractor-beautiful-reporter --save-dev para add o reporter

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../spec/login.js'],

onPrepare()
{
  by.addLocator('dataTest',function(text) {
  return document.querySelector(`[data-test="${text}"]`)
});

}


};