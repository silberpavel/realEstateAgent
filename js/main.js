$(document).ready(function() {

    $(".dws-progress-bar").circularProgress({
      color: "#25ffe4",
      line_width: 17,
      height: "350px",
      width: "350px",
      percent: 0,
      // counter_clockwise: true,
      starting_position: 25
  }).circularProgress('animate', 100, 2000);

    var videobackground = new $.backgroundVideo($('body'), {
      "align": "centerXY",
      "width": 1280,
      "height": 720,
      "path": "video/",
      "filename": "city_video",
      "types": ["mp4","ogg","webm"],
      "preload": true,
      "autoplay": true,
      "loop": true
    });
  
});

$(window).on('load', function () {
  var $preloader = $('#preloader');
  $preloader.delay(1800).fadeOut('slow');
});