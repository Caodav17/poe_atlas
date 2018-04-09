let mongoose = require('mongoose');

// Map Schema
let mapSchema = mongoose.Schema({
   completed: { type: [Number], min: 1, max: 157} 
});

let completedMaps = module.exports = mongoose.model('completedMaps', mapSchema);