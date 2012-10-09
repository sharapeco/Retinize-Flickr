window.addEventListener("load", function() {
	var Larger = {t: "m", s: "q", m: "z", z: "b"};
	
	var d = document
	, mainImg = d.getElementById("liquid-photo")
	, thumbs = d.getElementsByClassName("pc_img")
	;
	mainImg && (mainImg.onload = function() {
		retinize(mainImg);
		mainImg.onload = null;
	});
	[].slice.call(thumbs).forEach(function(img) {
		retinize(img);
	});
	
	function retinize(img) {
		var src = img.getAttribute("src"), m;
		if (!(m = src.match(/staticflickr\.com\/\d+\/\w+_([tsmz])\.jpg$/))) {
			return;
		}
		
		var newSrc = src.replace(/\w\.jpg$/, Larger[m[1]] + ".jpg"), newImage;
		newImage = new Image;
		newImage.onerror = function() {
			img.setAttribute("src", src);
		};
		newImage.src = newSrc;
		img.setAttribute("src", newSrc);
	}
});
