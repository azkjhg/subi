import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

export default async function handler(request, response) {
  let session = await getServerSession(request, response, authOptions);
  request.body = JSON.parse(request.body);
  if (session) {
    request.body.author = session.user.id; // 기존 바디에 추가.
  }

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  const dateString = `${year}-${month}-${day}`;
  console.log(dateString); // 예시 출력: 2023-06-09

  request.body.date = dateString

  try {
    const client = await connectDB;
    const db = client.db("subi");
    await db.collection("post").insertOne(request.body);
    return response.status(200).json("업로드 완료");
  } catch (error) {
    return response.status(500).json("업로드 실패");
  }
}
