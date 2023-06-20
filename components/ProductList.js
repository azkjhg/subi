"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "./Card";
import { MyContext } from './Context';
import React, { useContext } from 'react'
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
  const [buttonSelect, setButtonSelect] = useState('전체')
  /* result = {
    _id: '647de9f9faf38f75d5af8a33',
    title: '잘 되겠지',
    content: '',
    url: 'https://firebasestorage.googleapis.com/v0/b/rlqja364.appspot.com/o/image%2F200513170408g553_d3n_thumb.jpg20d24997-a4b1-448a-bc10-f50cb3c4ef29?alt=media&token=f92b85f7-cb80-4733-b679-beb605ee61d6',      
    imageRef: { _service: [Object], _location: [Object] },
    author: '관리자
  } */
  const cont = useContext(MyContext);
  // useEffect(()=>{
    
  //   cont.setValue(result)
  // console.log(cont.value, cont.setValue)
  // },[])
  
  // const [newResult, setNewResult] = useState(result);

  // 버튼 클릭 시 실행되는 함수
  const buttonClick = (어떤거) => {
    let 카테고리 = []
    if(어떤거 == '전체'){
      카테고리 = []
      result.forEach(item => {
        // cont.value = [null, ...cont.value.slice(1)];
        // 매물정보 객체의 '매물정보' 속성이 '아파트'인 경우 result에 추가
        if (true) {
          // setNewResult(prevResult => [...prevResult, item]);
          카테고리 = [...카테고리, item]
        }
      });
      cont.setValue([카테고리, '전체'])
    }
else if(어떤거 == '아파트'){
  카테고리 = []
  result.forEach(item => {
    // 매물정보 객체의 '매물정보' 속성이 '아파트'인 경우 result에 추가
    // cont.value = [null, ...cont.value.slice(1)];
    if (item.매물종류 == '아파트') {
      // setNewResult(prevResult => [...prevResult, item]);
      카테고리 = [...카테고리, item]
      
    }
    cont.setValue([카테고리, '아파트'])
  });
}
else if(어떤거 == '상가건물'){
  카테고리 = []
  result.forEach(item => {
    // 매물정보 객체의 '매물정보' 속성이 '아파트'인 경우 result에 추가
    // cont.value = [null, ...cont.value.slice(1)];
    if (item.매물종류 == '상가건물') {
      // setNewResult(prevResult => [...prevResult, item]);
      카테고리 = [...카테고리, item]
    }
  });
  cont.setValue([카테고리, '상가건물'])
}

else if(어떤거 == '상가점포'){
  카테고리 = []
  result.forEach(item => {
    // cont.value = [null, ...cont.value.slice(1)];
    // 매물정보 객체의 '매물정보' 속성이 '아파트'인 경우 result에 추가
    if (item.매물종류 == '상가점포') {
      // setNewResult(prevResult => [...prevResult, item]);
      카테고리 = [...카테고리, item]
    }
  });
  cont.setValue([카테고리, '상가점포'])
}
else if(어떤거 == '상가주택'){
  카테고리 = []
  result.forEach(item => {
    // cont.value = [null, ...cont.value.slice(1)];
    // 매물정보 객체의 '매물정보' 속성이 '아파트'인 경우 result에 추가
    if (item.매물종류 == '상가주택') {
      // setNewResult(prevResult => [...prevResult, item]);
      카테고리 = [...카테고리, item]
    }
  });
  cont.setValue([카테고리, '상가주택'])
}
else if(어떤거 == '빌라'){
  카테고리 = []
  result.forEach(item => {
    // cont.value = [null, ...cont.value.slice(1)];
    // 매물정보 객체의 '매물정보' 속성이 '아파트'인 경우 result에 추가
    if (item.매물종류 == '빌라') {
      // setNewResult(prevResult => [...prevResult, item]);
      카테고리 = [...카테고리, item]
    }
  });
  cont.setValue([카테고리, '빌라'])
}
else if(어떤거 == '단독'){
  카테고리 = []
  result.forEach(item => {
    // cont.value = [null, ...cont.value.slice(1)];
    // 매물정보 객체의 '매물정보' 속성이 '아파트'인 경우 result에 추가
    if (item.매물종류 == '단독') {
      // setNewResult(prevResult => [...prevResult, item]);
      카테고리 = [...카테고리, item]
    }
  });
  cont.setValue([카테고리, '단독'])
}
else if(어떤거 == '토지'){
  카테고리 = []
  result.forEach(item => {
    // cont.value = [null, ...cont.value.slice(1)];
    // 매물정보 객체의 '매물정보' 속성이 '아파트'인 경우 result에 추가
    if (item.매물종류 == '토지') {
      // setNewResult(prevResult => [...prevResult, item]);
      카테고리 = [...카테고리, item]
    }
  });
  cont.setValue([카테고리, '토지'])
}
    // result 초기화
    // cont.setValue([]);
    // 매물정보 배열 순회
    return
  };
