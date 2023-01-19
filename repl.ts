import repl from "repl";
import chalk from "chalk";

import modules from "./modules";

console.log(chalk.blue(
`Welcome to Archnet!
Type .help to check what I can do for you.`
));

const replServer = repl.start({
  prompt: "archnet > ",
  input: process.stdin,
  output: process.stdout,
});

replServer.on('exit', () => {
  console.log(chalk.blue("Come back whenever you want to!"));
  process.exit();
});

replServer.defineCommand('cls', {
  help: "Using .cls will clear the console.",

  action() {
    console.clear();
    this.displayPrompt();
  }
});

replServer.defineCommand('ip', {
  help: "Check your current IP address.",

  async action() {
    await modules.ip.getIp();
    this.displayPrompt();
  }
});