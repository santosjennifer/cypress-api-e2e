const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://api.spotify.com/v1",
    video: false,       
    fixturesFolder: false  
  },
  env:{
    url_token: "https://accounts.spotify.com/api/token",
    authorization: "Basic MzE4YzY2NjFiZjg3NDdjMWEyZDY1ZDE3YjQ3ZWQ2MTQ6MDQxNWEwYWIyMTI3NDRkOThiZTU1Mjc3MGU1NmZhZWM="
  }
});
