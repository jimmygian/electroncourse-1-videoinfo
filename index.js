const electron = require('electron');
const path = require('path')
const { app, BrowserWindow } = electron;

const appPath = app.getAppPath();

const mainWindowPrefs = {
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    }
};

app.on('ready', () => {
    console.log("App is now ready!")
    const mainWindow = new BrowserWindow(mainWindowPrefs);

    if (!app.isPackaged) {
        mainWindow.webContents.openDevTools();
    }

    // mainWindow.loadURL(`file://${__dirname}/index.html`)
    mainWindow.loadFile(path.join(appPath, 'index.html'))
});