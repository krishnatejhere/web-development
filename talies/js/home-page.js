const music = document.querySelector(".music-scroll").querySelectorAll("img");
const musicName = document.getElementById("music-name");
const video = document.querySelector(".video-scroll").querySelectorAll("img");
const videoName = document.getElementById("video-name");
const sw = document.getElementById("switch");

        Array.from(music).forEach(element => {
            element.addEventListener("mouseover", () => {
                musicName.innerHTML = "MUSIC : " + element.alt;
            });

            element.addEventListener("mouseout", () => {
                musicName.innerHTML = "MUSIC";
            });
        });

        Array.from(video).forEach(element => {
            element.addEventListener("mouseover", () => {
                videoName.innerHTML = "VIDEO : " + element.alt;
            });

            element.addEventListener("mouseout", () => {
                videoName.innerHTML = "VIDEO";
            });
        });

