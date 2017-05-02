
  console.log("dom loaded");
  var calButton = document.getElementById('cal-button');
  var itemButton = document.getElementById('item-button');

  var currentMealsSent = [];


  // Clear calorie form after submission
  function clearForm() {
    document.forms['calorieForm'].reset();
    $('.new-entry').remove();
  }

  // Post calories on
  function postCals() {
    // var meal = document.querySelector('input[name=meal]').value;
    // var food = document.querySelector('input[name=food]').value;
    // var calories = document.querySelector('input[name=calories]').value;
    // model cal data
    // var calForm = {
    //   meal: meal,
    //   food: food,
    //   calories: calories
    // };
    // ajax post call
    var meal = $('input[name=meal]').val();
    var items = $('input[name=food]').map(function(){
      return $(this).val();
    }).get();
    var calories = $('input[name=calories]').map(function(){
      return $(this).val();
    }).get();
    // model cal data
    var calForm = {
      meal: meal,
      food: items,
      calories: calories
    };
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
  // Test out data model for multiple items
  function calData() {
    var meal = $('input[name=meal]').val();
    var items = $('input[name=food]').map(function(){
      return $(this).val();
    }).get();
    var calories = $('input[name=calories]').map(function(){
      return $(this).val();
    }).get();
    // model cal data
    var calForm = {
      meal: meal,
      food: items,
      calories: calories
    };
    console.log(calForm);
  }


  calButton.addEventListener('click', function(e){
    e.preventDefault();
    postCals();
    calData();
    clearForm();
  });

  // Append item and calorie field to a meal
  var appendTarget = $('#append-target');

  itemButton.addEventListener('click', function(e){
    e.preventDefault();
    $('#append-target').append('<div class="form-group new-entry"><label for="food">Item</label> <input type="test" name="food"> </div> <div class="form-group new-entry"> <label for="calories">Calories</label> <input type="text" name="calories"></div>');
  });
