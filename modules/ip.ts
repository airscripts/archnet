import chalk from "chalk";
import constants from "../constants"

export async function getIp() {
  try {
    const response = await (await fetch(constants.ip.ipApi, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })).json();

    console.log(chalk.blue(`Your public IP is: ${response.ip}.`));
  }

  catch (error) {
    console.error(chalk.red("An error has occurred fetching your public IP."));
  }
}