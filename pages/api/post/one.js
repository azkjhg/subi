import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  console.log(request.body, "요청 바디");
  try {

    const client = await connectDB;
    const db = client.db("subi");
    let result = await db
      .collection("post")
      .findOne({ _id: new ObjectId(request.body) });
    result._id = result._id.toString();
    console.log(result, "리절트");
    return response.status(200).json(result);
  } catch (error) {
    return response.status(500).json("업로드 실패");
  }
}
