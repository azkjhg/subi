"use client";
import Image from "next/image";
import Link from "next/link";
import { MyContext } from './Context';
import React, { useContext } from "react";
const Card = ({ result, list }) => {
  const cont = useContext(MyContext);
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
          e.target.parentElement.parentElement.parentElement.style.opacity = 0;
          setTimeout(() => {
            e.target.parentElement.parentElement.parentElement.style.display = "none";
          }, 1000);
        }
      });
  };
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
    상가건물 = "text-black bg-white border-2 border-gray-500 hover:bg-red-800 hover:text-white focus:ring-4 focus:ring-red-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border"
  } else{
    상가건물 = "text-white bg-red-700 border-2 border-red-300 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
  }
  let 상가주택;
  if(cont.value[1] =="상가주택"){
    상가주택 = "text-black bg-white border-2 border-gray-500 hover:bg-red-800 hover:text-white focus:ring-4 focus:ring-red-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border"
  } else{
    상가주택 = "text-white bg-red-700 border-2 border-red-300 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
  }
  let 상가점포;
  if(cont.value[1] =="상가점포"){
    상가점포 = "text-black bg-white border-2 border-gray-500 hover:bg-red-800 hover:text-white focus:ring-4 focus:ring-red-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border"
  } else{
    상가점포 = "text-white bg-red-700 border-2 border-red-300 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
  }
  let 빌라;
  if(cont.value[1] =="빌라"){
    빌라 = "text-black bg-white border-2 border-gray-500 hover:bg-indigo-800 hover:text-white focus:ring-4 focus:ring-indigo-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border"
  } else{
    빌라 = "text-white bg-indigo-700 border-2 border-indigo-300 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
  }
  let 단독;
  if(cont.value[1] =="단독"){
    단독 = "text-black bg-white border-2 border-gray-500 hover:bg-purple-800 hover:text-white focus:ring-4 focus:ring-purple-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border"
  } else{
    단독 = "text-white bg-purple-700 border-2 border-purple-300 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
  }
  let 토지;
  if(cont.value[1] =="토지"){
    토지 = "text-black bg-white border-2 border-gray-500 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border"
  } else{
    토지 = "text-white bg-green-700 border-2 border-green-300 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
  }

  return (<>
  <button type="button" className={전체} onClick={() => buttonClick('전체')}>전체</button>
        <button type="button" className={아파트} onClick={() => buttonClick('아파트')}>아파트</button>
        <button type="button" className={상가건물} onClick={() => buttonClick('상가건물')}>상가건물</button>
        <button type="button" className={상가주택} onClick={() => buttonClick('상가주택')}>상가주택</button>
        <button type="button" className={상가점포} onClick={() => buttonClick('상가점포')}>상가점포</button>
        <button type="button" className={빌라} onClick={() => buttonClick('빌라')}>빌라/다세대</button>
        <button type="button" className={단독} onClick={() => buttonClick('단독')}>단독/다가구</button>
        <button type="button" className={토지} onClick={() => buttonClick('토지')}>토지/임야</button>
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-1">
      {(cont.value[0] || result).map((item, i) => {
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

        if (!item.금액2) {
          item.금액 = formatAmount(item.금액1);
        }
        if (item.금액2) {
          item.금액 = `${formatAmount(item.금액1)}/${formatAmount(item.금액2)}`;
        }
        let 뱃지;
        let 뱃지2;
        // let 뱃지3
        let 면적;
        let 배경색;
        if (item.매물종류 == "아파트") {
          뱃지 = (
            <span
              className="
              bg-blue-100 text-blue-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded border border-gray-500"
            >
              {item.매물종류}
            </span>
          );
        }
        if (item.매물종류 == "상가건물") {
          뱃지 = (
            <span
            className="
              bg-red-100 text-red-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded border border-gray-500"
            >
              {item.매물종류}
            </span>
          );
        }
        if (item.매물종류 == "상가주택") {
          뱃지 = (
            <span className=" bg-red-100 text-red-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded border border-gray-500">
              {item.매물종류}
            </span>
          );
        }
        if (item.매물종류 == "상가점포") {
          뱃지 = (
            <span className=" bg-red-100 text-red-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded border border-gray-500">
              {item.매물종류}
            </span>
          );
        }
        if (item.매물종류 == "빌라") {
          뱃지 = (
            <span className=" bg-indigo-100 text-indigo-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded border border-gray-500">
              {item.매물종류}
            </span>
          );
        }
        if (item.매물종류 == "단독") {
          뱃지 = (
            <span className=" bg-purple-100 text-purple-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded border border-gray-500">
              {item.매물종류}
            </span>
          );
        }
        if (item.매물종류 == "토지") {
          뱃지 = (
            <span className=" bg-green-100 text-green-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded border border-gray-500">
              {item.매물종류}
            </span>
          );
        }

        if (item.거래유형 == "매매") {
          배경색 = "text-base rounded-lg bg-red-100 px-2 my-2";
          뱃지2 = (
            <span className=" text-red-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded  border border-red-500">
              {item.거래유형}
            </span>
          );
        }
        if (item.거래유형 == "년세") {
          배경색 = "text-base rounded-lg bg-yellow-100 px-2 my-2";
          뱃지2 = (
            <span className="  text-yellow-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded  border border-yellow-300">
              {item.거래유형}
            </span>
          );
        }
        if (item.거래유형 == "월세") {
          배경색 = "text-base rounded-lg bg-green-100 px-2 my-2";
          뱃지2 = (
            <span className="  text-green-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded  border border-green-400">
              {item.거래유형}
            </span>
          );
        }
        if (item.거래유형 == "전세") {
          배경색 = "text-base rounded-lg bg-indigo-100 px-2 my-2";
          뱃지2 = (
            <span className="  text-indigo-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded  border border-indigo-400">
              {item.거래유형}
            </span>
          );
        }

        if (item.매물종류 == "아파트") {
          면적 = (
            <p className="w-full truncate text-center">
              {item.공급면적 ? `${item.공급면적}㎡` : "-"}/
              {item.전용면적 ? `${item.전용면적}㎡` : "-"}
            </p>
          );
        }
        if (item.매물종류 == "상가건물") {
          면적 = (
            <p className="w-full truncate text-center">
              {item.연면적 ? `${item.연면적}㎡` : "-"}/
              {item.대지면적 ? `${item.대지면적}㎡` : "-"}
            </p>
          );
        }
        if (item.매물종류 == "상가주택") {
          면적 = (
            <p className="w-full truncate text-center">
              {item.대지면적 ? `${item.대지면적}㎡` : "-"}/
              {item.건축면적 ? `${item.건축면적}㎡` : "-"}
            </p>
          );
        }
        if (item.매물종류 == "상가점포") {
          면적 = (
            <p className="w-full truncate text-center">
              {item.계약면적 ? `${item.계약면적}㎡` : "-"}/
              {item.전용면적 ? `${item.전용면적}㎡` : "-"}
            </p>
          );
        }
        if (item.매물종류 == "빌라") {
          면적 = (
            <p className="w-full truncate text-center">
              {item.공급면적 ? `${item.공급면적}㎡` : "-"}/
              {item.전용면적 ? `${item.전용면적}㎡` : "-"}
            </p>
          );
        }
        if (item.매물종류 == "단독") {
          면적 = (
            <p className="w-full truncate text-center">
              {item.공급면적 ? `${item.공급면적}㎡` : "-"}/
              {item.전용면적 ? `${item.전용면적}㎡` : "-"}
            </p>
          );
        }
        if (item.매물종류 == "토지") {
          면적 = (
            <p className="w-full truncate text-center">
              {item.대지면적 ? `${item.대지면적}㎡` : "-"}
            </p>
          );
        }

        //             if(item.거래유형 == '매매'){
        //               뱃지3 = <span className="text-base rounded-lg bg-green-100 px-2 my-2">
        //             {`${item.거래유형}가 ${item.금액}만원`}
        // </span>}

        return (
          <div key={i}>
            <Link href={`/detail/${item._id.toString()}`}>
              {/* <div key={i} className="group relative"> 
              
                   <div className=" w-full overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75 h-40">
                     {item.urls[0] && <Image
                       src={item.urls[0]}
                       alt={item.title}
                       width={400}
                       height={300}
                       className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                     />}
                     
                   </div>
                   <div className="mt-1 mb-1 flex justify-between">
                   {뱃지}
                     <div >
                       <h3 className="text-sm text-gray-700">
                        {item.소재지}
                       </h3>
                       <p className="mt-1 text-sm font-bold text-gray-500">
                       {뱃지2} {`${item.금액}만원`}
                       </p>
                     </div>
                     <p className="text-sm  font-medium text-gray-900">
                      {item.date}
                     </p>
                   </div>
                   <h4>{item.title}</h4>
                 </div> */}
              {/* 이전에 쓰던 거 */}

              {/* <Link href={`/edit/${item._id.toString()}`}>수정</Link>
                <p
                  onClick={(e) => {
                    console.log(i, "한단계 위 i");
                    DataDelete(e, i);
                  }}
                >
                  삭제
                </p> */}
              {/* 이건 어드민 페이지에서 */}
              <article className="rounded-md overflow-hidden shadow-md hover:shadow-xl relative">
                <div className=" w-full overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75 h-52">
                  {item.urls[0] && (
                    <Image
                      src={item.urls[0]}
                      alt={item.title}
                      width={360}
                      height={210}
                      
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full" //object-cover <=> object-fit
                    />
                  )}
                </div>
                <div className="flex flex-col items-center py-2 px-2">
                  <div className="w-full flex justify-between">
                    <div className="mb-1">
                      {뱃지}
                      {뱃지2}
                    </div>
                    <span className="self-end text-gray-700">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold">
                    {item.title ? item.title : "ㅤ"}
                  </h3>
                  <div className="디바이더"></div>
                  <p className="w-full truncate text-center">
                    {item.시 ? `${item.시} ${item.동} ${item.소재지}` : "ㅤ"}
                  </p>
                  {면적}
                  {
                    <span className={배경색}>
                      {item.금액 ? `${item.거래유형}가 ${item.금액}만원` : "ㅤ"}
                    </span>
                  }
                </div>
              </article>
            </Link>

            {list ? (
              <div className="flex justify-between">
                <div className="text-xl">
                  <Link href={`/edit/${result[i]._id.toString()}`}>수정</Link>
                </div>
                <div className="text-xl">
                  {" "}
                  <p
                    onClick={(e) => {

                      DataDelete(e, i);
                    }}
                  >
                    삭제
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Card;
