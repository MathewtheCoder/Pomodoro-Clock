//Slider Hide
$('.slider').hide();
//Code to set time limit of timer
var time = 25;
//Slider
function outputUpdate(vol) {
  time = vol;
  var timer = time*60;
  //Set the data-timer value
  var dataClk = $( "#DateCountdown" ).data();
  dataClk.timer = timer;
	document.querySelector('#volume').value = vol;
}
//Set time
var timer = time*60;
//Set the data-timer value
var dataClk = $( "#DateCountdown" ).data();
dataClk.timer = timer;
//Code to construct timer
$("#DateCountdown").TimeCircles({
    "animation": "smooth",
    "bg_width": 1.2,
    "fg_width": 0.1,
    "circle_bg_color": "#A1A2E7",
    "time": {
        "Days": {
            "text": "Days",
            "color": "#FFCC66",
            "show": false
        },
        "Hours": {
            "text": "Hours",
            "color": "#99CCFF",
            "show": false
        },
        "Minutes": {
            "text": "Minutes",
            "color": "#D23156",
            "show": true
        },
        "Seconds": {
            "text": "Seconds",
            "color": "#D23156",
            "show": true
        }
    }
}); 
//Code to control the timer settings
var play = "glyphicon glyphicon-play";
var pause = "glyphicon glyphicon-pause";
//When play is pressed
$(document).on('click', ".start",function(){ $("#DateCountdown").TimeCircles().start(); 
$(this).removeClass("start").addClass("stop");
$(this).children().removeClass("glyphicon-play").addClass("glyphicon-pause");
});
//When Paused

$(document).on('click', ".stop",function(){ $("#DateCountdown").TimeCircles().stop(); 
$(this).removeClass("stop").addClass("start");
$(this).children().removeClass("glyphicon-pause").addClass("glyphicon-play");                           
});
//When we click restart
$(".restart").click(function(){ $("#DateCountdown").TimeCircles().restart(); }); 
//Destroy Timer
$(document).on('click', ".edit",function(){
  $('.btnmenu').hide();
  $('.slider').show();
}); 
//Rebulid Timer
$(document).on('click', ".ok",function(){
  $('.slider').hide();
  $("#DateCountdown").TimeCircles().destroy();
  //$("#DateCountdown").TimeCircles().rebulid();
  $("#DateCountdown").TimeCircles({
    "animation": "smooth",
    "bg_width": 1.2,
    "fg_width": 0.1,
    "circle_bg_color": "#A1A2E7",
    "time": {
        "Days": {
            "text": "Days",
            "color": "#FFCC66",
            "show": false
        },
        "Hours": {
            "text": "Hours",
            "color": "#99CCFF",
            "show": false
        },
        "Minutes": {
            "text": "Minutes",
            "color": "#D23156",
            "show": true
        },
        "Seconds": {
            "text": "Seconds",
            "color": "#D23156",
            "show": true
        }
    }
}); 
  $('.btnmenu').show();
});
//Make sound when time runs out
//$("#DateCountdown").TimeCircles().destroy();