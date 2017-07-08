const mongoose = require('mongoose');
// create a schema
const testSchema = mongoose.Schema({
  name: String,
  testNest: {
    type: String,
    unique: true
  },
  description: String
});

// create the model
const testModel = mongoose.model('Test', testSchema);

// export the model
module.exports = testModel;


