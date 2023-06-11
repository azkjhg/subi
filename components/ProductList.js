"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Card from "./Card";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

export default function ProductList({ result }) {
  /* result = {
    _id: '647de9f9faf38f75d5af8a33',
    title: '잘 되겠지',
    content: '',
    url: 'https://firebasestorage.googleapis.com/v0/b/rlqja364.appspot.com/o/image%2F200513170408g553_d3n_thumb.jpg20d24997-a4b1-448a-bc10-f50cb3c4ef29?alt=media&token=f92b85f7-cb80-4733-b679-beb605ee61d6',      
    imageRef: { _service: [Object], _location: [Object] },
    author: '관리자
  } */

  const DataDelete = (e, i) => {
    if (result.url && result.imageRef) {
      const imageRef = ref(storage, result.imageRef._location.path_);

      deleteObject(imageRef)
        .then(() => {
          console.log("이미지 삭제 완료");
        })
        .catch((error) => {
          console.error("이미지 삭제 에러:", error);
        });
    }
    console.log(result, e, i, "리절트가 머고");
    fetch("/api/post/delete", {
      method: "POST",
      body: result[i]._id.toString(),
    })
      .then(async (response) => {
        return response.json();
      })
      .then((response) => {
        if (response === "삭제 안됨") {
          return;
        } else {
          e.target.parentElement.style.opacity = 0;
          setTimeout(() => {
            e.target.parentElement.style.display = "none";
          }, 1000);
        }
      });
  };


  // const [newResult, setNewResult] = useState(result);

  // // 버튼 클릭 시 실행되는 함수
  // const buttonClick = () => {



  //   // result 초기화
  //   setNewResult([]);

  //   // 매물정보 배열 순회
  //   let 몰랑 = []
  //   result.forEach(item => {
  //     // 매물정보 객체의 '매물정보' 속성이 '아파트'인 경우 result에 추가
  //     if (item.매물종류 == '아파트') {
  //       // setNewResult(prevResult => [...prevResult, item]);
  //       몰랑 = [...몰랑, item]
  //       console.log(몰랑)
  //     }
      
  //   });
  //   console.log(몰랑)
  //   setNewResult(몰랑)
  // };


  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 lg:max-w-[100rem] lg:px-8">
        <h2 className="text-2xl my-2 font-bold tracking-tight text-gray-900">
          부동산 매물
        </h2>

        <Card result={result}/>

      </div>
      
    </div>
  );
}
