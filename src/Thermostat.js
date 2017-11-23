function Thermostat() {
  this.powerSavingMode = true;
  this.MIN_TEMP = 10;
  this.PSM_ON_MAX_TEMP = 25;
  this._temperature = 20;
}

  Thermostat.prototype.getTemperature = function() {
    return this._temperature;
  }

  Thermostat.prototype.up = function() {
    if (this._isMaximumTemperature()) {
      return;
    }
    this._temperature += 1;
  }

  Thermostat.prototype.down = function() {
    if (this._isMinimumTemperature()) {
      return ;
    }
    this._temperature -= 1;
  }

  Thermostat.prototype._isMinimumTemperature = function() {
    return this._temperature === this.MIN_TEMP;
  }

  Thermostat.prototype._isMaximumTemperature = function() {
    return this._temperature === this.PSM_ON_MAX_TEMP;
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
