
// Function to draw your map
var drawMap = function() {

  // Create map and set view
    var map = L.map('map').setView([40.00, -100.00], 4)
  // Create a tile layer variable using the appropriate url
 L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
    
  // Add the layer to your map
    layer.addTo(map)}

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
      var latitude = 0.0;
      var longitude = 0.0;
      for (i=0; i<dat.length; i++){};

        


	// Be sure to add each layer to the map

	// Once layers are on the map, add a leaflet controller that shows/hides layers
  
}


