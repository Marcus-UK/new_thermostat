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
    expect(thermostat.up()).toEqual(21);
  });

  it('Decrease the temperature with down', function() {
    expect(thermostat.down()).toEqual(19);
  });
});
