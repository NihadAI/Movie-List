"use server"

import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://nihadalizadaxx:2rLy6kj1hyyLKtzl@cluster0.mongodb.net/movielist?retryWrites=true&w=majority"


if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    mongoose.set('strictQuery', false);
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log('MongoDB connected');
      return mongoose;
    }).catch((error) => {
      console.error('MongoDB connection error:', error);
      throw error;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}