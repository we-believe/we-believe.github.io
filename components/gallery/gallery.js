lightGallery(document.getElementById("animated-thumbnails"), {
  autoplayFirstVideo: false,
  pager: true,
  galleryId: "animated-thumbnails",
  flipHorizontal: false,
  flipVertical: false,
  rotateLeft: false,
  thumbnail: true,
  download: false,
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