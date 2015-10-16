
// Function to draw your map
var drawMap = function() {

  // Create map and set view
    var map = L.map('map').setView([40.00, -100.00], 4)
  // Create a tile layer variable using the appropriate url
 L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
    
  // Add the layer to your map
    layer.addTo(map)
  }

  // Execute your function to get data
 
// Function for getting data
var getData = function() {

  // Execute an AJAX request to get the data in data/response.js
  $.ajax({  
    url: ('../../data/response.json'),
    type:"get",
    success: function(dat){
      customBuild(dat);
    }

  });
  // When your request is successful, call your customBuild function
}
// Loop through your data and add the appropriate layers and points
var customBuild = function(dat) {
  var race = new L.LayerGroup([]);
  var armed = new L.LayerGroup([]);
  var lat = 0;
  var lng = 0;
    //Loop through the array to add layers 
    for (i=0; i<dat.length; i++){
      lat = dat.d[i].lat;
      lng = dat.d[i].lng;

    

      


      // var circle = new L.circleMarker([lat, lng]).addTo(map);
      
      // Add control flow to determine which layer the circle belongs to
      // circle.addTo(layer))



      }





	// Be sure to add each layer to the map

	// Once layers are on the map, add a leaflet controller that shows/hides layers
  
}

// http://stackoverflow.com/questions/17371039/how-to-add-markers-bulk-in-leaflet

// Objects in the JSON file:
// {"Date Searched":"10/15/1986",
// "State":"AZ - Arizona",
// "County":"maricopa",
// "City":"Phoenix",
// "Agency Name":"phoenix police",
// "Victim Name":"David Valenzuela",
// "Victim's Age":"24",
// "Victim's Gender":"Male",
// "Hit or Killed?":"Killed",
// "Armed or Unarmed?":"Armed",
// "Weapon":"Handgun",
// "Summary":"Man in wheelchair threatened two officers with gun. they shot and killed him",
// "Source Link":"http://www.fox10phoenix.com/story/18078667/man-in-wheelchair-shot-to-death-by-police",
// "lat":33.4467681,
// "lng":-112.0756724}


