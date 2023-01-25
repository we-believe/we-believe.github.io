console.log(
    document.querySelectorAll(".carousel-item.h-100.w-100.active")
)
var prev = $("button.carousel-control-prev");

var menuimg = $("div.col-2 div.container img");

var slide = $("div.carousel-item");

var child = $("div.active").child(0);

$(document).ready(function () {
    $('#galleryimg1').click(function () {
        $(document).ready(function () {
            $("#slide1").addClass("active");
        });
    });
});
