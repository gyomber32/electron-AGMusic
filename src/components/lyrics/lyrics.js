const lyricsBtn = document.getElementById('lyrics_btn');

lyricsBtn.addEventListener('click', () => {
    const lyricsBtnIcon = document.getElementById('lyrics_btn_icon');
    if (lyricsBtnIcon.src == 'file://' + __dirname + '/assets/icons/back.svg') {
        lyricsBtnIcon.src = './assets/icons/next.svg';
    } else {
        lyricsBtnIcon.src = './assets/icons/back.svg';
    }
});