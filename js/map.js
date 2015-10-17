
// Function to draw your map
var drawMap = function() {

  // Create map and set view
    var map = L.map('map').setView([40.00, -100.00], 4)
  // Create a tile layer variable using the appropriate url
 var mapLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
  // Add the layer to your map
    mapLayer.addTo(map);
    getData(map);
  }

  // Execute your function to get data
 
// Function for getting data
var getData = function(map) {

  // Execute an AJAX request to get the data in data/response.js
  $.ajax({  
    url: ('../../data/response.json'),
    type:"get",
    success: function(data){
      console.log("Load was a success");
      customBuild(map,data);
      
    }
    
  });
  // When your request is successful, call your customBuild function
}
// Loop through your data and add the appropriate layers and points
var customBuild = function(map,data) {
  // var race = new L.LayerGroup([]);
  var armed = new L.LayerGroup([]);

    // Loop through the array to add layers 
    for (var i=0; i < data.length; i++){
      var armed = data[i]["Armed or Unarmed?"];
      var race = data[i].Race;
      var circleColor, circleFill;



      if (data[i].Race == "Black or African American") {
        circleColor='blue';
        
      }
      else if (data[i].Race =="White"){
        circleColor="red";
        circleFill ="#f03"
      }else{
        circleColor = "black";
        circleFill= "light-gray";

      }



      var circle = new L.circleMarker([data[i].lat,data[i].lng],{
        color: circleColor,
        fillColor: circleFill,
        radius: 5
      });









      console.log("Race " + race);

    // Add Control flow to determine layer
    // Default to race to allow circles to appear
      circle.addTo(map);
    }
    // Ommit armed at the moment
    L.control.layers(null,race).addTo(map);
    

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


