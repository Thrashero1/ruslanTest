const { defineConfig } = require("cypress");
const webpackPreprocessor = require('@cypress/webpack-preprocessor')

module.exports = defineConfig({
  viewportHeight: 768,
  viewportWidth: 1024,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Ruslan-Cypress",
    reportFilename: "UnixConvert_Report",
    embeddedScreenshots: true,
    toConsole: true
  },
  retries: {
    "runMode": 2,
    "openMode": 0
  },

  e2e: {
    component: {
      devServer: {
        framework: 'next',
        bundler: 'webpack',
      },
    },

    baseUrl: 'https://showcase.api.linx.twenty57.net',
    
    setupNodeEvents(on, config) {
      const options = {
        // send in the options from your webpack.config.js, so it works the same
        // as your app's code
        webpackOptions: require('../cypress/webpack.config'),
        watchOptions: {},
      }
      require('cypress-mochawesome-reporter/plugin')(on);
      
      // implement node event listeners here
      on('file:preprocessor', webpackPreprocessor(options))
      
      on("task", {
      })
    },
  },
});
