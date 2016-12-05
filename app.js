// This example creates a 2-pixel-wide red polyline showing the path of William
// Kingsford Smith's first trans-Pacific flight between Oakland, CA, and
// Brisbane, Australia.

function initMap() {

    var test = function() {
        console.log('yo test')
        $.ajax({
            url: "",
            context: document.body
        }).done(function() {
            $( this ).addClass( "done" );
        });
    }

    test();

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    // center: {lat: 42.344, lng: -71.074},
    center: {lat: 42.30106, lng: -71.0631},
    mapTypeId: 'terrain'
  });

  DrivePath = []
  // list = [
  //           {lat: 42.34414, long: -71.07199},
  //           {lat: 42.34317, long: -71.07542},
  //           {lat: 42.34420, long: -71.07199},
  //           {lat: 42.34320, long: -71.07542}
  //       ]

    list = [
        // {lat: 42.31102, long: -71.10297},	{lat: 42.31121, long: -71.10337},
        {lat: 42.30106, long: -71.0631},	{lat: 42.30084, long: -71.0638},
        // {lat: 42.32128, long: -71.11414},	{lat: 42.3198, long: -71.11391},
        // {lat: 42.35236, long: -71.06458},	{lat: 42.3525, long: -71.06749},
        // {lat: 42.35784, long: -71.06609},	{lat: 42.35698, long: -71.06988},
        // {lat: 42.34322, long: -71.08281},	{lat: 42.34299, long: -71.08246},
        // {lat: 42.32678, long: -71.10416},	{lat: 42.32793, long: -71.10399},
        // {lat: 42.33824, long: -71.03},	{lat: 42.33741, long: -71.02998},
        // {lat: 42.33824, long: -71.03},	{lat: 42.33741, long: -71.02998},
        // {lat: 42.2917, long: -71.0667},	{lat: 42.29443, long: -71.06762},

        // {lat: 42.31102, long:	-71.10294},	{lat: 42.31121, long:	-71.1034},
        {lat: 42.30109, long:	-71.0631},	{lat: 42.30087, long:	-71.0638},
        // {lat: 42.32128, long:	-71.11411},	{lat: 42.3198, long:	-71.11394},
        // {lat: 42.35236, long:	-71.06455},	{lat: 42.3525, long:	-71.06752},
        // {lat: 42.35787, long:	-71.06609},	{lat: 42.35695, long:	-71.06988},
        // {lat: 42.34322, long:	-71.08278},	{lat: 42.34299, long:	-71.08249},
        // {lat: 42.32678, long:	-71.10413},	{lat: 42.32793, long:	-71.10402},
        // {lat: 42.33824, long:	-71.02997},	{lat: 42.33741, long:	-71.03001},
        // {lat: 42.33824, long:	-71.02997},	{lat: 42.33741, long:	-71.03001},
        // {lat: 42.2917, long:	-71.06667},	{lat: 42.29443, long:	-71.06765},
    ]

// 42.31102	-71.10297	42.31121	-71.10337	42.31102	-71.10294	42.31121	-71.10334
// 42.30106	-71.0631	42.30084	-71.0638	42.30109	-71.0631	42.30087	-71.0638

  var setDrivePath = function(lat, long) {
      DrivePath.push(new google.maps.LatLng(lat, long))
  }

  // var DrivePath = [
  //     new google.maps.LatLng(42.34414, -71.07199),
  //     new google.maps.LatLng(42.34317, -71.07542),
  //     new google.maps.LatLng(42.34420, -71.07199),
  //     new google.maps.LatLng(42.34320, -71.07542),
  // ];
// ORIGINAL
//   42.34414	-71.07199
// 42.34317	-71.07542
// 42.34414	-71.07199
// 42.34317	-71.07542

  for (var i=0;i<list.length;i++) {
      setDrivePath(list[i].lat, list[i].long)
  }
  // setDrive

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


  // var Colors = [
  //     "blue",
  //     "red",
  //     "orange",
  //     "white",
  //     "black",
  //     "green",
  //     "yellow",
  //     "purple"
  // ];

  // var strokeWeights = [
  //     2,
  //     7,
  //     3,
  //     2,
  //     3,
  //     4,
  //     8
  // ]

  var Colors = ['red', 'green', 'orange', 'red', 'green', 'orange', 'red', 'green', 'orange', 'red', 'green', 'orange', 'red', 'green', 'orange']
  var strokeWeights = [
      2,
      2,
      2,
      2,
      2,
      2, 2, 2, 2, 2, 2
  ]

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
