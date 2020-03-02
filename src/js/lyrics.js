const lyricsBtn = document.getElementById('lyrics_btn');

lyricsBtn.addEventListener('click', () => {
    const lyricsDiv = document.getElementById('lyrics');
    if (!lyricsDiv.classList.contains('lyrics_hidden')) {
        lyricsDiv.classList.add('lyrics_hidden');
    } else {
        lyricsDiv.classList.remove('lyrics_hidden');
        lyricsDiv.classList.add('lyrics_visible');
    }

    /* changes lyrics button icon */
    const lyricsBtnIcon = document.getElementById('lyrics_btn_icon');

    if (lyricsBtnIcon.src == 'file://' + __dirname + '/src/assets/icons/back.png') {
        lyricsBtnIcon.src = './src/assets/icons/next.png';
    } else {
        lyricsBtnIcon.src = './src/assets/icons/back.png';
    }
});