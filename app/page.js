import { connectDB } from "@/util/database";
import React, { useContext } from "react";
import Image from "next/image";
import ProductList from "./../components/ProductList";
import { Gowun_Batang } from "next/font/google";
import BannerCarousel from "@/components/BannerCarousel";
import { MyContext } from "@/components/Context";
import UseContext from "@/components/UseContext";
// import LangContext from "./_app.js";

const pretendard = Gowun_Batang({
  weight: "400",

  subsets: ["latin"],
});
export default async function Home({value}) {

  const client = await connectDB;
  const db = client.db("subi");

  let result = await db.collection("post").find().toArray({
    noCache: true,
  });
  result = await result.map((a) => {
    a._id = a._id.toString();
    return a;
  });
  // const lang = useContext(LangContext);
  // console.log(lang, '콘텍스트')
  return (
    <div>
      <div className={`${pretendard.className} mx-auto`}>
      <main className="banner" >
        <div className="메인아이템">
        <div className="banner-info xs:w-96">
            <h1>양수비 공인중개사 사무소</h1>
            <p className="bg-green-300 rounded-sm">
              제주도의 부동산을 소개합니다.
            </p>
            <hr />
            <div className="banner-info-text text-2xl py-3">
              <p>010-8565-5310 / 064-753-5310</p>
              <h2>대표/공인중개사 양수비</h2>
            </div>
            <p className="banner-info-text-small self">등록번호: 50110-2020-00015 제주시 천수로63(일도이동)</p>
            
          </div>

          <div className="가게정보">
            <Image
              alt="가게 사진"
              src="/가게 사진2.jpg"
              width={300}
              height={300}
            />
            <Image
              alt="오시는 길"
              src="/오시는 길3.jpg"
              width={300}
              height={300}
            />
          </div>
    
          

          
        </div>

      </main >

      <div className="서브배너"  >
      <BannerCarousel/>
      </div >

      </div>
      <div className="">{result && <ProductList result={result} />}</div>
    </div>
  );
}
