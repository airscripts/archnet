import chalk from "chalk";
import { MY_IP_API } from "../constants/ip"

export async function getIp() {
  try {
    const response = await (await fetch(MY_IP_API, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })).json();

    console.log(chalk.blue(`Your IP is: ${response.ip}.`));
  } 
  
  catch (error) {
    console.error(chalk.red("An error has occurred fetching your public IP."));
  }
}
