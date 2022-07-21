const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "bjnnap",
  e2e: {
    baseUrl: "https://16-react-advanced-git-dev-luiznaiper.vercel.app/",
    chromeWebSecurity: false,
    viewportWith: 500,
    viewportHeight: 800,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
