lightGallery(document.getElementById("animated-thumbnails-gallery"), {
  autoplayFirstVideo: false,
  pager: false,
  galleryId: "We Believe",
  flipHorizontal: false,
  flipVertical: false,
  rotateLeft: false,
  thumbnail: true,
  plugins: [
    lgZoom,
    lgThumbnail,
    lgShare,
    lgRotate,
    lgFullscreen,
    lgAutoplay
  ],
  mobileSettings: {
    controls: false,
    showCloseIcon: false,
    download: false,
    rotate: false
  }
});