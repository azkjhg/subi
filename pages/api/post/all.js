import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {

  try {

    const client = await connectDB;
    const db = client.db("subi");

    let result = await db.collection("post").find().toArray();
    result = await result.map((a) => {
      a._id = a._id.toString();
      return a;
    });

    console.log(result, "리절트");
    return response.status(200).json(result);
  } catch (error) {
    return response.status(500).json("업로드 실패");
  }
}
