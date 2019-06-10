// @ts-ignore
const { app, BrowserWindow } = require('electron');

/**
 * In this main.js file we setup the default dimension
 * for the Electron's App Window.
 * Moreover we set up even the URL where the application should be heading to.
 */
function createWindow() {
    let win = new BrowserWindow({ width: 800, height: 600 });
    win.loadURL('http://localhost:8080/');
}

app.on('ready', createWindow);