import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import EditCode from "./EditCode";
import Head from "next/head";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

export default async function Edit(props) {
  let session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }
  // const client = await connectDB;
  // const db = client.db("subi");
  // let result = await db
  //   .collection("post")
  //   .findOne({ _id: new ObjectId(props.params.id) }, { noCache: true });
  // result._id = result._id.toString();

  return (
    <div className="m-2">
      <h4>수정페이지</h4>
      {/* <form action="/api/post/edit" method="POST">
        <input
          name="title"
          placeholder="title"
          defaultValue={result && result.title}
        />
        <input
          name="content"
          placeholder="content"
          defaultValue={result && result.content}
        />
        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result && result._id.toString()}
        />
        <button type="submit">수정</button>
      </form> */}

      <EditCode id={props.params.id} />
    </div>
  );
}
