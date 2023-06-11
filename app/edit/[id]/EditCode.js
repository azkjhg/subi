"use client";
import React, { useEffect, useState } from "react";

import EditComponent from "./EditComponent";
// import { useRouter as useNextRouter } from "next/router";

const Page = ({ id }) => {
  const [result, setResult] = useState(null);

  // const imageUpload = () => {};
  useEffect(() => {
    fetch("/api/post/one", {
      method: "POST",
      body: id,
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("데이터 가져옴 .", response);
          return response.json();
        } else {
          console.log(response);
          throw new Error("데이터 못 가져옴");
        }
      })
      .then((r) => {
        console.log(r, "r");
        setResult(r);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <div>{result && <EditComponent result={result} />}</div>; //result 로딩 하는 거 떄매 컴포넌트 만들었음
};

export default Page;
