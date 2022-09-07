const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

//Music
const songs = [
    {
        name: 'parachute',
        displayName: 'parachute',
        artist: 'John K',
    } ,
    {
        name: 'left&right',
        displayName: 'Left And Right (feat. Jung Kook)',
        artist: 'Charlie Puth',
    } ,
    {
        name: '123',
        displayName: '1, 2, 3 (Feat. Big Naughty)',
        artist: 'GEMINI',
    },
    {
        name: 'notaboutyou',
        displayName: 'Not About You',
        artist: 'JUNNY',
    },
    {
        name: 'angelBaby',
        displayName: 'Angel Baby',
        artist: 'Troye Sivan',
    }
]   

//Check if Playing
let isPlaying = false

//Play
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play','fa-pause');
    playBtn.setAttribute('title', 'Pause')
    music.play();

}
// Pause
function pauseSong() {
    isPlaying = false
    playBtn.classList.replace('fa-pause','fa-play');
    playBtn.setAttribute('title', 'Play')
    music.pause(); 
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong () : playSong()));

// Update DOM
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

// Current Song
let songIndex = 0

 // Previous Song
 function prevSong(){
    songIndex--;
    if (songIndex < 0){
        songIndex = songs.length -1;
    }
    loadSong(songs[songIndex]);
    playSong();
 }

 // Next Song
 function nextSong(){
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
 }

// On load - Select First Song
loadSong(songs[songIndex]);

// Update Progress & Time
function updateProgressBar(e) {
    if (isPlaying){
        const { duration, currentTime } = e.srcElement;
        // Update Progress Bar Width
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = '`${progressPercent}%';
    }
}

// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);