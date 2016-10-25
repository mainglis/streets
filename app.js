// This example creates a 2-pixel-wide red polyline showing the path of William
// Kingsford Smith's first trans-Pacific flight between Oakland, CA, and
// Brisbane, Australia.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: 42.344, lng: -71.074},
    mapTypeId: 'terrain'
  });

  // var flightPlanCoordinates = [
  //   {lat: 37.772, lng: -122.214},
  //   {lat: 21.291, lng: -157.821},
  //   {lat: -18.142, lng: 178.431},
  //   {lat: -27.467, lng: 153.027}
  // ];
  // var flightPath = new google.maps.Polyline({
  //   path: flightPlanCoordinates,
  //   geodesic: true,
  //   strokeColor: '#FF0000',
  //   strokeOpacity: 1.0,
  //   strokeWeight: 2
  // });
  //
  // flightPath.setMap(map);
  var DrivePath = [
    //   new google.maps.LatLng(42.34414, -71.07199),
    //   new google.maps.LatLng(42.34340, -71.07560),
      new google.maps.LatLng(42.34414, -71.07199),
      new google.maps.LatLng(42.34317, -71.07542),
      new google.maps.LatLng(42.34420, -71.07199),
      new google.maps.LatLng(42.34320, -71.07542),
    //   new google.maps.LatLng(-18.142599, 178.431),
    //   new google.maps.LatLng(-27.46758, 153.027892),
    //   new google.maps.LatLng(12.97918167,   77.6449),
    //   new google.maps.LatLng(12.97918667,   77.64487167),
    //   new google.maps.LatLng(12.979185, 77.64479167),
    //   new google.maps.LatLng(12.97918333, 77.64476)
  ];

// original montgomery street
// new google.maps.LatLng(42.34414, -71.07199),
// new google.maps.LatLng(42.34317, -71.07542),

// var PathStyle = new google.maps.Polyline({
//   path: DrivePath,
//   strokeColor: "#FF0000",
//   strokeOpacity: 1.0,
//   strokeWeight: 2
// });
//


  var Colors = [
      "blue",
      "red",
      "orange",
      "white",
      "black",
      "green",
      "yellow",
      "purple"
  ];

  var strokeWeights = [
      2,
      7,
      3,
      2,
      3,
      4,
      8
  ]


    function isOdd(n) {
       return Math.abs(n % 2) == 1;
    }

  for (var i = 0; i < DrivePath.length-1; i++) {
      if (i%2 == 0) {
          console.log('i is ', i, 'and drivePath[i]]', DrivePath[i])
        var PathStyle = new google.maps.Polyline({

                path: [DrivePath[i], DrivePath[i+1]],
                strokeColor: Colors[i],
                strokeOpacity: 1.0,
                strokeWeight: strokeWeights[i],
                offset: 10,
                map: map

        });
    }
  }
  PathStyle.setMap(map);

}
