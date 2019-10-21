var HtmlReporter = require('protractor-beautiful-reporter');
// usei o comando npm install protractor-beautiful-reporter --save-dev para add o reporter


exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../spec/login.js'],


    onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
     jasmine.getEnv().addReporter(new HtmlReporter({
          baseDirectory: 'tmp/screenshots',
          screenshotsSubfolder: 'images',
          takeScreenShotsOnlyForFailedSpecs: true,
          disableScreenshots: false,
          docTitle: 'reporter b4b',
          docName: 'index.html'
          
       }).getJasmine2Reporter());
    },

  };