import repl from "repl";
import chalk from "chalk";
import { getIp } from "./modules/ipModule";

console.log(chalk.blue(
  "\nWelcome to Archnet!"
  + "\nI am Archie, and I'm here to help you!"
  + "\nType .help to check what I can do for you. :)\n"
));

const replServer = repl.start({
  prompt: "$ Archnet: ",
  input: process.stdin,
  output: process.stdout,
});

replServer.on('exit', () => {
  console.log(chalk.blue("Come back whenever you want to! :)"));
  process.exit();
});

replServer.defineCommand('cls', {
  help: "Using .cls will clear the console.",
  action() {
    console.clear();

    console.log(chalk.blue(
      "\nWelcome to Archnet!"
      + "\nI am Archie, and I'm here to help you!"
      + "\nType .help to check what can I do for you. :)\n"
    ));

    this.displayPrompt();
  }
});

replServer.defineCommand('ip', {
  help: "It gives you back your current IP Address.",
  async action() {
    await getIp();
    console.log("");
    this.displayPrompt();
  }
});