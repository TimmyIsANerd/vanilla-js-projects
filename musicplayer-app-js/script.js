const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// Song Titles
const songs = ['corpse','loveisgone'];

// Keep track of songs
let songIndex = 1;

// Initially load song info DOM
loadSong(songs[songIndex]);

// Update Song details
function loadSong(song){
    title.innerText = song
    audio.src = `music`
}