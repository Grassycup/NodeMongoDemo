var express = require('express');
var router = express.Router();
var TestModel = require('../models/test')
var ObjectId = require('mongoose').Types.ObjectId;

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  var query = TestModel.findOne({ _id: id}, function(err, obj) {
    if (err) res.status(500).json(err);
    if(!obj) res.status(404).json( { message: 'not found'});
    else res.json(obj);
  });

});

router.put('/:id', function(req, res, next) {
  var id = req.params.id;
  TestModel.findByIdAndUpdate({ _id: id }, { $set: req.body}, { new: true }, function (err, obj) {
    if (err) res.status(500).json(err);
    if(!obj) res.status(404).json({ message: 'not found'});
    else res.json(obj);
  });
});

router.post('/', function(req, res, next) {
  var test = new TestModel(req.body);
  test.save()
    .then(function(doc) {
      res.status(201).json(doc);
    })
    .catch(function(err){
      res.status(500).json( err);
    });
});

router.delete('/:id', function(req, res, next) {
  TestModel.remove({ _id: req.params.id }, function(err) {
    if (err) res.status(500).json(err);
    res.json({ message: 'record deleted' });
  });
});

module.exports = router;
