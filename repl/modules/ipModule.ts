import chalk from "chalk";
import fetch from "node-fetch";
import { MY_IP_API } from "../../constants/ip"

export async function getIp() {
  try {
    const response = await fetch(MY_IP_API, {
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
