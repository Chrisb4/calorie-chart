// Meal model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MealSchema = new Schema({
  // time: { type: Date, default: Date.now },
  meal: String,
  food: Array,
  calories: Array
}, {timestamps: true});

mongoose.model('Meal', MealSchema);
