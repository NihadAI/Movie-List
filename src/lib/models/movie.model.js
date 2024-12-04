
import mongoose from 'mongoose'

// const movieSchema = new mongoose.Schema({
//   url: {
//     type: String,
//     required: true,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   year: {
//     type: String,
//     required: true,
//   },
// }, { timestamps: true });

// const Movie = mongoose.models.Movie || mongoose.model('Movie', movieSchema);

// export default Movie;

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: String, required: true },
  url: { type: String, required: true },
});

const Movie = mongoose.models.Movie || mongoose.model('Movie', MovieSchema);
export default Movie;
