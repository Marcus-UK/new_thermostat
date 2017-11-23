function Thermostat() {
  this.powerSavingMode = true;
  this.MIN_TEMP = 10;
  this.PSM_ON_MAX_TEMP = 25;
  this.PSM_OFF_MAX_TEMP = 32;
  this.DEFAULT_TEMP = 20;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18
  this._temperature = this.DEFAULT_TEMP;
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

  Thermostat.prototype.resetTemperature = function() {
    return this._temperature = this.DEFAULT_TEMP;
  }

  Thermostat.prototype._isMinimumTemperature = function() {
    return this._temperature === this.MIN_TEMP;
  }

  Thermostat.prototype._isMaximumTemperature = function() {
    if (this.isPowerSavingModeOn() === false) {
      return this._temperature === this.PSM_OFF_MAX_TEMP;
    }
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

  Thermostat.prototype.energyUsage = function() {
    if (this._temperature < this.MEDIUM_ENERGY_USAGE_LIMIT){
      return 'low-usage';
    }
    if(this._temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this._temperature <= this.PSM_ON_MAX_TEMP) {
      return 'medium-usage';
    }
    return 'high-usage';
  }
