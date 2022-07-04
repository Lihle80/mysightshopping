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
var mycarlink = document.getElementById("cartdiv");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
	
	try{
	//display cart at different position
	mycarlink.animate([
	// keyframes
	  {top: `10px`}
				 ],{
	  // timing options
	  duration: 2000,
	});
	}
	catch{}
	
  } else {
    mybutton.style.display = "none";
	
	try{
	//display cart at different position
	mycarlink.animate([
	// keyframes
	  {top: `75px`}
				 ],{
	  // timing options
	  duration: 2000,
	});
	}
	catch{}
	
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
  var messagetag = document.getElementById("sub-message");
  var loadcicle = document.getElementById("loadersp");
	
  //get time stamp and set it
  const date = new Date();
  const nDate = date.toDateString();
  const time = date.toLocaleTimeString();
  timeval.value = nDate + " " + time;
  
  //show loaders
  loadcicle.style.display = "block";

	const scriptURL = 'https://script.google.com/macros/s/AKfycbzyAdWjoYajoqHFzwezNfqLAKbFA_DNxfkKDFZl8cDKz2iN8aDk21XHg_ViOlZ6EyUG/exec'
	const form = document.forms['sub-com']

	form.addEventListener('submit', e => {
	  e.preventDefault()
	  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => console.log('Success!', response))
		.catch(error => console.error('Error!', error.message))

		document.getElementById("orderForm").reset();   
		cicr(); 
	});
	
  /*$.ajax({
    url:"https://api.apispreadsheets.com/data/oHTzQTV5VcW1OuUc/",
    type:"post",
    data:$("#myForm").serializeArray(),
    success: function(){
      messagetag.innerHTML = "Your message has been sent. Our team will get back to you as soon as possible.";
	  
	  const msg = setTimeout(msgal, 2000)
	  function msgal(){
		  $(messagetag).fadeOut();
	  }
	  
      document.getElementById("myForm").reset();
    },
    error: function(){
      messagetag.innerHTML = "There was an error, your form has not been submitted";
	  
	  const msg = setTimeout(msgal, 2000)
	  function msgal(){
		  $(messagetag).fadeOut();
	  }
    }
  });*/
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
