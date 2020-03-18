'use strict'

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('Is set to 20 degrees by default', function() {
    expect(thermostat.temperature()).toEqual(20);
  });



});
