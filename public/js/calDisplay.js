console.log('calDisplay.js loaded');
// Oauth
// User styles 😉
var calories =[];


// data recieved is
// array of objects, each object is a meal that has 7 keys, we need to look  at
  // createdAt
  // meal
  // food -- this is an array of items
  // calories -- this is an array of calories from every item


function writeCals() {

  var testData = calories[0].meals[0].meal;
  var writeIt = `<h1>${testData}</h1>`;


  $('#target').append(daily);
}

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
    writeCals();
  });
  loadCals.fail(function(jqXHR, testStatus, errorThrown) {
    console.log(errorThrown);
  });
}

getCals();
