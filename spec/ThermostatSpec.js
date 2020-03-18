'use strict'

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('Is set to 20 degrees by default', function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it('Has a minimum temperature of 10', function(){
    for (var i = 0; i < 10; i++) {
      thermostat.decreaseTemp();
    }
    expect(thermostat.temperature()).toEqual(10);
  });


});
