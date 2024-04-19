const music = [
    {"name": "Poolamme pilla",
     "poster": "music posters/Poolamme Pilla  HanuMan (Telugu)  Prasanth Varma Teja Sajja, Amritha  GowraHari  Kasarla Shyam - 1280x720.jpg",
     "source": "music/Poolamme Pilla  HanuMan (Telugu)  Prasanth Varma Teja Sajja, Amritha  GowraHari  Kasarla Shyam - 128.mp3"},
    {"name": "Children of the Sky",
     "poster": "music posters/Imagine Dragons - Children of the Sky (a Starfield song) [Official Music Video] - 1280x720.jpg",
     "source": "music/Imagine Dragons - Children of the Sky (Lyrics) - 128.mp3"},
    {"name": "Bones",
     "poster": "music posters/Imagine Dragons - Bones (Official Lyric Video) - 1280x720.jpg",
     "source": "music/Imagine Dragons - Bones (Lyrics) - 128.mp3"},
    {"name": "Smooth Criminal",
     "poster": "music posters/Michael Jackson - Smooth Criminal (Official Video) - 1280x720.jpg",
     "source": "music/Michael Jackson - Smooth Criminal (Lyrics) - 128.mp3"},
    {"name": "Runaway",
     "poster": "music posters/AURORA - Runaway - 1280x720.jpg",
     "source": "music/AURORA - Runaway (Lyrics) - 128.mp3"},
    {"name": "I am Only Human",
     "poster": "music posters/Rag'n'Bone Man - Human (Official Video) - 1280x720.jpg",
     "source": "music/Rag'n'Bone Man - Human (Official Video) - 128.mp3"}
];

let musicIndex;
const playButton = document.getElementById("play-pause");
const player = document.getElementById("audio-player");
const musicName = document.getElementById("music-name");
const poster = document.getElementById("album-cover");
const slider = document.getElementById("progress-bar");
const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");
var playerSrc; 
const search = document.getElementById("music-search");

//search the music
search.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        const searchElement = document.getElementById("music-search").value;
        music.forEach(element => {
            if(element.name === searchElement) {
                playerSrc = element.source; // Assign the source to playerSrc
                player.src = playerSrc; // Update the player source
                poster.src = element.poster; // Update the poster source
                musicName.textContent = element.name; // Update the music name

            }
        });
    }
});

//get the music
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const altName = urlParams.get('name');
    musicName.textContent = music[altName - 1].name;
    playerSrc = music[altName - 1].source; // Assign the source to playerSrc
    player.src = playerSrc; // Update the player source
    poster.src = music[altName - 1].poster; // Update the poster source
    console.log(playerSrc); // This will log the playerSrc to the console

    // Find index of currently playing music
    musicIndex = music.findIndex(item => item["name"] === musicName.textContent);
    console.log(music[musicIndex]);
});

//progress bar
slider.addEventListener("input", function() {
    player.currentTime = (slider.value / 100) * player.duration;
});

//update the time
player.ontimeupdate = function() {
    slider.value = (player.currentTime / player.duration) * 100;
    currentTime.textContent = formatTime(player.currentTime);
    duration.textContent = formatTime(player.duration);
}

//format the time
const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

//change the music to previous one
function previous() {
    musicIndex--;
    if(musicIndex < 0) {
        musicIndex = music.length - 1;
    }
    player.src = music[musicIndex].source;
    poster.src = music[musicIndex].poster;
    musicName.textContent = music[musicIndex].name;
}

//change the music to next one
function next() {
    musicIndex++;
    if(musicIndex > music.length - 1) {
        musicIndex = 0;
    }
    player.src = music[musicIndex].source;
    poster.src = music[musicIndex].poster;
    musicName.textContent = music[musicIndex].name;
}


/**
 * Toggle play/pause of the audio player.
 */
function playPause() {
    var audio = document.getElementById("audio-player");

    // If the audio is paused, play it and update the play button with the pause icon.
    if (audio.paused) {
        playButton.innerHTML = `
            <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="32" fill="white" />
                <rect width="8" height="40" x="24" y="20" fill="black" rx="4" ry="4" />
                <rect width="8" height="40" x="48" y="20" fill="black" rx="4" ry="4" />
            </svg>`;
        audio.play();
    
    // If the audio is playing, pause it and update the play button with the play icon.
    } else {
        playButton.innerHTML = `
            <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                <!-- Circle -->
                <circle cx="40" cy="40" r="30" fill="white" />
                <!-- Triangle -->
                <polygon points="27.5,20 60,40 27.5,60" fill="black" />
            </svg>`;
        audio.pause();
    }

}
