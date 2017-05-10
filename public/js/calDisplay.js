console.log('calDisplay.js loaded');
// Oauth

var calories =[];



function writeCals() {
  var testData = calories[0].meals[0].meal;
  var writeIt = `<h1>${testData}</h1>`;
  var daily = `
  <div class="counter-main calorie-display">
    <div class="day">
      <div class="day-row">
        <div class="meal">
          <h2>${testData}</h2>
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
      </div>
      </div>
    </div>`;

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
