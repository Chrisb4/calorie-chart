// Meal model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MealSchema = new Schema({
  date: {type: Date},
  meal: String,
  food: String,
  calories: Number
});

mongoose.model('Meal', MealSchema);