function doFirst(){
	var x = document.getElementById('canvas');
	// declare a 2d drawing surface
	canvas = x.getContext('2d');
	// strokeRect means the outline of a rectangle that starts at coordinates 10px from the left hand coner and 10px down, and the shape is 100X200p
	// canvas.strokeRect(10,10,100,200);
	// the fillRect is the fill in of a recangle
	// NOTICE....THE FILL STYLE IS DECLARED BEFORE HAND
	canvas.fillStyle="blue";
	canvas.strokeStyle="red";
	canvas.strokeRect(10,10,100,200);
	canvas.fillRect(10,10,100,200);
	// to erase some of the rectabgle use Clear 
	canvas.clearRect(20,20,50,90);


}

window.addEventListener("load", doFirst, false);