'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('Increases the temperature with up', function() {
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('Decrease the temperature with down', function() {
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
  for (var i = 0; i < 11; i++) {
    thermostat.down();
  }
  expect(thermostat.getTemperature()).toEqual(10);
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can turn power saving mode off', function() {
    thermostat.turnPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can turn power saving mode on', function() {
    thermostat.turnPowerSavingModeOff();
    thermostat.turnPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can reset the temperature to the default', function() {
    for (var i = 0; i < 6; i++ ) {
      thermostat.up();
    }
    thermostat.resetTemperature();
    expect(thermostat.getTemperature()).toEqual(20);
  })

  describe('when power saving mode is on', function(){
    it('has a maximum temperature of 25', function(){
      for (var i = 0; i < 6; i++){
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(25);
    });
  });

  describe('when power saving mode is off', function(){
    it('has a maximum temperature of 32', function(){
      thermostat.turnPowerSavingModeOff();
      for (var i = 0; i < 13; i++){
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(32);
    });
  });

  describe('displaying usage levels', function() {
    describe('when the temperature is below 18 degrees', function() {
      it('it is considered low-usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });

    describe('when the temperature is between 18 and 25 degrees', function() {
      it('it is considered medium-usage', function() {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });

    describe('when the temperature is anything else', function() {
      it('it is considered high-usage', function() {
        thermostat.powerSavingMode = false;
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});
