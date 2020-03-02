const playlistBtn = document.getElementById('playlist_btn');

playlistBtn.addEventListener('click', () => {
    /* hides playlist */
    const playlistDiv = document.getElementById('playlist');
    if (!playlistDiv.classList.contains('playlist_hidden')) {
        playlistDiv.classList.add('playlist_hidden');
        playlistBtn.classList.add('playlist_btn_hidden');
    } else {
        playlistDiv.classList.remove('playlist_hidden');
        playlistDiv.classList.add('playlist_visible');
        playlistBtn.classList.remove('playlist_btn_hidden');
        playlistBtn.classList.add('playlist_btn_visible');
    }

    /* changes playlist button icon */
    const playlistBtnIcon = document.getElementById('playlist_btn_icon');
    if (playlistBtnIcon.src == 'file://' + __dirname + '/src/assets/icons/next.png') {
        playlistBtnIcon.src = './src/assets/icons/back.png';
    } else {
        playlistBtnIcon.src = './src/assets/icons/next.png';
    }
});