import { connectDB } from "@/util/database";
import React from "react";
import ListItem from "./ListItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const List = async () => {
  let session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }


  const client = await connectDB;
  const db = client.db("subi");

  let result = await db.collection("post").find().toArray({
    noCache: true,
  });
  result = await result.map((a) => {
    a._id = a._id.toString();
    return a;
  });

  return (
    <div className="m-4">{result && <ListItem result={result} />}</div>
  );
};

export default List;
