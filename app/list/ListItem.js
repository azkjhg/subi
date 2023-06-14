"use client";

import Link from "next/link";
import { storage } from "/firebase";
import { ref, deleteObject } from "firebase/storage";
import Image from "next/image";

export default function ListItem({ result }) {
  const DataDelete = async (e, i) => {
    const confirmDelete = window.confirm("게시글을 삭제하시겠습니까?");
    if (confirmDelete) {
      if (result.urls && result.imageRefs) {
        const deleteImage = async () => {
          for (let i = 0; i < result.imageRefs.length; i++) {
            const imageRef = ref(storage, result.imageRefs[i]._location.path_);

            await deleteObject(imageRef)
              .then(() => {
                console.log("이미지 삭제 완료");
              })
              .catch((error) => {
                console.error("이미지 삭제 에러:", error);
              });
          }
        };

        await deleteImage();
        console.log(result);
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
            e.target.parentElement.parentElement.parentElement.style.opacity = 0;
            setTimeout(() => {
              e.target.parentElement.parentElement.parentElement.style.display =
                "none";
            }, 1000);
          }
        });
    }
  };

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {result.map((item, i) => {
        if (!item.금액2) {
          item.금액 = item.금액1;
        }
        if (item.금액2) {
          item.금액 = `${item.금액1}/${item.금액1}`;
        }
        let 뱃지;
        let 뱃지2;
        // let 뱃지3
        let 면적;
        if (item.매물종류 == "아파트") {
          뱃지 = (
            <span
              class="absolute left-2 top-[176px] 
              bg-blue-100 text-blue-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded"
            >
              {item.매물종류}
            </span>
          );
        }
        if (item.매물종류 == "상가건물") {
          뱃지 = (
            <span
              class="absolute left-2 top-[176px] 
              bg-red-100 text-red-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded  "
            >
              {item.매물종류}
            </span>
          );
        }
        if (item.매물종류 == "상가주택") {
          뱃지 = (
            <span class="absolute left-2 top-[176px] bg-red-100 text-red-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded ">
              {item.매물종류}
            </span>
          );
        }
        if (item.매물종류 == "상가점포") {
          뱃지 = (
            <span class="absolute left-2 top-[176px] bg-red-100 text-red-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded ">
              {item.매물종류}
            </span>
          );
        }
        if (item.매물종류 == "빌라") {
          뱃지 = (
            <span class="absolute left-2 top-[176px] bg-indigo-100 text-indigo-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded ">
              {item.매물종류}
            </span>
          );
        }
        if (item.매물종류 == "단독") {
          뱃지 = (
            <span class="absolute left-2 top-[176px] bg-purple-100 text-purple-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded ">
              {item.매물종류}
            </span>
          );
        }
        if (item.매물종류 == "토지") {
          뱃지 = (
            <span class="absolute left-2 top-[176px] bg-green-100 text-green-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded ">
              {item.매물종류}
            </span>
          );
        }

        if (item.거래유형 == "매매") {
          뱃지2 = (
            <span class=" bg-gray-100 text-gray-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded  border border-gray-500">
              {item.거래유형}
            </span>
          );
        }
        if (item.거래유형 == "년세") {
          뱃지2 = (
            <span class=" bg-yellow-100 text-yellow-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded  border border-yellow-300">
              {item.거래유형}
            </span>
          );
        }
        if (item.거래유형 == "월세") {
          뱃지2 = (
            <span class=" bg-pink-100 text-pink-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded  border border-pink-400">
              {item.거래유형}
            </span>
          );
        }
        if (item.거래유형 == "전세") {
          뱃지2 = (
            <span class=" bg-indigo-100 text-indigo-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded  border border-indigo-400">
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
              <article
                className="rounded-md overflow-hidden shadow-md hover:shadow-xl
  relative "
              >
                {뱃지}

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
                    <span className="self-">{뱃지2}</span>
                    <span className="self-end text-gray-700">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold">
                    {item.소재지 ? item.소재지 : "ㅤ"}
                  </h3>
                  <p className="w-full truncate text-center">
                    {item.title ? item.title : "ㅤ"}
                  </p>
                  {면적}
                  {
                    <span className="text-base rounded-lg bg-green-100 px-2 my-2">
                      {item.금액 ? `${item.거래유형}가 ${item.금액}만원` : "ㅤ"}
                    </span>
                  }
                </div>
              </article>
            </Link>
            <div className="flex justify-between">
              <div className="text-xl">
                <Link href={`/edit/${result[i]._id.toString()}`}>수정</Link>
              </div>
              <div className="text-xl">
                {" "}
                <p
                  onClick={(e) => {
                    console.log(i, "한단계 위 i");
                    DataDelete(e, i);
                  }}
                >
                  삭제
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

//
