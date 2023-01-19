const chalk = require("chalk");
const fetch = require("node-fetch");
const myipApi = require("../../src/server/core/myipApi");

export async function getIp() {
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
}

export async function getCountry() {
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
}

export async function getCountryCode() {
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
