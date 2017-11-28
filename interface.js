$(document).ready(function() {

  displayWeather('London');

  $('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
})

  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  })

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  })

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  })

  $('#powersaving-on').click(function() {
    thermostat.turnPowerSavingModeOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.turnPowerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.getTemperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  function displayWeather(city) {
 var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
 var token = '&appid=ba2200495058d48f8c3ab5402610d726';
 var units = '&units=metric';
 $.get(url + token + units, function(data) {
   $('#current-temperature').text(data.main.temp);
  });
}


});
