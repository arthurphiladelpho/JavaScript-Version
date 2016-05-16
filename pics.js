pictures.innerHTML ="";;
var beach;

function Flickr(beach){
	this.init();
}

Flickr.prototype = {
	init: function(){
		window.getPhotos = this.getPhotos;
	},
	getPhotos: function(data){
		var resultsHTML = '<h3>' + 'Recent Pictures of ' + this.beach + '</h3>'
		resultsHTML += "<ul>";
		 for(var i = 0; i < data.items.length; i++){
		 		resultsHTML += '<li class="images">';
				resultsHTML += '<a href="' + data.items[i]['link'] + ' " class="image">';
				resultsHTML += '<img src="' + data.items[i]['media']['m'] + ' "></a>';
				resultsHTML += "</li>";	
		 }
		resultsHTML += "</ul>";
		console.log(beach);
		console.log(this.beach);
		pictures.innerHTML = resultsHTML;
	}	
};


for(var i = 0; i < buttons.length; i++){
		document.getElementById(buttons[i].id).addEventListener("click", function(){
			beach = this.value;
			var getJSON = function(){
				var src = "http://api.flickr.com/services/feeds/photos_public.gne?tags=";
				src += beach;
				src += "&format=json&jsoncallback=getPhotos";
				var script = document.createElement("script");
				script.src = src;
				document.body.appendChild(script);
				console.log(src);
			};
			getJSON();
			var flickrPics = new Flickr();
		});  	
}	
