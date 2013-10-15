$( document ).ready(function() {
	 var imlocation = "img/";
	 var currentdate = 0;
	 var image_number = 0;
	 function ImageArray (n) {
	   this.length = n;
	   for (var i =1; i <= n; i++) {
	     this[i] = ' '
	   }
	 }
	 image = new ImageArray(7)
	 image[0] = 'oneoak1.jpg'
	 image[1] = 'oneoak2.jpg'
	 image[2] = 'oneoak3.jpg'
	 image[3] = 'oneoak4.jpg'
	 image[4] = 'oneoak5.jpg'
	 image[5] = 'oneoak6.jpg'
	 image[6] = 'oneoak7.jpg'
	 var rand = 60/image.length
	 function randomimage() {
	 	currentdate = new Date()
	 	image_number = currentdate.getSeconds()
	 	image_number = Math.floor(image_number/rand)
	 	return(image[image_number])
	 }
	 $('.img-background').show(image);


	$('.index_panel').hide();
	$('.index_panel').slideDown({
		'duration':800,
		'easing':'easeOutCubic'
	});



	 // document.write("<img src='" + imlocation + randomimage()+ "'>");
});