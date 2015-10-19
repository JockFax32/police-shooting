
var jQuery = function(){
$('a').attr('target','_blank');
$('#gred').css('color','#D50f25');
$('#gblue').css('color','#3369E8');
$('#ggray').css('color','#666666');
}

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

// Function for getting data
var getData = function(map) {
  $.ajax({  
    url: ('data/response.json'),
    type:"get",
    dataType: "json",
    success: function(data){
      customBuild(map,data); 
      console.log(data);   
    }
  });
}

// Loop through your data and add the appropriate layers and points
var customBuild = function(map,data) {
  //layers
  var raceBlackLayerGroup = new L.LayerGroup([]);
  var raceWhiteLayerGroup = new L.LayerGroup([]);
  var raceAsianLayerGroup = new L.LayerGroup([]);
  var raceNativeLayerGroup = new L.LayerGroup([]);
  var raceIslanderLayerGroup = new L.LayerGroup([]); 
  var raceUnknownLayerGroup = new L.LayerGroup([]);
  //Circle marker attr
  var circleColor=null; 
  var circleFill= null;
  //Nums for cross tab
  var blackHit=0;
  var blackKilled =0; 
  var whiteHit = 0;
  var whiteKilled = 0;

  // Loop through the array to add layers 
  for (var i=0; i < data.length; i++){
    var armed = data[i]["Armed or Unarmed?"];
    var circle = L.circleMarker([data[i].lat,data[i].lng],{
        radius: 10,
    });
  
  //Create colored circles
  if (armed == "Unarmed"){
    circleColor='#3369E8'; // Google Blue
    circleFill ="#3369E8";
    }
    else if (armed == "Armed"){
      circleColor="#D50f25"; // Google Red
      circleFill ="#D50f25";
      }
    else if (armed=="Unknown" || armed==-1){
    circleColor="#666666"; // Google Gray
    circleFill ="#666666";
      }
     
    // Create popup tags on markers
  if (data[i].Race == "Black or African American") {
    circle.bindPopup("<b>Name: </b>" + data[i]["Victim Name"]+
      "</br>"+"<b>Age: </b>" + data[i]["Victim's Age"]);  
          // Tally for cross tab 
        if(data[i]["Hit or Killed?"]=="Killed"){
            blackKilled++;
          }
          else if (data[i]["Hit or Killed?"]=="Hit"){
            blackHit++;
          }
    circle.addTo(raceBlackLayerGroup);
    }
    else if (data[i].Race == "White"){
      circle.bindPopup("<b>Name: </b>" + data[i]["Victim Name"]+
        "</br>"+"<b>Age: </b>" + data[i]["Victim's Age"]);
          // Tally for cross tab 
        if(data[i]["Hit or Killed?"]=="Killed"){
            whiteKilled++;
          }
          else if (data[i]["Hit or Killed?"]=="Hit"){
            whiteHit++;
        }
      circle.addTo(raceWhiteLayerGroup);
      }
    else if (data[i].Race == "Asian"){
      circle.bindPopup("<b>Name: </b>" + data[i]["Victim Name"]+
        "</br>"+"<b>Age: </b>" + data[i]["Victim's Age"]);
      circle.addTo(raceAsianLayerGroup);
      }
    else if (data[i].Race =="American Indian or Alaska Native"){
      circle.bindPopup("<b>Name: </b>" + data[i]["Victim Name"]+
        "</br>"+"<b>Age: </b>" + data[i]["Victim's Age"]);
      circle.addTo(raceNativeLayerGroup);
      }
    else if (data[i].Race=="Native Hawaiian or Other Pacific Islander"){
      circle.bindPopup("<b>Name: </b>" + data[i]["Victim Name"]+
         "</br>"+"<b>Age: </b>" + data[i]["Victim's Age"]);
      circle.addTo(raceNativeLayerGroup);
      }
    else if (data[i].Race == "Unknown"|| data[i].Race ==-1){
      circle.bindPopup("<b>Name: </b>" + data[i]["Victim Name"]+
        "</br>"+"<b>Age: </b>" + data[i]["Victim's Age"]);
      circle.addTo(raceUnknownLayerGroup);
      }
    circle.setStyle( {color:circleColor, fillColor:circleFill});
    }

   // Add Layers to map
   var raceLayers ={
    "Black": raceBlackLayerGroup,
    "White": raceWhiteLayerGroup,
    "Asian": raceAsianLayerGroup,
    "American Indian or Alaska Native": raceNativeLayerGroup,
    "Native Hawaiian or Pacific Islander": raceIslanderLayerGroup,
    "Unidentified": raceUnknownLayerGroup,
   }  
    // Add layers to control
    L.control.layers(null,raceLayers).addTo(map);
    
    //Add values to table
    $("#blackKilled").html(blackKilled);
    $("#blackHit").html(blackHit);
    $("#whiteHit").html(whiteHit);
    $("#whiteKilled").html(whiteKilled);

 } 


