function initMap() {

    var test = function() {
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
    center: {lat: 42.31121, lng: -71.10340},
    mapTypeId: 'terrain'
  });

  DrivePath = []

    list = [
      {startlat: 42.31102 , startlong: -71.10297, stoplat: 42.31121, stoplong: -71.10337, side: 'Even'},
      {startlat: 42.31102, startlong:  -71.10294, stoplat: 42.31121, stoplong: -71.10334, side: 'Odd'},
      // {startlat: 42.31102, startlong: -71.10300, stoplat: 42.31121, stoplong: -71.10340, 'side': 'Odd'},
    ]

    // list = [
    //   {lat: 42.35636, long: -71.05946},  {lat: 42.35716, long: -71.06125},
    //   {lat: 42.35639, long: -71.05946},  {lat: 42.35719, long: -71.06125},
    // ]

  var setDrivePath = function(lat, long) {
      DrivePath.push(new google.maps.LatLng(lat, long))
  }

  for (var i=0;i<list.length;i++) {
      setDrivePath(list[i].startlat, list[i].startlong);
      setDrivePath(list[i].stoplat, list[i].stoplong);
  }

  var lookupColor = function(index) {
    if (index != 0) {
      index = index - 1; 
    }
    console.log('index in lookupColor', index)
    var set = list[index];
    if (set != undefined) {
      if (set.side == 'Even') {
        var color = 'orange';
      } else if (set.side == 'Odd') {
        var color = 'green';
      }
    } else {
      var color = 'red'
    }
    console.log('color is', color)
    return color;
  }

  for (var i = 0; i < DrivePath.length-1; i++) {
      if (i%2 == 0) {
          // console.log('i is ', i, 'and drivePath[i]]', DrivePath[i], 'and plus 1 is', DrivePath[i+1])
        var PathStyle = new google.maps.Polyline({

                path: [DrivePath[i], DrivePath[i+1]],
                strokeColor: lookupColor(i),
                strokeOpacity: 1.0,
                strokeWeight: 2,
                offset: 10,
                map: map

        });
    }
  }
  PathStyle.setMap(map);

}
