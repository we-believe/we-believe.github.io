var song = document.getElementsByClassName("song");
var song1 = document.getElementById("song1");
var song2 = document.getElementById("song2");
var song3 = document.getElementById("song3");
var title = document.getElementById("title");
var title1 = document.getElementById("title1");
var title2 = document.getElementById("title2");
var title3 = document.getElementById("title3");
var cifra = document.getElementsByClassName("cifra");
var cifra1 = document.getElementById("cifra1");
var cifra2 = document.getElementById("cifra2");
var cifra3 = document.getElementById("cifra3");
var video = document.getElementById("video");


song1.addEventListener("click", function () {
    Array.from(song).forEach(function (el) {
        el.classList.remove("active");
    });
    song1.classList.add("active");
    Array.from(cifra).forEach(function (el) {
        el.classList.add("off");
    });
    cifra1.classList.remove("off");
    title.innerText = title1.innerText;
    video.src = "https://www.youtube.com/embed/SKtderAyqwE";
});
song2.addEventListener("click", function () {
    Array.from(song).forEach(function (el) {
        el.classList.remove("active");
    });
    song2.classList.add("active");
    Array.from(cifra).forEach(function (el) {
        el.classList.add("off");
    });
    cifra2.classList.remove("off");
    title.innerText = title2.innerText;
    video.src = "https://www.youtube.com/embed/wV9Hd2Uv4sI";
});
song3.addEventListener("click", function () {
    Array.from(song).forEach(function (el) {
        el.classList.remove("active");
    });
    song3.classList.add("active");
    Array.from(cifra).forEach(function (el) {
        el.classList.add("off");
    });
    cifra3.classList.remove("off");
    title.innerText = title3.innerText;
    video.src = "https://www.youtube.com/embed/hMfRMLbgGeE";
});
