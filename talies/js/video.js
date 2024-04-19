video = [
    {"name": "Beauty of Mathematics",
     "thumbnail": "video posters/The Beauty of Math - Zimmer [Motivational] - 1280x720.jpg",
     "source": "VIDEOS/Little Dark Age - Tribute to Mathematics [EXTENDED].mp4"},
    {"name": "Physics",
     "thumbnail": "video posters/Little Dark Age - Physics - 1280x720.jpg",
     "source": "VIDEOS/Little Dark Age - Physics.mp4"},
    {"name": "Chemistry",
     "thumbnail": "video posters/The Beauty of Chemistry  Chemistry Motivational Video - 1280x720.jpg",
     "source": "VIDEOS/The Beauty of Chemistry  Chemistry Motivational Video.mp4"},
    {"name": "Computer Science",
     "thumbnail": "video posters/The Power of Computer Science - 1280x720.jpg",
     "source": "VIDEOS/The Power of Computer Science.mp4"},
    {"name": "Philosphy",
     "thumbnail": "video posters/Philosophy - Little Dark Age - 1280x720.jpg",
     "source": "VIDEOS/Philosophy - Little Dark Age.mp4"},
    {"name": "Humanity",
     "thumbnail": "video posters/Humans  I Was Meant to Feel - 1280x720.jpg",
     "source": "VIDEOS/Humans  I Was Meant to Feel.mp4"},
    {"name": "Communism",
     "thumbnail": "video posters/Soviet Union Edit - 1280x720.jpg",
     "source": "VIDEOS/Soviet Union Edit.mp4"}
];

const player = document.getElementById("video-player");
const videoName = document.getElementById("video-name");
var playerSrc; // Declare playerSrc as a global variable
const search = document.getElementById("video-search");

search.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        const searchElement = document.getElementById("video-search").value;
        video.forEach(element => {
            if(element.name === searchElement) {
                playerSrc = element.source; // Assign the source to playerSrc
                player.src = playerSrc; // Update the player source
                player.poster = element.thumbnail; // Use poster to set the thumbnail
                videoName.textContent = element.name;
            }
        });
    }
})

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const altName = urlParams.get('name');
    videoName.textContent = video[altName - 1].name;
    playerSrc = video[altName - 1].source; // Assign the source to playerSrc
    player.src = playerSrc; // Update the player source
    player.poster = video[altName - 1].thumbnail; // Use poster to set the thumbnail
});
