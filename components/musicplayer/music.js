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
            lpI: "L11orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.",
            lpII: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.",
            lpIII: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing."
        },

        {
            name: "Quando o meu Eu quiser se levantar",
            singer: "We Believe",
            path: "./components/musicplayer/audio/tempo-de-alegria.mp3",
            image: "./components/musicplayer/image/img1.jpg",
            lpI: "L22orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.",
            lpII: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.",
            lpIII: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing."
        },
        {
            name: "Galatas 2.18",
            singer: "We Believe",
            path: "./components/musicplayer/audio/tempo-de-alegria.mp3",
            image: "./components/musicplayer/image/img1.jpg",
            lpI: "L33orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.",
            lpII: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.",
            lpIII: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing."
        },
        {
            name: "Outra",
            singer: "We Believe",
            path: "./components/musicplayer/audio/tempo-de-alegria.mp3",
            image: "./components/musicplayer/image/img1.jpg",
            lpI: "L44orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.",
            lpII: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.",
            lpIII: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing."
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
                            </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="container rounded bg-gradient bg-gray-600" id="letra">
                        <h4 class="text-center mt-3 mb-0">${song.name}</h4>
                        <p class="text-end mt-0 mb-3">${song.singer}</p>
                        <p class="text-start">${song.lpI}</p>
                        <p class="text-start">${song.lpII}</p>
                        <p class="text-start">${song.lpIII}</p>
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

    // Handle the events
    handleEvents: function () {
        const _this = this;
        //handle the scrolling
        const cdWidth = cd.offsetWidth; //to get the original width of CD element
        document.onscroll = function () {
            const scrollTop = window.scaleY || document.documentElement.scrollTop; // to get the number of pixels users scroll
            const newCdWidth = cdWidth - scrollTop;

            newCdWidth > 0 ? (cd.style.width = newCdWidth + "px") : 0; //set the new width for the CD
            cd.style.opacity = newCdWidth / cdWidth; //set the opacity for the CD
        };

        //handle cd's spinning animation
        const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
            duration: 5000, //5s
            interations: Infinity
        });

        //play/pause the song
        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }

            //when the song is playing
            audio.onplay = function () {
                _this.isPlaying = true;
                player.classList.add("playing");
                cdThumbAnimate.play();
            };

            //show the progress
            audio.ontimeupdate = function () {
                const progressPercent = Math.floor(
                    (this.currentTime / audio.duration) * 100
                );
                progress.value = progressPercent;
            };

            //move to a new position in the audio
            progress.onchange = function (e) {
                const seekTime = (e.target.value / 100) * audio.duration;
                audio.currentTime = seekTime;
            };

            //when this song is paused
            audio.onpause = function () {
                _this.isPlaying = false;
                player.classList.remove("playing");
                cdThumbAnimate.pause();
            };
        };
        //when a user clicks the Next button
        btnNext.onclick = function () {
            if (_this.isRandom) {
                _this.loadRandomSong();
            } else {
                _this.loadNextSong();
            }
            audio.play();
            _this.render();
            _this.scrollActiveSong();
        };

        //when a user clicks the Previous button
        btnPrev.onclick = function () {
            if (_this.isRandom) {
                _this.loadRandomSong();
            } else {
                _this.loadPrevSong();
            }
            audio.play();
            _this.render();
            _this.scrollActiveSong();
        };

        //when a user clicks the random button
        btnRandom.onclick = function () {
            _this.isRandom = !_this.isRandom;
            _this.loadRandomSong();
            _this.setConfig("isRandom", _this.isRandom);
            btnRandom.classList.toggle("active", _this.isRandom);
            audio.play();
        };

        //when a user clicks the repeat button
        btnRepeat.onclick = function () {
            _this.isRepeated = !_this.isRepeated;
            if (_this.isRandom) {
                _this.isRandom = false;
                _this.setConfig("isRepeated", _this.isRepeated);
            }
            btnRepeat.classList.toggle("active", _this.isRepeated);
        };

        //when the current playlist is ended
        audio.onended = function () {
            if (_this.isRepeated) {
                audio.play();
            } else {
                btnNext.click();
            }
        };

        //listen to click events on the playlist.
        playlist.onclick = function (e) {
            const songNode = e.target.closest(".song");
            //handle the click on a song
            if (e.target.closest(".song:not(.active)") || !e.target.closest(".option")) {
                _this.currentIndex = Number(songNode.dataset.index);
                _this.loadCurrentSong();
                _this.render();
                audio.play();
            }
        };
    },

    //load the current song which is playing
    loadCurrentSong: function () {
        heading.innerText = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
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
