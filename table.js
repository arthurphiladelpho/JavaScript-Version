
	// function createTable(){
	// 	results.innerHTML = " ";
	// 	var moment = 0;
	// 	var time = Math.round((Date.now()/1000)-((86400/24)*3));
	// 	var key = "e964d33cde30c141523b46f7f27e0007";
	// 	var btnValue = this.value;
	// 	var beach;
	// 	var lat;
	// 	var lng;
	// 	var rows = [];
		
	// 	for (var i = 0; i < places.length; i++){
	// 			if(places[i]['name'] === btnValue){
	// 				lat = places[i]['latitude'];
	// 				lng = places[i]['longitude'];
	// 			}	
	// 		}
		

	// 	function apiCall(apikey, lat, lng, time, moment, index, array){
			
			
	// 		var weather = "https://api.forecast.io/forecast/" + key + "/" + lat + "," + lng + "," + time + "?callback=?";

	// 		function callback(data){
	// 			var linhaPar = index % 2;
	// 			console.log(linhaPar);
	// 			var linhaCSS = "";
	// 			if(linhaPar){
	// 				linhaCSS = 'class="linhaPar"';
	// 			} else {
	// 				linhaCSS = 'class="linhaImpar"';
	// 			}
	// 			var newRow = "<tr " + linhaCSS + "><td>" + "In " + moment + " hours" + "</td><td>" + data.currently.summary + "</td><td>"  + data.currently.temperature + " ºF </td><td>" + data.currently.windSpeed + " mph </td><td>" + Math.round(data.currently.precipProbability * 100) + "% </td><td>" + Math.round(data.currently.humidity * 100) + "% </td><td>" + data.currently.pressure + " mb </td></tr>";
	// 			array[index] = newRow;
	// 			if(array.length === 11){
	// 				results.innerHTML = "<tr><th>Moment</th><th>Summary</th><th>Temperature</th><th>Wind Speed</th><th>Chance of Rain</th><th>Humidity</th><th>Pressure</th></tr>";
	// 				// var linhaPar = 0;
	// 				for(var i = 0 ; i < array.length; i++){
	// 					results.innerHTML += array[i];
	// 				}
	// 			} else {
	// 				return
	// 			}
	// 		}
	// 		$.getJSON(weather, callback);

	// 	}

	// 	function displayResults(array){
	// 		for(var i = 0; i < 11; i++){
	// 			apiCall(key, lat, lng, time, moment, i, array);	
	// 			time += 43200;
	// 			moment +=12;
	// 		}
	// 	}
		
	// 	displayResults(rows);
	// }

	// for(var i = 0; i < buttons.length; i++){
	// document.getElementById(buttons[i].id).addEventListener("click", createTable);  		
	//}

	for(var i = 0; i < buttons.length; i++){
			document.getElementById(buttons[i].id).addEventListener("click", function(){
				results.innerHTML = " ";
				var btnValue = this.value;
				console.log(btnValue)
				var moment = 0;
				var time = Math.round((Date.now()/1000)-((86400/24)*3));
				var key = "e964d33cde30c141523b46f7f27e0007";
				var lat;
				var lng;
				for (var i = 0; i < places.length; i++){
					if(places[i]['name'] === btnValue){
						lat = places[i]['latitude'];
						lng = places[i]['longitude'];
					}	
				}
				var getJSON = function(){
					var src = "https://api.forecast.io/forecast/" + key + "/" + lat + "," + lng + "," + time + "?callback=?";
					var script = document.createElement("script");
					script.type ="text/javascript";
					script.src = src;
					document.body.appendChild(script);
					console.log(src);
				};
				getJSON();
				//var weatherAPI = new Forecast();
			});  	
	}	
