
// Declare a variable for map
var map;
// Get lattitude and longitude of Canberra Centre
var canberraCentre = new google.maps.LatLng(-35.2792284, 149.1321033);
// Initialise the map
function initMap() {
    // Define the properties for Canberra Centre map
    var canberraMap = {
        center: canberraCentre,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Create a map object for Canberra Centre
    // using canberraMap and the <div> element with id="googleMap"
    map = new google.maps.Map(
              document.getElementById("googleMap"), canberraMap);

    // markers
    addBelluci(map);
    addIS(map);
    addBluGinger(map);
    addJewelOfIdian(map);
    addChairmanYip(map);
    addNoodleHouse(map);

}

function addBelluci(map) {
    // •	Belluci’s Italian
    var belluciRestaurants =
        new google.maps.LatLng(-35.3192209,149.1309521);
    var markerBelluci = new google.maps.Marker({
        position: belluciRestaurants,
    });

    markerBelluci.setMap(map);

    var contentBelluci =
    ' <h1>Bellucis Italian</h1>' +
    ' <img src="images/location/bellucis_logo.jpg" ' +
    '      style="float:left; width:25%; margin-right:10px;">' +
    ' <p>"Bellucis demonstrates a new concept,' +
    ' a new food philosophy – the dawn of a new era'+
    ' in Canberra dining. Having been established more than 20'+
    ' years ago, Bellucis fast became an iconic name in Canberra.'+
    ' To bring you the finest dishes, we’ve gone back to traditional'+
    ' Italian routes, creating simple, rustic food." <br><br>'+
    '<a class="link" href=" https://bellucis.com.au/home.php">Click here</a> for the Bellucis Italian website.'+
    '</p>';


    var infoBelluci = new google.maps.InfoWindow({
        content: contentBelluci
    });

    google.maps.event.addListener(markerBelluci, 'click',
    function () {
        infoBelluci.open(map, markerBelluci);
    });
}

function addIS(map) {
    // •	IS
    var iSRestaurants =
        new google.maps.LatLng(-35.2749873,149.1301169);
    var markerIS = new google.maps.Marker({
        position: iSRestaurants,
    });

    markerIS.setMap(map);

    var contentIS =
    ' <h1>•	Italian and Sons</h1>' +
    ' <img src="images/location/is_logo.jpg" ' +
    '      style="float:left; width:25%; margin-right:10px;">' +
    ' <p>"A casual Italian trattoria that specialises in wood ' +
    ' Do not miss daily changing main dishes of the day such as their wood '+
    ' roast suckling pig, rosemary, garlic, baked baby fennel & mustard fruits." '+
    ' Australian Good Food Guide.<br><br>'+
    '<a class="link" href=" https://ISs.com.au/home.php">Click here</a> for the Italian and Sons website.'+
    '</p>';


    var infoIS = new google.maps.InfoWindow({
        content: contentIS
    });

    google.maps.event.addListener(markerIS, 'click',
    function () {
        infoIS.open(map, markerIS);
    });
}

function addBluGinger(map) {
    var blugingerRestaurants =
        new google.maps.LatLng(-35.2770356,149.129781);
    var markerBluginger = new google.maps.Marker({
        position: blugingerRestaurants,
    });

    markerBluginger.setMap(map);

    var contentBluginger =
    ' <h1>Blu addBluGinger</h1>' +
    ' <img src="images/location/bluginger_logo.jpg" ' +
    '      style="float:left; width:25%; margin-right:10px;">' +
    ' <p>"At Blu Ginger we use only the freshest locally sourced produce, ' +
          ' combined with authentic spices imported directly from the sub-continent, '+
          ' to offer classic, traditional recipes with a modern twist, '+
          ' creating a unique and memorable dining experience for you." '+
          ' <br><br>'+
          ' <a class="link" href="http://www.bluginger.com.au/">Click here</a> for the Blu Ginger website.'+
    ' </p>';


    var infoBluginger = new google.maps.InfoWindow({
        content: contentBluginger
    });

    google.maps.event.addListener(markerBluginger, 'click',
    function () {
        infoBluginger.open(map, markerBluginger);
    });
}

function addJewelOfIdian(map) {
    var jewelOfIndianRestaurants =
        new google.maps.LatLng(-35.3205801,149.1306366);
    var markerJewelOfIndian = new google.maps.Marker({
        position: jewelOfIndianRestaurants,
    });

    markerJewelOfIndian.setMap(map);

    var contentJewelOfIndian =
    ' <h1>Jewel Of Indian</h1>' +
    ' <img src="images/location/jewel_logo.jpg" ' +
    '      style="float:left; width:25%; margin-right:10px;">' +
    ' <p>"Finding a balance between dishes inspired by authentic recipes  ' +
          ' recipes and creating a modern take on classic cuisine sees a loyal following '+
          ' following of Canberra locals returning for a mouth-watering feast." '+
          ' Australian Good Food Guide Website. '+
          ' <br><br>'+
          ' <a class="link" href="http://www.jewelofindia.com.au/ ">Click here</a> for the Jewel Of Indian website.'+
    ' </p>';


    var infoJewelOfIndian = new google.maps.InfoWindow({
        content: contentJewelOfIndian
    });

    google.maps.event.addListener(markerJewelOfIndian, 'click',
    function () {
        infoJewelOfIndian.open(map, markerJewelOfIndian);
    });
}

function addChairmanYip(map) {
    var chairmanYipRestaurants =
        new google.maps.LatLng(-35.3116522,149.1317604);
    var markerChairmanYip = new google.maps.Marker({
        position: chairmanYipRestaurants,
    });

    markerChairmanYip.setMap(map);

    var contentChairmanYip =
    ' <h1>Chairman & Yip</h1>' +
    ' <img src="images/location/chairman_logo.jpg" ' +
    '      style="float:left; width:25%; margin-right:10px;">' +
    ' <p>"The Chairman & Yip has become one of Canberra’s longest ' +
          ' standing and most highly regarded institutions,'+
          ' having received numerous awards over the years,'+
          ' offering an ever consistent and professional quality'+
          ' of service for corporate dining, conferences and presentations.'+
          ' <br><br>'+
          ' <a class="link" href="http://chairmangroup.com.au/chairmanyip/ ">Click here</a> for the Chairman and Yip website.'+
    ' </p>';


    var infoChairmanYip = new google.maps.InfoWindow({
        content: contentChairmanYip
    });

    google.maps.event.addListener(markerChairmanYip, 'click',
    function () {
        infoChairmanYip.open(map, markerChairmanYip);
    });
}

function addNoodleHouse(map) {
    var noodleHouseRestaurants =
        new google.maps.LatLng(-35.2503224,149.1342374);
    var markerNoodleHouse = new google.maps.Marker({
        position: noodleHouseRestaurants,
    });

    markerNoodleHouse.setMap(map);

    var contentNoodleHouse =
    ' <h1>Dickson Asian Noodle House: </h1>' +
    ' <img src="images/location/noodle_logo.jpg" ' +
    '      style="float:left; width:25%; margin-right:10px;">' +
    ' <p>"The Dickson Asian Noodle House specialises in traditional Malaysian,  ' +
          ' Thai and Lao cuisine. The dining atmosphere '+
          ' is casual and cosy providing for a la carte dining, banquets and take away." '+
          ' ." Vibe FM Website. '+
          ' <br><br>'+
          ' <a class="link" href="https://www.facebook.com/pages/Dickson-Asian-Noodle-House/156690017692038 ">Click here</a> for the Blu Ginger website.'+
    ' </p>';


    var infoNoodleHouse = new google.maps.InfoWindow({
        content: contentNoodleHouse
    });

    google.maps.event.addListener(markerNoodleHouse, 'click',
    function () {
        infoNoodleHouse.open(map, markerNoodleHouse);
    });
}

google.maps.event.addDomListener(window, 'load', initMap);