console.log(cont.value[0])
  let 전체;
  if(cont.value[1] =="전체"){
    전체 = "text-black bg-white border-2 border-gray-500 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 focus:text-black focus:bg-white font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border"
  } else{
    전체 = "text-white bg-blue-700 border-2 border-blue-300 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:text-black focus:bg-white font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
  }
  let 아파트;
  if(cont.value[1] =="아파트"){
    아파트 = "text-black bg-white border-2 border-gray-500 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border"
  } else{
    아파트 = "text-white bg-blue-700 border-2 border-blue-300 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
  }
  let 상가건물;
  if(cont.value[1] =="상가건물"){
    상가건물 = "text-black bg-white border-2 border-gray-500 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border"
  } else{
    상가건물 = "text-white bg-blue-700 border-2 border-blue-300 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
  }
  let 상가주택;
  if(cont.value[1] =="상가주택"){
    상가주택 = "text-black bg-white border-2 border-gray-500 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border"
  } else{
    상가주택 = "text-white bg-blue-700 border-2 border-blue-300 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
  }
  let 상가점포;
  if(cont.value[1] =="상가점포"){
    상가점포 = "text-black bg-white border-2 border-gray-500 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border"
  } else{
    상가점포 = "text-white bg-blue-700 border-2 border-blue-300 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
  }
  let 빌라;
  if(cont.value[1] =="빌라"){
    빌라 = "text-black bg-white border-2 border-gray-500 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border"
  } else{
    빌라 = "text-white bg-blue-700 border-2 border-blue-300 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
  }
  let 단독;
  if(cont.value[1] =="단독"){
    단독 = "text-black bg-white border-2 border-gray-500 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border"
  } else{
    단독 = "text-white bg-blue-700 border-2 border-blue-300 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
  }
  let 토지;
  if(cont.value[1] =="토지"){
    토지 = "text-black bg-white border-2 border-gray-500 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border"
  } else{
    토지 = "text-white bg-blue-700 border-2 border-blue-300 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
  }

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 lg:max-w-[100rem] lg:px-8">
        <h2 className="text-2xl my-2 font-bold tracking-tight text-gray-900">
          부동산 매물
        </h2>
        <button type="button" className={전체} onClick={() => buttonClick('전체')}>전체</button>
        <button type="button" className={아파트} onClick={() => buttonClick('아파트')}>아파트</button>
        <button type="button" className={상가건물} onClick={() => buttonClick('상가건물')}>상가건물</button>
        <button type="button" className={상가주택} onClick={() => buttonClick('상가주택')}>상가주택</button>
        <button type="button" className={상가점포} onClick={() => buttonClick('상가점포')}>상가점포</button>
        <button type="button" className={빌라} onClick={() => buttonClick('빌라')}>빌라/다세대</button>
        <button type="button" className={단독} onClick={() => buttonClick('단독')}>단독/다가구</button>
        <button type="button" className={토지} onClick={() => buttonClick('토지')}>토지/임야</button>
        <Card result={cont.value[0] || result }/>

      </div>
      
    </div>
  );
}
