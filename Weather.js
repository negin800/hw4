
$(function() {
    lat = 41.8781
    lng = -87.6298
    getWeather()
});


let updateWidget = function(data) {
  console.log("Got weather data:", data)
  $("#weather").html("")

    let html = '<img class="card-img-top bg-primary img-fluid" src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png">'
    html = html + '<div class="card-body">'
    html = html + '<h4 class="card-title">' + "How is the weather\?\!" +'</h4>'
    html = html + '<p class="card-text">It is currently ' +  data.main.temp.toFixed(0) + ' degrees in Chicago. Perfect weather for checking out the books and movies that we have suggested on this page! Enjoy!</p>'
    // html = html + '<a id="get_forecast" href="#" class="btn btn-primary">Get Current Temperature</a>'
    $("#weather").append(html)

    // jQuery("#get_forecast").click(function(){
    //   getLocation()});
  }
  //
  //
  //
  // jQuery("#get_forecast").click(function(){
  //   getLocation()
  // });
  //
  //
  // function getLocation () {
  //     navigator.geolocation.getCurrentPosition(function(position){
  //     lat = position.coords.latitude;
  //     lng = position.coords.longitude;
  //     console.log(position);
  //     getWeather()
  //   })}

    function getWeather(){
    let weatherServiceURL  = 'https://api.openweathermap.org/data/2.5/weather?'
    let apiKey = '8f22b89e0c034e85e4081e21878ad089';
    weatherServiceURL  += 'lat=' +  lat
    weatherServiceURL  += '&lon=' + lng
    weatherServiceURL  +='&appid=' + apiKey + '&units=imperial'
    console.log()
    fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
  }


let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
