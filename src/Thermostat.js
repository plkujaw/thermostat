'use strict'

function Thermostat(){
  this._temperature = 20;
  this._minTemp = 10;
};

Thermostat.prototype.temperature = function () {
  return this._temperature;
};


Thermostat.prototype.increaseTemp = function(degrees) {
  this._temperature += degrees;
};

Thermostat.prototype.decreaseTemp = function(degrees) {
  this._temperature -= degrees;
}

Thermostat.prototype.minTemp = function() {
  return this._minTemp;
};
