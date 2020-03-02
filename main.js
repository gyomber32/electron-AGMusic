const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// global object for window object
let mainWindow;

const browserWindowOptions = {
    width: 1024,
    height: 768,
    webPreferences: {
        nodeIntegration: true
    },
    icon: __dirname + 'assets/AGMusicPlayerLogo.jpg'
};

const urlOptions = {
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file:',
    slashes: true
};

function createWindow() {
    // creates browser window
    mainWindow = new BrowserWindow(browserWindowOptions);

    // loads index.html
    mainWindow.loadURL(url.format(urlOptions));

    // opens devtools
    mainWindow.webContents.openDevTools();

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
};

// run create window function
app.whenReady().then(createWindow);

// quit when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});


app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
});
