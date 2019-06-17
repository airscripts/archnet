/**
 * Requiring node modules.
 */
const repl = require("repl");
const chalk = require("chalk");

/**
 * Requiring Archnet's REPL modules.
 */
const cls = require("./modules/clsModule");
const ip = require("./modules/ipModule");

console.log(chalk.blue(
  "\nWelcome to Archnet!"
  + "\nI am Archie, and I'm here to help you!"
  + "\nType .help to check what I can do for you. :)\n"
));

/**
 * Starting replServer.
 */
const replServer = repl.start({
  prompt: "$ Archnet: ",
  input: process.stdin,
  output: process.stdout,
});

/**
 * Re-defining standard REPL commands.
 */
replServer.on('exit', () => {
  console.log(chalk.blue("Come back whenever you want to! :)"));
  process.exit();
});

/**
 * Defining REPL commands.
 */
replServer.defineCommand('cls', {
  help: "Using .cls will clear the console.",
  action() {
    cls.clearConsole();

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
    await ip.getIp();
    console.log("");
    this.displayPrompt();
  }
});

replServer.defineCommand("country", {
  help: "It gives you back your current country.",
  async action() {
    await ip.getCountry();
    console.log("");
    this.displayPrompt();
  }
});

replServer.defineCommand("cc", {
  help: "It gives you back your current country code.",
  async action() {
    await ip.getCountryCode();
    console.log("");
    this.displayPrompt();
  }
});