/**
 * To do in this app:
 * 1. Display the song playing
 * 2. Play the sone
 * 3. Pause the song playing
 * 4. Keep the song repeatedly playing
 * 5. new song
 * 6. Previous song
 * 7. Play the new song randomly
 * 8. Select the song to play.
 * 9. Scroll active songs
 */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = "MUSIC_PLAYER_STORAGE";

const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const cd = $(".cd");
const playBtn = $(".btn-toggle-play");
const player = $(".player");
const progress = $(".progress");
const btnNext = $(".btn-new");
const btnPrev = $(".btn-prev");
const btnRepeat = $(".btn-repeat");
const btnRandom = $(".btn-random");
const playlist = $(".playlist");
const song = $(".song");
const ctitle = $(".cifratitle");
const csinger = $(".cifrasinger");
const cletra = $("#ccifra");

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeated: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    setConfig: function (key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
    },
    songs: [
        {
            name: "Tempo de Alegria",
            singer: "We Believe",
            path: "./components/musicplayer/audio/tempo-de-alegria.mp3",
            image: "./components/musicplayer/image/img1.jpg",
            cifra: "1111In this time of desperation \nWhen all we know is doubt and fear\nThere is only one foundation\nWe believe"
        },

        {
            name: "Quando o meu Eu quiser se levantar",
            singer: "We Believe",
            path: "./components/musicplayer/audio/tempo-de-alegria.mp3",
            image: "./components/musicplayer/image/img1.jpg",
            cifra: "222222In this time of desperation \nWhen all we know is doubt and fear\nThere is only one foundation\nWe believe"
        },
        {
            name: "Galatas 2.18",
            singer: "We Believe",
            path: "./components/musicplayer/audio/tempo-de-alegria.mp3",
            image: "./components/musicplayer/image/img1.jpg",
            cifra: "333333333In this time of desperation \nWhen all we know is doubt and fear\nThere is only one foundation\nWe believe"
        },
        {
            name: "Outra",
            singer: "We Believe",
            path: "./components/musicplayer/audio/tempo-de-alegria.mp3",
            image: "./components/musicplayer/image/img1.jpg",
            cifra: "44444444In this time of desperation \nWhen all we know is doubt and fear\nThere is only one foundation\nWe believe"
        }
    ],

    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
			             <div class="song ${index === this.currentIndex ? "active" : ""
                }" data-index = ${index}>
					        <div class="thumb" style="background-image: url('${song.image}')">
                      		</div>
					        <div class="body">
						        <h3 class="title">${song.name}</h3>
						        <p class="author">${song.singer}</p>
					        </div>
					        </div>
                            </div>`;
            //['']
        });
        playlist.innerHTML = htmls.join("\n");
    },

    //define properties for the app object
    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            }
        });
    },

    //listen to click events on the playlist.
    playlist.onclick = function (e) {
        const songNode = e.target.closest(".song");
        //handle the click on a song
        if (e.target.closest(".song:not(.active)") || !e.target.closest(".option")) {
            _this.currentIndex = Number(songNode.dataset.index);
            _this.loadCurrentSong();
            _this.render(


            );
            audio.play();
        }
    };
},

    //load the current song which is playing
    loadCurrentSong: function () {
        heading.innerText = this.currentSong.name;
cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
audio.src = this.currentSong.path;
ltitle.innerText = this.currentSong.name;
lsinger.innerText = this.currentSong.singer;
lletra.innerText = this.currentSong.letra;
    },
//load config
loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeated = this.config.isRepeated;
    btnRandom.classList.toggle("active", this.isRandom);
    btnRepeat.classList.toggle("active", this.isRepeated);
},

//Load the next song
loadNextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
        this.currentIndex = 0;
    }
    this.loadCurrentSong();
},

//load the previous song
loadPrevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
        this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
},

//play a random song
loadRandomSong: function () {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
},

//scroll the active song to view
scrollActiveSong: function () {
    setTimeout(() => {
        $(".song.active").scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 500);
},

start: function () {
    //load config
    this.loadConfig();

    //define the properties for the app object
    this.defineProperties();

    //default, play the current song

    //listen and handle DOM events
    this.handleEvents();

    //load a song to play
    this.loadCurrentSong();

    //reder the playlist
    this.render();
}
};

app.start();
