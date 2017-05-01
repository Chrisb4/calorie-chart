var jsLoaded = "JS  is loaded";
console.log(jsLoaded);
console.log('wheres the js?');

var calButton = document.getElementById('cal-button');
console.log(calButton);

var currentMealsSent = [];


// Clear calorie form after submission
function clearForm() {
  document.forms['calorieForm'].reset();
}
// Post calories on
function postCals() {
  var meal = document.querySelector('input[name=meal]').value;
  var food = document.querySelector('input[name=food]').value;
  var calories = document.querySelector('input[name=calories]').value;
  // model cal data
  var calForm = {
    meal: meal,
    food: food,
    calories: calories
  };
  // ajax post call
  var sendCals = $.ajax({
    url: '/api',
    type: 'POST',
    dataType: 'json',
    data: calForm
  });

  sendCals.done(function(data) {
    currentMealsSent.push(data);
  });

  sendCals.fail(function(jqXHR, textStatus, errorThrown) {
    console.log(errorThrown);
  });
}


calButton.addEventListener('click', function(e){
  e.preventDefault();
  postCals();
  clearForm();
});
