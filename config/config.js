var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'calchart'
    },
    port: process.env.PORT || 3000,
    db: process.env.DB_CONN_CALORIECOUNTER
  },

  test: {
    root: rootPath,
    app: {
      name: 'calchart'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/calchart-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'calchart'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/calchart-production'
  }
};

module.exports = config[env];
