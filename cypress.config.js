const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl:"https://consumer.staging.geotoll.com/home/signin",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  "viewportWidth": 1366,
  "viewportHeight": 768,
  "defaultCommandTimeout":60000,
})



