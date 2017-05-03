var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
  Meal = mongoose.model('Meal');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});
router.get('/test', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});
router.get('/calories', function(req, res, next) {
  // Need to fix -- throws error when their are no meals in the database
  Meal.find(function (err, meals) {
    if (err) return next(err);
    console.log(meals);
      var calArray = [];
      for (var i = 0; i < meals.length; i++) {
        if (meals[i].calories != undefined ){
          calArray.push(meals[i].calories);
        }
      }
      var totalCals = calArray.reduce( (prev, curr) => prev + curr);
  console.log('this is the total calories ', totalCals);
    res.render('meals', {
      title: 'Calories route rendering index page',
      meals: meals,
      calories: totalCals
    });
  });
});
// test route to ajax the calories from the db
router.get('/getcalories', function(req, res, next) {
  Meal.find(function (err, meals) {
    if (err) return next(err);
    console.log(meals);
      var calArray = [];
      for (var i = 0; i < meals.length; i++) {
        if (meals[i].calories != undefined ){
          calArray.push(meals[i].calories);
        }
      }
      var totalCals = calArray.reduce( (prev, curr) => prev + curr);
  console.log('this is the total calories ', totalCals);
    res.json({meals})
  });
});

router.get('/api', function(req, res, next) {
  res.render('api', {
    title: 'API page rendered'
  });
});

router.post('/api', function(req, res, next) {
  var meal = new Meal();
  meal.meal = req.body.meal;
  meal.food = req.body.food;
  meal.calories = req.body.calories;
  console.log(req.body.meal);
  meal.save(function (err, meal) {
    if (err) return next(err);
    res.json(meal)
    console.log('success');
  })
})
