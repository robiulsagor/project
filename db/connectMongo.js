import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
const cached = {};

// async function connectMongo() {
//   if (!MONGO_URI) {
//     throw new Error(
//       "Please define the MONGO_URI environment variable inside .env.local"
//     );
//   }
//   if (cached.connection) {
//     console.log("already connected!");
//     return cached.connection;
//   }
//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };
//     cached.promise = mongoose.connect(MONGO_URI, opts);
//   }
//   try {
//     console.log("connected!");
//     cached.connection = await cached.promise;
//   } catch (e) {
//     cached.promise = undefined;
//     throw e;
//   }
//   return cached.connection;
// }

async function connectMongo() {
  try {
    await mongoose.connect(MONGO_URI);
  } catch (err) {
    console.log(err.message);
  }
}
export default connectMongo;
