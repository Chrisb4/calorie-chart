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

var daily = `<div class="day">
  <div class="day-row">
    <div class="meal">
      <h2>Lunch</h2>
    </div>
    <div class="meal-items">
      <div class="item">
        <h3>Tuna Sammy</h3>
      </div>
      <div class="calories">
        <h3>356</h3>
      </div>
    </div>
    <div class="item">
      <h3>Chips</h3>
    </div>
    <div class="calories">
      <h3>200</h3>
    </div>
  </div>
  </div>`;
  var testData = calories[0];

$('#target').append(testData);
