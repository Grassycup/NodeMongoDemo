var express = require('express');
var router = express.Router();
var TestModel = require('../models/test')

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  var query = TestModel.findOne({ _id: req.params.id});
  query.then(function (doc) {
    res.json(doc);
  })
    .catch(function(err){
      res.json(err);
    });
});

router.put('/:id', function(req, res, next) {
  res.json({});
});

router.post('/', function(req, res, next) {
  var test = new TestModel({
    name: 'new test',
    testNest: 'nest4',
    description: 'this is a new test'
  });
  test.save()
    .then(function(doc) {
      res.json(201, doc);
    })
    .catch(function(err){
      res.json(err);
    });;
});

router.delete('/:id', function(req, res, next) {
  res.json({});
});

module.exports = router;
