function Thermostat() {
  this.powerSavingMode = true
  this.MINIMUM_TEMPERATURE = 10
  this._temperature = 20;
}

  Thermostat.prototype.getTemperature = function() {
    return this._temperature;
  }

  Thermostat.prototype.up = function() {
    this._temperature += 1;
  }

  Thermostat.prototype.down = function() {
    if (this._isMinimumTemperature()) {
      return ;
    }
    this._temperature -= 1;
  }

  Thermostat.prototype._isMinimumTemperature = function() {
    return this._temperature === this.MINIMUM_TEMPERATURE;
  }

  Thermostat.prototype.isPowerSavingModeOn = function() {
    return this.powerSavingMode === true;
  }

  Thermostat.prototype.turnPowerSavingModeOff = function() {
    return this.powerSavingMode = false;
  }

  Thermostat.prototype.turnPowerSavingModeOn = function() {
    return this.powerSavingMode = true;
  }
