
import MultiCarousel from "@/components/MultiCarousel";
import PostContent from "@/components/PostContent";
import { AiTwotoneCalendar } from "react-icons/ai";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

export async function generateMetadata(props) {
  const client = await connectDB;
  const db = client.db("subi");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });



  return {
    title: `제주부동산 양수비공인중개사 ${result && result.시} ${result && result.동} ${result && result.소재지} ${result && result.매물종류} ${result && result.거래유형}`,
    description: `${result && result.title} ${result && result.content} "제주도의 부동산을 소개합니다. 양수비공인중개사사무소 (제주시 일도이동 신천지1차 아파트 상가 맞은 편) 일도지구의 부동산을 책임지고 성실, 정확히 중개합니다. 기타 제주, 서귀포 전지역 매물 접수합니다. 문의: 010-8565-5310",`,
    icons: { icon: "/favicon.ico" },
  };
}


const page = async (props) => {
  const client = await connectDB;
  const db = client.db("subi");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });


    const formatAmount = (value) => {
      const parts = value.split('');
      let formattedValue = '';
    
      while (parts.length > 0) {
        formattedValue = parts.splice(-3).join('') + formattedValue;
        if (parts.length > 0) {
          formattedValue = ',' + formattedValue;
        }
      }
    
      return formattedValue;
    };

   if(!result.금액2){
              result.금액 = formatAmount(result.금액1)
            }
            else {
              result.금액 = `${formatAmount(result.금액1)}/${formatAmount(result.금액2)}`
            }
  
  return (
  
  <div className="w-full ">
    <article className="rounded-2xl  overflow-hidden shadow-lg m-auto max-w-5xl">
        <div className="flex justify-center" >
    <div className="w-full max-w-6xl">
        <MultiCarousel urls={result.urls}/>
      
    </div>
        </div>
        <section className="flex flex-col p-4">
        <div className="flex items-center self-end text-sky-600">
        <AiTwotoneCalendar />
        <p className="font-semibold ml-2">{result.date}</p>
      </div>
      <h1 className="text-4xl font-bold">{result.title}</h1>
      <span className="self-start text-xl font-bold mt-2 rounded-lg bg-green-100 px-2 my-2">{result.금액 ? `${result.거래유형}가 ${result.금액}만원` : 'ㅤ'}</span>
      <div className="w-44 border-2 border-sky-600 mt-4 mb-8"></div>
        <PostContent result={result}/>
        </section>

        </article>
    
        </div>
  );
};

export default page;
