'use strict'

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('Is set to 20 degrees by default', function() {
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it('Has a minimum temperature of 10', function(){
    for (var i = 0; i < 11; i++) {
    thermostat.decreaseTemp();
    };
    expect(thermostat.currentTemp()).toEqual(10);
  });

  it('can increase temperature', function() {
    thermostat.increaseTemp();
    expect(thermostat.currentTemp()).toEqual(21);
  });

  it('can decrease temperature', function() {
    thermostat.decreaseTemp();
    expect(thermostat.currentTemp()).toEqual(19);
  });

  it('has PSM on by default', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('turns PSM off', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch PSM back on', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  describe('in PSM on', function(){
    it('maximum temperature is limited to 25', function(){
      for (var i = 0; i < 6; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.currentTemp()).toEqual(25);
    });
  });

  describe('in PSM off', function(){
    it('maximum temperature is limited to 32', function(){
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.currentTemp()).toEqual(32);
    });
  });

  it('can be reset to default temperature', function(){
    for (var i = 0; i < 6; i++) {
      thermostat.increaseTemp();
    }
    thermostat.resetTemp();
    expect(thermostat.currentTemp()).toEqual(20);
  });

  describe('displaying energy usage levels', function(){
    describe('when temperature is below 18 degrees', function(){
      it('is low-level usage', function(){
        for (var i = 0; i < 3; i++) {
          thermostat.decreaseTemp();
        }
        expect(thermostat.energyUsage()).toEqual('low-level')
      });
    });

    describe('when temperature is between 18 and 25 degrees', function(){
      it('is medium-level usage', function(){
        expect(thermostat.energyUsage()).toEqual('medium-level');
      });
    });
    describe('when temperature is above 25 degrees', function(){
      it('is high-level usage', function(){
        thermostat.switchPowerSavingModeOff(); //why it doesnt work when I want to change it directly with thermostat.powerSavingOn = false;
        for (var i = 0; i < 6; i++) {
          thermostat.increaseTemp();
        }
        expect(thermostat.energyUsage()).toEqual('high-level')
      });
    });
  });

});
