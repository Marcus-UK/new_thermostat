$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat._temperature);

  $('#temperature-up').click(function() {
  thermostat.up();
  $('#temperature').text(thermostat.getTemperature());
});
});
