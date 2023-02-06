//  Add your code here

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const MovieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast: [String]
});
 
const Movie = mongoose.model('Movie', MovieSchema);
 
module.exports = Movie;