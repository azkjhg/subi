import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import GptCode from "./GptCode";

const Page = async () => {
  let session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div className="m-2">
      <h4>글작성</h4>
      <GptCode />
      {/* <ImageUpload /> */}
    </div>
  );
};

export default Page;
