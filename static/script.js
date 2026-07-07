const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

function toggleMusic() {

    if (music.paused) {
        music.play();
        btn.innerHTML = "⏸ Pause Music";
    } else {
        music.pause();
        btn.innerHTML = "🎵 Play Music";
    }

}
