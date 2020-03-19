$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemp();

  $('#temp-up').on('click', function(){
    thermostat.increaseTemp();
    updateTemp();
  });

  $('#temp-down').on('click', function(){
    thermostat.decreaseTemp();
    updateTemp();
  });

  $('#temp-reset').on('click', function(){
    thermostat.resetTemp();
    $('#psm-status').text('ON');
    updateTemp();
  });

  $('#psm-on').on('click', function(){
    thermostat.switchPowerSavingModeOn();
    $('#psm-status').text('ON');
    updateTemp();
  });

  $('#psm-off').on('click', function(){
    thermostat.switchPowerSavingModeOff();
    $('#psm-status').text('OFF');
    updateTemp();
  });

  function updateTemp(){
    $('#temperature').text(thermostat.temp);
    $('#temperature').attr('class', thermostat.energyUsage());
  };


});
