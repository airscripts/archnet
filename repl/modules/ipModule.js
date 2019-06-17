/**
 * Importing Node modules.
 */
const fetch = require("node-fetch");
const chalk = require("chalk");
const myipApi = require("../../src/server/core/myipApi.js");

/**
 * Exporting ip modules.
 */
module.exports = {
  /**
   * getIp function gives back to the user his current 
   * IP, by writing the .ip command on the REPL.
   */
  getIp: async function() {
    try {
      const response = await fetch(myipApi, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });

      const json = await response.json();
      console.log(chalk.blue("Hey surfer! Your ip is: ") + json.ip);
    } 
    
    catch (error) {
      throw error;
    }
  },

  /**
   * getCountry function gives back to the user his current
   * country, by writing the .country command on the REPL.
   */
  getCountry: async function() {
    try {
      const response = await fetch(myipApi, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });

      const json = await response.json();
      console.log(chalk.blue("Hey surfer! Your country is: ") + json.country);
    } 
    
    catch (error) {
      throw error;
    }
  },

  /**
   * getCountryCode function gives back to the user his current
   * CC, by writing the .cc command on the REPL.
   */
  getCountryCode: async function() {
    try {
      const response = await fetch(myipApi, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });

      const json = await response.json();
      console.log(chalk.blue("Hey surfer! Your country code is: ") + json.cc);
    } 
    
    catch (error) {
      throw error;
    }
  }
};
