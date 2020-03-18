'use strict'

function Thermostat(){
  this._temperature = 20;
  this._minTemp = 10;
  this._maxTemp = 25;
};

Thermostat.prototype.temperature = function () {
  return this._temperature;
};

Thermostat.prototype.increaseTemp = function(degrees) {
  this._temperature += 1;
};

Thermostat.prototype.decreaseTemp = function(degrees) {
  this._temperature -= 1;
}

Thermostat.prototype.minTemp = function() {
  return this._minTemp;
};

Thermostat.prototype.maxTemp = function () {
  return this._maxTemp;
};

Thermostat.prototype.powerSavingOn = function () {
  this._maxTemp = 25;
};

Thermostat.prototype.powerSavingOff = function () {
  this._maxTemp = 32;
};
