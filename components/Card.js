import Image from "next/image";
import React from "react";
import Link from "next/link";
const Card = ({ result, list }) => {
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
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {result.map((item, i) => {
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
                      width={400}
                      height={300}
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
  );
};

export default Card;
