// START slideshow code
let i = 0;
let images = [];
let time = 3000;

images[0] = "img/bag_eds.jpg";
images[1] = "img/backg2.jpg";
images[2] = "img/backg.jpg";
images[3] = "img/squid.jpg";


// change image
function changeImg() {
	document.slide.src = images[i];
	
	if (i < images.length -1 ) {
		i++;
	} else {
		i = 0;
	}
	setTimeout("changeImg()", time);
}

window.onload = changeImg;
// END of slideshow

