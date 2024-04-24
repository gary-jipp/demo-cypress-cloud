const {defineConfig} = require("cypress");

module.exports = defineConfig({
  projectId: "b2wqk4",
  e2e: {
    video: true,
    chromeWebSecurity: false,
    watchForFileChanges: true
  },
});
