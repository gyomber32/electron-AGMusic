const { dialog } = require('electron').remote;
const browseBtn = document.getElementById('browse_btn');
const mm = require('music-metadata');

const playlist = [];

const dialogOptions = {
    title: 'Open File',
    filters: [{ name: 'Music', extensions: ['mp3'] }],
    properties: ['openFile']
};

browseBtn.addEventListener('click', () => {
    const song = {
        title: '',
        duration: ''
    };
    dialog.showOpenDialog(dialogOptions).then(selectedFile => {
        const filePath = selectedFile.filePaths[0];
        song.title = getTitleAndAuthor(filePath);
        getDuration(filePath).then(duration => {
            song.duration = duration;
        }).then(() => {
            playlist.push(song);
            /*const playlista = document.getElementById('playlist');
            console.log(playlista);
            playlista.innerHTML = song.title;*/
        })
    }).catch(error => {
        console.log(error);
    });
});

const getTitleAndAuthor = (filePath) => {
    const details = filePath.split('/');
    return titleAndAuthor = details[details.length - 1].split('.')[0];
};


const getDuration = async (filePath) => {
    const durationInSeconds = (await mm.parseFile(filePath)).format.duration;
    let minutes = Math.floor(durationInSeconds / 60);
    let seconds = Math.floor(durationInSeconds - minutes * 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;
};