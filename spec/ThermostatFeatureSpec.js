'use strict'

describe('Can adjust temperature', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('can increase temperature', function() {
    thermostat.increaseTemp(5);
    expect(thermostat.temperature()).toEqual(25);
  });

  it('can decrease temperature', function() {
    thermostat.decreaseTemp(5);
    expect(thermostat.temperature()).toEqual(15);
  });

});
