'use strict'

describe('Can adjust temperature', function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('can increase temperature', function() {
    thermostat.increaseTemp();
    expect(thermostat.temperature()).toEqual(21);
  });

  it('can decrease temperature', function() {
    thermostat.decreaseTemp();
    expect(thermostat.temperature()).toEqual(19);
  });

});

describe('Power saving mode', function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

 it('has power saving mode on by default', function(){
   expect(thermostat.isPowerSavingModeOn()).toBe(true);
 });

 it('turns power saving mode off', function (){
   thermostat.switchPowerSavingModeOff();
   expect(thermostat.isPowerSavingModeOn()).toBe(false);
 });

 it('can switch power saving mode back on', function(){
   thermostat.switchPowerSavingModeOff();
   expect(thermostat.isPowerSavingModeOn()).toBe(false);
   thermostat.switchPowerSavingModeOn();
   expect(thermostat.isPowerSavingModeOn()).toBe(true);
 });

 it('in power saving mode on maximum temperature is limited to 25', function(){

 });
  //
  //
  //
  // it('turns on power saving mode', function (){
  //   // thermostat.powerSavingOn();
  //   expect(thermostat.maxTemp()).toEqual(25);
  // });
  //
  // it('turns off power saving mode', function (){
  //   thermostat.powerSavingOff();
  //   expect(thermostat.maxTemp()).toEqual(32);
  // });

});
