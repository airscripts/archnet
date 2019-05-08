// @ts-ignore
const { app, BrowserWindow } = require('electron');

function createWindow() {
    let win = new BrowserWindow({ width: 800, height: 600 });
    win.loadURL('http://localhost:8080/');
}

app.on('ready', createWindow);