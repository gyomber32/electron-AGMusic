const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// global object for window object
let mainWindow;

const browserWindowOptions = {
    width: 800,
    height: 600,
    icon: __dirname + 'assets/icons/AGMusicPlayerLogo.jpg'
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
    // mainWindow.webContents().openDevTools();

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
};

// run create window function
app.on('ready', createWindow);

// quit when all windows are closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});