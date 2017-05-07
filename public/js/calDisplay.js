console.log('calDisplay.js loaded');
// Oauth

var calories =[];

function getCals() {
  // ajax in the calories
  var loadCals = $.ajax({
    url: 'getcalories',
    type: 'GET',
    dataType: 'json',
    data: calories
  });
  loadCals.done(function(data) {
    calories.push(data)
    console.log(data)
  });
  loadCals.fail(function(jqXHR, testStatus, errorThrown) {
    console.log(errorThrown);
  });
}

getCals();
