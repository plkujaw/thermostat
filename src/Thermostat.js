'use strict'

function Thermostat(){
  this.DEFAULT_TEMP = 20;
  this.temp = this.DEFAULT_TEMP;
  this.MIN_TEMP = 10;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
  this.powerSavingOn = true;
  this.PSM_ON_MAX_TEMP = 25;
  this.PSM_OFF_MAX_TEMP = 32;
};

Thermostat.prototype.currentTemp = function() {
  return this.temp;
};

Thermostat.prototype.increaseTemp = function() {
  if (this.isMaxTemp()) {
    return;
  }
  this.temp += 1;
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.minTemp()) {
    return;
  };
  this.temp -= 1;
};

Thermostat.prototype.minTemp = function() {
  return this.temp === this.MIN_TEMP;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingOn === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingOn = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingOn = true;
  this.temp = this.PSM_ON_MAX_TEMP;
};

Thermostat.prototype.isMaxTemp = function() {
  if (this.isPowerSavingModeOn() === true) {
    return this.temp === this.PSM_ON_MAX_TEMP
  };
  return this.temp === this.PSM_OFF_MAX_TEMP
};

Thermostat.prototype.resetTemp = function () {
  this.temp = this.DEFAULT_TEMP;
  this.switchPowerSavingModeOn();
};

Thermostat.prototype.energyUsage = function () {
  if (this.temp < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-level'
  };
  if (this.temp >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temp <= this.PSM_ON_MAX_TEMP) {
    return 'medium-level'
  };
  return 'high-level'
};
