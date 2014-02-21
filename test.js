
var interval = 1500;

var random_display = 0;

var imageDir = "pics/";

var imageNum = 0;

imageArray = new Array();
imageArray[imageNum++] = new imageItem(imageDir + "01.png");
imageArray[imageNum++] = new imageItem(imageDir + "02.png");
imageArray[imageNum++] = new imageItem(imageDir + "03.png");

var totalImages = imageArray.length

function imageItem(image_location) {

	this.image_item = new Image();
	this.image_item.src = image_location;

}

function randNum(x, y) {

	var range = y - x + 1;
	return Math.floor(Math.random() * range) + x;
	
}

function getNextImage() {

	if (random_display) {
		imageNum = randNum(0, totalImages-1);
		
	}

	else {
		imageNum = (imageNum+1) % totalImages;
	
	}
	
}

var new_image = get_ImageItemLocation(imageArray[imageNum]);
return(new_image);

function getPrevImage() {
	imageNum = (imageNum-1) % totalImages;
	var new_image = get_ImageItemLocation(imageArray[imageNum]);
	return(new_image);
}

function prevImage(place) {
	var new_image = getPrevImage();
	document[place].src = new_image;

}

function switchImage(place) {

	var new_image = getNextImage();
	document[place].src = new_image;
	var recur_call = "switchImage('"+place+"')";
	
	timerID = setTimeout(recur_call, interval);

}

var prev = document.querySelector(".prev");
var next = document.querySelector(".next");


//börjar funktionen bildspel
//bildspel();

prev.onclick ="switchImage ('slideImg';
next.onclick = nextpic;

onLoad="switchImage('slideImg')"

















