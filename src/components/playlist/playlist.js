const playlistBtn = document.getElementById('playlist_btn');

playlistBtn.addEventListener('click', () => {
    const playlistBtnIcon = document.getElementById('playlist_btn_icon');
    if (playlistBtnIcon.src == 'file://' + __dirname + '/assets/icons/next.svg') {
        playlistBtnIcon.src = './assets/icons/back.svg';
    } else {
        playlistBtnIcon.src = './assets/icons/next.svg';
    }
});