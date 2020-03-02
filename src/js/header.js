const remote = require('electron').remote;

const closeBtn = document.getElementById('close_btn');
const minimizeBtn = document.getElementById('minimize_btn');
const mainWindow = remote.getCurrentWindow();

closeBtn.addEventListener('click', () => {
    mainWindow.close();
});

minimizeBtn.addEventListener('click', () => {
    mainWindow.minimize();
})


