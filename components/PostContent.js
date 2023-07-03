import formType from "@/service/formTypes";
import React from "react";
import YouTubeP from "@/components/Youtube";

const PostContent = ({ result }) => {
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

  const 금액1 = () => {
    if (result.거래유형 == "매매") {
      return "매매가";
    }
    if (result.거래유형 == "년세") {
      return "보증금";
    }
    if (result.거래유형 == "월세") {
      return "보증금";
    }
    if (result.거래유형 == "전세") {
      return "전세금";
    }
  };
  const 금액2 = () => {
    if (result.거래유형 == "매매") {
      return "";
    }
    if (result.거래유형 == "년세") {
      return "년세금";
    }
    if (result.거래유형 == "월세") {
      return "월세금";
    }
    if (result.거래유형 == "전세") {
      return "";
    }
  };


  const 테이블 = (category) => {
    const 항목들 = formType(category, "디테일", result);

    const 총행의수 = Math.ceil(항목들.length / 2); // 총 행의 수 계산

    // 각 행에 들어갈 항목들을 구하는 함수
    // const 해당행의항목들 = (행인덱스) => {
    //   const 시작 = 행인덱스 * 2; //0 2 4
    //   const 끝 = 시작 + 2; // 2 4 6
    //   return 항목들.slice(시작, 끝); // [0, 1] [2, 3] [4, 5]
    // };
    const 해당행의항목들 = (행인덱스) => {
      const 시작 = 행인덱스 * 2; // 0, 2, 4
      const 끝 = 행인덱스 * 2 + 1; // 2, 4, 6
      return [시작, 끝]; // [0, 1], [2,3]
    };


    return [...Array(총행의수)].map((_, 행인덱스) => {

      return (
        <>
          <tr className="border-b border-gray-200 ">
            {해당행의항목들(행인덱스).map((item, i) => {
              if (i == 0) {

                return (
                  <>
                    <th
                      scope="row"
                      className="py-2 font-medium text-slate-600 bg-gray-50 "
                    >
                      {항목들[item] ? 항목들[item].이름 : ""}
                    </th>
                    <td className="px-2 py-2 whitespace-nowrap">
                      {항목들[item] ? 항목들[item].값 : ""}
                    </td>
                  </>
                );
              } else {
                return (
                  <>
                    <td className="py-2 font-medium text-slate-600  bg-gray-50 ">
                      {항목들[item] ? 항목들[item].이름 : ""}
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap">
                      {항목들[item] ? 항목들[item].값 : ""}
                    </td>
                  </>
                );
              }
            })}
          </tr>
        </>
      );
    });
  };

  const 기본양식 = (
    <>
      <tr className="border-b border-gray-200 ">
        <th scope="row" className=" py-2 font-medium text-slate-600  bg-gray-50 ">
          <span>매물종류</span>
        </th>
        <td className="px-2 py-2 whitespace-nowrap">{result.매물종류}</td>
        <td className="py-2 font-medium text-slate-600  bg-gray-50 ">거래유형</td>
        <td className="px-2 py-2 whitespace-nowrap">{result.거래유형}</td>
      </tr>
      <tr className="border-b border-gray-200 ">
        <th scope="row" className="py-2 font-medium text-slate-600  bg-gray-50 ">
          소재지
        </th>
        <td className="px-2 py-2" colSpan="3" whitespace-nowrap>
          {`${result.시} ${result.동} ${result.소재지}`}
        </td>
      </tr>
      <tr className="border-b border-gray-200 ">
        <th scope="row" className="py-2 font-medium text-slate-600  bg-gray-50 ">
          {금액1()}
        </th>
        <td className="px-2 py-2 whitespace-nowrap">
          {result.금액1 && `${formatAmount(result.금액1)}만원`}
        </td>
        <td className="py-2 font-medium text-slate-600  bg-gray-50 ">{금액2()}</td>
        <td className="px-2 py-2 whitespace-nowrap">
          {result.금액2 && `${formatAmount(result.금액2)}만원`}
        </td>
      </tr>
    </>
  );
  const T헤드 = (
    <>
      <thead className="text-xs text-gray-700 uppercase ">
        <tr>
          <th scope="col" className="px-6 py-3 text-base bg-gray-50 " colSpan="4">
            매물 정보
          </th>
        </tr>
      </thead>
    </>
  );
  const 내용 = (
    <>
      {result.유튜브링크 && (
        <div className="my-2">

          <YouTubeP 유튜브링크={result.유튜브링크} />
        </div>

      )}
      <div className=" border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="mx-2 text-sm sm:text-sm md:text-base lg:text-lg font-medium leading-6 text-gray-900">
              내용
            </dt>
            <dd className="mt-1 text-sm sm:text-sm md:text-base lg:text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {result.content}
            </dd>
          </div>
        </dl>
      </div>
    </>
  );

  return (
    <>
      {result.매물종류 === "아파트" && (
        <div>
          <table className=" w-full text-sm sm:text-sm md:text-base lg:text-lg  text-center text-black ">
            {T헤드}
            <tbody>
              {기본양식}
              {테이블(result.매물종류)}
            </tbody>
          </table>
          {내용}
        </div>
      )}
      {result.매물종류 === "상가건물" && (
        <div>
          <table className=" w-full text-sm sm:text-sm md:text-base lg:text-lg  text-center text-black ">
            {T헤드}
            <tbody>
              {기본양식}
              {테이블(result.매물종류)}
            </tbody>
          </table>
          {내용}
        </div>
      )}
      {result.매물종류 === "상가주택" && (
        <div>
          <table className=" w-full text-sm sm:text-sm md:text-base lg:text-lg  text-center text-black ">
            {T헤드}
            <tbody>
              {기본양식}
              {테이블(result.매물종류)}
            </tbody>
          </table>
          {내용}
        </div>
      )}
      {result.매물종류 === "상가점포" && (
        <div>
          <table className=" w-full text-sm sm:text-sm md:text-base lg:text-lg  text-center text-black ">
            {T헤드}
            <tbody>
              {기본양식}
              {테이블(result.매물종류)}
            </tbody>
          </table>
          {내용}
        </div>
      )}
      {result.매물종류 === "빌라" && (
        <div>
          <table className=" w-full text-sm sm:text-sm md:text-base lg:text-lg  text-center text-black ">
            {T헤드}
            <tbody>
              {기본양식}
              {테이블(result.매물종류)}
            </tbody>
          </table>
          {내용}
        </div>
      )}
      {result.매물종류 === "단독" && (
        <div>
          <table className=" w-full text-sm sm:text-sm md:text-base lg:text-lg  text-center text-black ">
            {T헤드}
            <tbody>
              {기본양식}
              {테이블(result.매물종류)}
            </tbody>
          </table>
          {내용}
        </div>
      )}
      {result.매물종류 === "토지" && (
        <div>
          <table className=" w-full text-sm sm:text-sm md:text-base lg:text-lg  text-center text-black ">
            {T헤드}
            <tbody>
              {기본양식}
              {테이블(result.매물종류)}
            </tbody>
          </table>
          {내용}
        </div>
      )}
    </>
  );
};

export default PostContent;
