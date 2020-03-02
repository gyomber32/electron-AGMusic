const lyricsBtn = document.getElementById('lyrics_btn');

lyricsBtn.addEventListener('click', () => {
    const lyricsDiv = document.getElementById('lyrics');
    if(lyricsDiv.style.display == '') {
        lyricsDiv.style.display = 'none';
    } else {
        lyricsDiv.style.display == 'block'
    }

    /* changes lyrics button icon */
    const lyricsBtnIcon = document.getElementById('lyrics_btn_icon');
    if (lyricsBtnIcon.src == 'file://' + __dirname + '/src/assets/icons/back.png') {
        lyricsBtnIcon.src = './src/assets/icons/next.png';
    } else {
        lyricsBtnIcon.src = './src/assets/icons/back.png';
    }
});