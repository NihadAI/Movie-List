"use server"
import Movie from '../models/movie.model';
import { connect } from '../mongodb/mongoose.js';

// export const createMovie = async (url, title, year) => {
//   try {
//     await connect();
//     console.log("connected to mongo");
    

//     const movie = new Movie({
//       url: url,
//       title: title,
//       year: year,
//     });

//     await movie.save(); // Save the new movie document to the database.

//     return movie;
//   } catch (error) {
//     console.log('Error creating movie:', error);
//   }
// };

export const createMovie = async (data) => {
  try {
    await connect();
    console.log("connected to MongoDB");

    const movie = new Movie(data);
    await movie.save();

    return movie;
  } catch (error) {
    console.error('Error creating movie:', error);
    throw error;
  }
};

export const updateMovie = async (id, url, title, year) => {
  try {
    await connect();

    const movie = await Movie.findOneAndUpdate(
      { _id: id }, // Identify the movie to update using its unique `_id`.
      {
        $set: {
          url: url,
          title: title,
          year: year,
        },
      },
      { new: true } // Return the updated document.
    );

    if (!movie) {
      throw new Error('Movie not found'); // Handle case where the movie doesn't exist.
    }

    return movie;
  } catch (error) {
    console.log('Error updating movie:', error);
  }
};

export const deleteMovie = async (id) => {
  try {
    await connect();

    await Movie.findOneAndDelete({ _id: id }); // Delete the movie document using `_id`.
  } catch (error) {
    console.log('Error deleting movie:', error);
  }
};
