$(document).ready(function() {
  $('#current-city').change(function() {
  var city = $('#current-city').val();

  $.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=7345a781561a8095e5c9680ac945fbd8&units=metric', function(data) {
  $('#current-temp').text(data.main.temp);
  });

});


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
