const { defineConfig } = require("cypress");

module.exports = defineConfig({
  'video': false,
  'viewportWidth': 1200,
  'viewportHeight': 760,
  'defaultCommandTimeout': 20000,
  'chromeWebSecurity': false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    'baseUrl': 'https://shop.demoqa.com/'
  },
});
