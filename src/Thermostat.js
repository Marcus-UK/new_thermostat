function Thermostat() {
  this._temperature = 20;
}

Thermostat.prototype.getTemperature = function() {
  return this._temperature;
}

Thermostat.prototype.up = function() {
  this._temperature += 1;
  return this._temperature;
}
