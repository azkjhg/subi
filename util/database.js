import { MongoClient } from "mongodb";

const url = process.env.NEXT_PUBLIC_MONGODB_URL;
console.log('아나 진짜 왜 안왜 냐고 오오',process.env.MONGODB_URL)
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
