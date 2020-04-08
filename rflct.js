console.log("hi i'm alive")



window.onload = function(){
	// var num = Math.random()*100; //by multiply by 100, it'll give this number a "ceiling"; 
	// num = Math.floor(num); //takes whatever number you have and rounds it DOWN; cuts off the decimal;
	
	// $(".overlapContainer").animate("transform","translate("+num+"px,"+num+"px);");
	$(".weekOne, .weekTwo, .weekThree, .weekFour, .weekFive, .weekSix, .weekSeven, .weekEight, .weekNine, .weekTen, .weekEleven, .weekTwelve, .weekThirteen, .twoD, .threeD, .fourD, .expD").draggable(); //this is just making it able to move the paragraph;

	// ===================IMAGE====================

	// Code used to create Modal Images is adapted from: 
		// https://www.w3schools.com/howto/howto_css_modal_images.asp
		// https://stackoverflow.com/questions/47798971/several-modal-images-on-page

		// create references to the modal...
		var modal = document.getElementById('myModal');
		// to all images -- note I'm using a class!
		var images = document.getElementsByClassName('myImg');
		// the image in the modal
		var modalImg = document.getElementById("img01");
		// and the caption in the modal
		var captionText = document.getElementById("caption");

		// Go through all of the images with our custom class
		for (var i = 0; i < images.length; i++) {
		  var img = images[i];
		  // and attach our click listener for this image.
		  img.onclick = function(evt) {
		    modal.style.display = "block";
		    modalImg.src = this.src;
		    captionText.innerHTML = this.alt;
		  }
		}

		var span = document.getElementsByClassName("close")[0];

		span.onclick = function() {
		  modal.style.display = "none";
		}
	};

