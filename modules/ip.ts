import chalk from "chalk";
import constants from "../constants"

export async function getIp() {
  try {
    const method = "GET";
    const headers = { "Content-Type": "application/json" };

    const response = await (await fetch(constants.ip.ipApi, {
      method: method,
      headers: headers,
    })).json();

    console.log(chalk.blue(`Your public IP is: ${response.ip}.`));
  }

  catch (error) {
    console.error(chalk.red("An error has occurred fetching your public IP."));
  }
}