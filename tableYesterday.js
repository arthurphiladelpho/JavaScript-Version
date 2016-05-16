//function createTable(){
	results.innerHTML = " ";
	var moment = 0;
	var time = Math.round((Date.now()/1000)-((86400/24)*3));
	var key = "e964d33cde30c141523b46f7f27e0007";
	var btnValue = this.value;
	var lat;
	var lng;
	var rows = [];

	for (var i = 0; i < places.length; i++){
			if(places[i]['name'] === btnValue){
				lat = places[i]['latitude'];
				lng = places[i]['longitude'];
			}	
	}

	function Forecast(){
		this.init();
	}

	Forecast.prototype = {
		init: function(){
			window.getWeather = this.getWeather;
		},
		getWeather: function(apikey, lat, lng, time, moment, index, array){

			var callback = function(data){
				var linhaPar = index % 2;
				console.log(linhaPar);
				var linhaCSS = "";
				if(linhaPar){
					linhaCSS = 'class="linhaPar"';
				} else {
					linhaCSS = 'class="linhaImpar"';
				}
				var newRow = "<tr " + linhaCSS + "><td>" + "In " + moment + " hours" + "</td><td>" + data.currently.summary + "</td><td>"  + data.currently.temperature + " ºF </td><td>" + data.currently.windSpeed + " mph </td><td>" + Math.round(data.currently.precipProbability * 100) + "% </td><td>" + Math.round(data.currently.humidity * 100) + "% </td><td>" + data.currently.pressure + " mb </td></tr>";
				array[index] = newRow;
				if(array.length === 11){
					results.innerHTML = "<tr><th>Moment</th><th>Summary</th><th>Temperature</th><th>Wind Speed</th><th>Chance of Rain</th><th>Humidity</th><th>Pressure</th></tr>";
					// var linhaPar = 0;
					for(var i = 0 ; i < array.length; i++){
						results.innerHTML += array[i];
					}
				} else {
					return
				}
			};

			function displayResults(array){
				for(var i = 0; i < 11; i++){
				apiCall(key, lat, lng, time, moment, i, array);	
				time += 43200;
				moment +=12;
				}
			}	
	
			displayResults(rows);

		}
			
	};	
	for(var i = 0; i < buttons.length; i++){
		document.getElementById(buttons[i].id).addEventListener("click", function(){
			for (var i = 0; i < places.length; i++){
				if(places[i]['name'] === btnValue){
				lat = places[i]['latitude'];
				lng = places[i]['longitude'];
				}
			}
			var getJSON = function(){
				var src = "https://api.forecast.io/forecast/e964d33cde30c141523b46f7f27e0007/" + -22.98 + "," + -43.26 + "," + Math.round((Date.now()/1000)-((86400/24)*3)) + "?callback=getWeather";
				var script = document.createElement("script");
				script.src = src;
				document.body.appendChild(script);
			};
			getJSON;
			var weatherTable = new Forecast();	
		});  		
	}