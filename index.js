const electron = require('electron');
const path = require('path')
const { app, BrowserWindow, ipcMain } = electron;
const ffmpeg = require('fluent-ffmpeg');

let mainWindow;

const appPath = app.getAppPath();

const mainWindowPrefs = {
    webPreferences: {
        preload: path.join(app.getAppPath(), 'preload.js')
        // nodeIntegration: true,
        // contextIsolation: false
    }
};

app.on('ready', () => {
    console.log("App is now ready!")
    mainWindow = new BrowserWindow(mainWindowPrefs);

    if (!app.isPackaged) {
        mainWindow.webContents.openDevTools();
    }

    // mainWindow.loadURL(`file://${__dirname}/index.html`)
    mainWindow.loadFile(path.join(appPath, 'index.html'))
});

ipcMain.on('video:submit', (event, path) => {
    ffmpeg.ffprobe(path, (err, metadata) => {
        console.log("Video duration is:", metadata.format.duration);
        mainWindow.webContents.send('video:metadata', metadata);
    })
});