const playPauseBtn = document.getElementById('play-pause_btn');

playPauseBtn.addEventListener('click', () => {
    const playPauseBtnIcon = document.getElementById('play-pause_btn_icon');
    if (playPauseBtnIcon.src == 'file://' + __dirname + '/src/assets/icons/play.png') {
        playPauseBtnIcon.src = './src/assets/icons/pause.png';
    } else {
        playPauseBtnIcon.src = './src/assets/icons/play.png';
    }
});

const play = (filepath) => {
    const audio = new Audio(filePath);
    audio.play();
}