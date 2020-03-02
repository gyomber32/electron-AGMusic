const playPauseBtn = document.getElementById('play-pause_btn');

playPauseBtn.addEventListener('click', () => {
    const playPauseBtnIcon = document.getElementById('play-pause_btn_icon');
    if (playPauseBtnIcon.src == 'file://' + __dirname + '/assets/icons/play.svg') {
        playPauseBtnIcon.src = './assets/icons/pause.svg';
    } else {
        playPauseBtnIcon.src = './assets/icons/play.svg';
    }
});