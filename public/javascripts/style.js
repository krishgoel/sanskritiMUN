// Links container top-space
var topnavHeight = document.getElementById('topnav').offsetHeight;
// var topnavLinksContainer = document.getElementById("topnavLinksContainer");
// topnavLinksContainer.style.paddingTop = (topnavHeight/5)+"px";
var bannerSection = document.getElementById('bannerSection');
// bannerSection.style.paddingTop = ((topnavHeight+20)+"px");

// Countdown timer
// Set the date we're counting down to
var countDownDate = new Date("Apr22, 2020 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + " days " + hours + ":"
  + minutes + " hours";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


// Committee card popups

$("#disecCard").click(function(){
  $("#nonPopUp").css("display", "none");
  $("#disec").css("display", "block");
  $("html, body").animate({ scrollTop: 0 }, "fast");
});

$("#ecofinCard").click(function(){
  $("#nonPopUp").css("display", "none");
  $("#ecofin").css("display", "block");
  $("html, body").animate({ scrollTop: 0 }, "fast");
});

$("#loksabhaCard").click(function(){
  $("#nonPopUp").css("display", "none");
  $("#loksabha").css("display", "block");
  $("html, body").animate({ scrollTop: 0 }, "fast");
});

$("#uncswCard").click(function(){
  $("#nonPopUp").css("display", "none");
  $("#uncsw").css("display", "block");
  $("html, body").animate({ scrollTop: 0 }, "fast");
});

$("#uncaCard").click(function(){
  $("#nonPopUp").css("display", "none");
  $("#unca").css("display", "block");
  $("html, body").animate({ scrollTop: 0 }, "fast");
});

$("#ncon1793Card").click(function(){
  $("#nonPopUp").css("display", "none");
  $("#ncon1793").css("display", "block");
  $("html, body").animate({ scrollTop: 0 }, "fast");
});

$("#unscCard").click(function(){
  $("#nonPopUp").css("display", "none");
  $("#unsc").css("display", "block");
  $("html, body").animate({ scrollTop: 0 }, "fast");
});

$("#alliedCard").click(function(){
  $("#nonPopUp").css("display", "none");
  $("#allied").css("display", "block");
  $("html, body").animate({ scrollTop: 0 }, "fast");
});

$("#axisCard").click(function(){
  $("#nonPopUp").css("display", "none");
  $("#axis").css("display", "block");
  $("html, body").animate({ scrollTop: 0 }, "fast");
});

$("#colgadCard").click(function(){
  $("#nonPopUp").css("display", "none");
  $("#colgad").css("display", "block");
  $("html, body").animate({ scrollTop: 0 }, "fast");
});

$(".close").click(function(){
  $(".committeePopUp").css("display", "none");
  $("#nonPopUp").css("display", "block");
})