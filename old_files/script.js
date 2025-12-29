const audio = document.getElementById("audio");
const playlistDiv = document.getElementById("playlist");

const titleInput = document.getElementById("title");
const urlInput = document.getElementById("url");

const addBtn = document.getElementById("addBtn");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let playlist = JSON.parse(localStorage.getItem("playlist")) || [];
let currentIndex = 0;

/* ---------- Persistence ---------- */

function savePlaylist() {
    localStorage.setItem("playlist", JSON.stringify(playlist));
}

/* ---------- Rendering ---------- */

function renderPlaylist() {
    playlistDiv.innerHTML = "";

    playlist.forEach((track, index) => {
        const div = document.createElement("div");
        div.textContent = track.title;
        if (index === currentIndex) div.classList.add("active");

        div.onclick = () => playTrack(index);
        playlistDiv.appendChild(div);
    });
}

/* ---------- Audio Control ---------- */

function playTrack(index) {
    if (!playlist[index]) return;

    currentIndex = index;
    audio.src = playlist[index].url;
    audio.play();

    playBtn.textContent = "❚❚";
    renderPlaylist();
}

/* ---------- Events ---------- */

addBtn.onclick = () => {
    if (!titleInput.value || !urlInput.value) return;

    playlist.push({
        title: titleInput.value,
        url: urlInput.value
    });

    savePlaylist();
    renderPlaylist();

    titleInput.value = "";
    urlInput.value = "";
};

playBtn.onclick = () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "❚❚";
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }
};

nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % playlist.length;
    playTrack(currentIndex);
};

prevBtn.onclick = () => {
    currentIndex =
        (currentIndex - 1 + playlist.length) % playlist.length;
    playTrack(currentIndex);
};

audio.onended = () => nextBtn.onclick();

renderPlaylist();
