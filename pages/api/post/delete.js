import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
export default async function handler(request, response) {
  if (request.method == "POST") {
    let session = await getServerSession(request, response, authOptions);
    // console.log(session, "세션");

    /// auth 부분
    ////////////////////////////////
    /// db 부분
    console.log(request.body, " 서버 바디");
    const db = (await connectDB).db("subi");
    let preResult = await db
      .collection("post")
      .findOne({ _id: new ObjectId(request.body) });
    // console.log(preResult.author);

    let result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(request.body) });
    return response.status(200).json("삭제 완료");

    return response.status(400).json("삭제 안됨");
  }
}
