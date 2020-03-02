const playlistBtn = document.getElementById('playlist_btn');

playlistBtn.addEventListener('click', () => {

    /* hides playlist */
    const playlistDiv = document.getElementById('playlist');
    if (playlistDiv.style.display == '') {
        playlistDiv.style.display = 'none';
    } else {
        playlistDiv.style.display == 'block'
    }

    /* changes playlist button icon */
    const playlistBtnIcon = document.getElementById('playlist_btn_icon');
    if (playlistBtnIcon.src == 'file://' + __dirname + '/src/assets/icons/next.png') {
        playlistBtnIcon.src = './src/assets/icons/back.png';
    } else {
        playlistBtnIcon.src = './src/assets/icons/next.png';
    }
});