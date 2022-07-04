//nav bar operation
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }

  }

//SCROLL TO FUNCTION
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.body.style = "transition: ease-in 0.3s; behavior: smooth;";
  document.documentElement.scrollTop = 0;
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

var linksToDisp = document.getElementById("hiid");
//display external developer links
function displaylinks(){
	
	linksToDisp.style.display = "block";
	linksToDisp.style.transition = "ease-in 0.3s";
	
	const t = setTimeout(stopShow, 5000);
	function stopShow(){
		linksToDisp.style.display = "none";
	}

}
