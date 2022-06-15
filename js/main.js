//nav bar operation
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }

  }

function scroll(){
  $(window).scroll(function () {
    var height = $(window).height();
    var scroll = $(window).scrollTop();
    if (scroll) {
      $(".header-hide").addClass("scroll-header");
    } else {
      $(".header-hide").removeClass("scroll-header");
    }

  });

 // Back to top button
 $(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });
}
   
//form javascript
function SubForm (){
  var timeval = document.getElementById("timestamp");

  //get time stamp and set it
  const date = new Date();
  const nDate = date.toDateString();
  const time = date.toLocaleTimeString();
  timeval.value = nDate + " " + time;

  $.ajax({
    url:"https://api.apispreadsheets.com/data/oHTzQTV5VcW1OuUc/",
    type:"post",
    data:$("#myForm").serializeArray(),
    success: function(){
      alert("Form Data Submitted :)")
      document.getElementById("myForm").reset();
    },
    error: function(){
      alert("There was an error :(")
    }
  });
}
