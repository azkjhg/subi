"use client";
import React, { useEffect, useState } from "react";
import { storage } from "/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";
import formType from "@/service/formTypes";

const templates = (event) => {
  if (event.target.매물종류.value === "아파트") {
    return {
      공급면적: event.target.공급면적.value,
      전용면적: event.target.전용면적.value,
      해당동: event.target.해당동.value,
      입주가능일: event.target.입주가능일.value,
      방향: event.target.방향.value,
      현관구조: event.target.현관구조.value,
      해당층: event.target.해당층.value,
      방: event.target.방.value,
      월관리비: event.target.월관리비.value,
      건축물용도: event.target.건축물용도.value,
      총세대수: event.target.총세대수.value,
      사용승인일: event.target.사용승인일.value,
      주차가능여부: event.target.주차가능여부.value,
      총주차대수: event.target.총주차대수.value,
      난방방식: event.target.난방방식.value,
    };
  } else if (event.target.매물종류.value === "상가건물") {
    return {
      연면적: event.target.연면적.value,
      대지면적: event.target.대지면적.value,
      입주가능일: event.target.입주가능일.value,
      방향: event.target.방향.value,
      지하층: event.target.지하층.value,
      현업종: event.target.현업종.value,
      추천업종: event.target.추천업종.value,
      건축물용도: event.target.건축물용도.value,
      총점포수: event.target.총점포수.value,
      사용승인일: event.target.사용승인일.value,
      총주차대수: event.target.총주차대수.value,
    };
  } else if (event.target.매물종류.value === "상가주택") {
    return {
      대지면적: event.target.대지면적.value,
      연면적: event.target.연면적.value,
      입주가능일: event.target.입주가능일.value,
      방향: event.target.방향.value,
      지하층: event.target.지하층.value,
      방: event.target.방.value,
      건축물용도: event.target.건축물용도.value,
      총점포수: event.target.총점포수.value,
      사용승인일: event.target.사용승인일.value,
      주차가능여부: event.target.주차가능여부.value,
      총주차대수: event.target.총주차대수.value,
    };
  } else if (event.target.매물종류.value === "상가점포") {
    return {
      계약면적: event.target.계약면적.value,
      전용면적: event.target.전용면적.value,
      입주가능일: event.target.입주가능일.value,
      방향: event.target.방향.value,
      해당층: event.target.해당층.value,
      방: event.target.방.value,
      건물종류: event.target.건물종류.value,
      건축물용도: event.target.건축물용도.value,
      현업종: event.target.현업종.value,
      추천업종: event.target.추천업종.value,
      총점포수: event.target.총점포수.value,
      사용승인일: event.target.사용승인일.value,
      주차가능여부: event.target.주차가능여부.value,
      총주차대수: event.target.총주차대수.value,
    };
  } else if (event.target.매물종류.value === "빌라") {
    return {
      공급면적: event.target.공급면적.value,
      전용면적: event.target.전용면적.value,
      해당동: event.target.해당동.value,
      입주가능일: event.target.입주가능일.value,
      방향: event.target.방향.value,
      해당층: event.target.해당층.value,
      방: event.target.방.value,
      월관리비: event.target.월관리비.value,
      건물종류: event.target.건물종류.value,
      건축물용도: event.target.건축물용도.value,
      총세대수: event.target.총세대수.value,
      사용승인일: event.target.사용승인일.value,
      주차가능여부: event.target.주차가능여부.value,
      총주차대수: event.target.총주차대수.value,
      건물보안: event.target.건물보안.value,
    };
  } else if (event.target.매물종류.value === "단독") {
    return {
      대지면적: event.target.대지면적.value,
      건축면적: event.target.건축면적.value,
      연면적: event.target.연면적.value,
      입주가능일: event.target.입주가능일.value,
      방향: event.target.방향.value,
      지하층: event.target.지하층.value,
      방: event.target.방.value,
      월관리비: event.target.월관리비.value,
      건물종류: event.target.건물종류.value,
      건축물용도: event.target.건축물용도.value,
      총세대수: event.target.총세대수.value,
      사용승인일: event.target.사용승인일.value,
      주차가능여부: event.target.주차가능여부.value,
      총주차대수: event.target.총주차대수.value,
    };
  } else if (event.target.매물종류.value === "토지") {
    return {
      대지면적: event.target.대지면적.value,
      지목: event.target.지목.value,
      용도지역: event.target.용도지역.value,
      건축물용도: event.target.건축물용도.value,
    };
  }
};

const Page = () => {
  // const [imageUpload, setImageUpload] = useState(null);
  const [imageUpload1, setImageUpload1] = useState(null);
  const [imageUpload2, setImageUpload2] = useState(null);
  const [imageUpload3, setImageUpload3] = useState(null);
  const [imageUpload4, setImageUpload4] = useState(null);
  const [imageUpload5, setImageUpload5] = useState(null);

  const router = useRouter();

  const [category, setCategory] = useState("");
  const [tradeType, setTradeType] = useState(null);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleTradeTypeChange = (event) => {
    setTradeType(event.target.value);
  };

  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedTown, setSelectedTown] = useState("");
  const [selectedLine, setSelectedLine] = useState("");

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
    setSelectedTown("");
  };

  const handleTownChange = (e) => {
    setSelectedTown(e.target.value);
  };

  const handleLineChange = (e) => {
    setSelectedLine(e.target.value);
  };

  const [inputPrice, setInputPrice] = useState(null);
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const filteredValue = inputValue.replace(/[^0-9]/g, ''); // 숫자만 허용하도록 필터링
    setInputPrice(filteredValue)

    // 필터링된 값을 사용하거나 상태에 저장할 수 있습니다.
    // 예: setInputValue(filteredValue);
  };
  const [inputPrice2, setInputPrice2] = useState(null);
  const handleInputChange2 = (e) => {
    const inputValue = e.target.value;
    const filteredValue = inputValue.replace(/[^0-9]/g, ''); // 숫자만 허용하도록 필터링
    setInputPrice2(filteredValue)

    // 필터링된 값을 사용하거나 상태에 저장할 수 있습니다.
    // 예: setInputValue(filteredValue);
  };

  const uploadAndSubmitForm = async (event) => {
    event.preventDefault();
    let imageUpload = [];
    imageUpload = [
      imageUpload1,
      imageUpload2,
      imageUpload3,
      imageUpload4,
      imageUpload5,
    ];
    imageUpload = imageUpload.filter((item) => item !== null);
    console.log(imageUpload);

    if (imageUpload == null) {
      alert("이미지를 업로드해주세요.");
      return;
    }

    if (tradeType == null) {
      alert("거래유형을 선택해주세요.");
      return;
    }

    let urls = [];
    let imageRefs = [];
    const processImageUploads = async () => {
      for (let i = 0; i < imageUpload.length; i++) {
        const imageRef = ref(storage, `image/${imageUpload[i].name + v4()}`);
        await uploadBytes(imageRef, imageUpload[i])
          .then(async () => {
            let url = await getDownloadURL(imageRef);

            // .then((url) => {
            //   console.log("업로드된 이미지 URL:", url);
            //   return url;
            // })
            // .catch((error) => {
            //       console.error("이미지 URL 생성 에러:", error);
            //     });

            // images[`image${i + 1}`] = { url: url, imageRef: imageRef };
            imageRefs = [...imageRefs, imageRef];
            urls = [...urls, url];
          })
          .catch((error) => {
            console.error("이미지 업로드 에러:", error);
          });
      }
    };

    await processImageUploads();
    console.log(urls);
    console.log(imageRefs);

    // const imageRef = ref(storage, `image/${imageUpload.name + v4()}`);

    // uploadBytes(imageRef, imageUpload)
    //   .then(async () => {
    //     alert("이미지 업로드 완료!");
    //     let url = await getDownloadURL(imageRef)
    //   .then((url) => {
    //         console.log("업로드된 이미지 URL:", url);
    //         return url;
    //       })
    //   .catch((error) => {
    //         console.error("이미지 URL 가져오기 에러:", error);
    //       });

    // 이곳에서 이미지 업로드가 완료되었으므로 폼을 제출합니다.
    let formData = {
      urls: urls,
      imageRefs: imageRefs,
      title: event.target.title.value,
      content: event.target.content.value,
      매물종류: event.target.매물종류.value,
      거래유형: event.target.거래유형.value,
      시: event.target.시.value,
      동: event.target.동.value,
      소재지: event.target.소재지.value,
      금액1: event.target.금액1.value,
      금액2: event.target.금액2 && event.target.금액2.value,
      유튜브링크: event.target.유튜브링크.value,
    };

    if (category == "아파트") {
      formData = {
        ...formData,

        ...templates(event),
      };
    } else if (category == "상가건물") {
      formData = {
        ...formData,

        ...templates(event),
      };
    } else if (category == "상가주택") {
      formData = {
        ...formData,

        ...templates(event),
      };
    } else if (category == "상가점포") {
      formData = {
        ...formData,

        ...templates(event),
      };
    } else if (category == "빌라") {
      formData = {
        ...formData,

        ...templates(event),
      };
    } else if (category == "단독") {
      formData = {
        ...formData,

        ...templates(event),
      };
    } else if (category == "토지") {
      formData = {
        ...formData,

        ...templates(event),
      };
    }

    fetch("/api/post/new", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response === "업로드 완료") {
          alert("폼 제출 완료!");
          router.push("/list");
        } else {
          throw new Error("폼 제출 실패");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const 기본정보 = (
    <>
      <h1>기본정보</h1>
      <br />
      <span>제목 : </span>
      <input name="title" placeholder="제목" />
      <br />
      <hr />
      <span>거래유형 : </span>
      <select
        name="거래유형"
        value={tradeType}
        onChange={handleTradeTypeChange}
      >
        <option value="" selected>
          거래유형 선택
        </option>
        <option value="매매">매매</option>
        <option value="년세">년세</option>
        <option value="월세">월세</option>
        <option value="전세">전세</option>
      </select>
      <br />
      <div>
        <span>소재지 : </span>
        <select name="시" value={selectedRegion} onChange={handleRegionChange}>
          <option value="">지역 선택</option>
          <option value="제주시">제주시</option>
          <option value="서귀포시">서귀포시</option>
          {/* 다른 지역도 추가 */}
        </select>

        {selectedRegion && (
          <select name="동" value={selectedTown} onChange={handleTownChange}>
            <option value="">동네 선택</option>
            {selectedRegion === "제주시" ? (
              <>
                <option value="건입동">건입동</option>
                <option value="구좌읍">구좌읍</option>
                <option value="내도동">내도동</option>
                <option value="노형동">노형동</option>
                <option value="도남동">도남동</option>
                <option value="도두1동">도두1동</option>
                <option value="도두2동">도두2동</option>
                <option value="도련1동">도련1동</option>
                <option value="도련2동">도련2동</option>
                <option value="도평동">도평동</option>
                <option value="봉개동">봉개동</option>
                <option value="삼도1동">삼도1동</option>
                <option value="삼도2동">삼도2동</option>
                <option value="삼양1동">삼양1동</option>
                <option value="삼양2동">삼양2동</option>
                <option value="삼양3동">삼양3동</option>
                <option value="아라1동">아라1동</option>
                <option value="아라2동">아라2동</option>
                <option value="애월읍">애월읍</option>
                <option value="연동">연동</option>
                <option value="영평동">영평동</option>
                <option value="오등동">오등동</option>
                <option value="오라1동">오라1동</option>
                <option value="오라2동">오라2동</option>
                <option value="오라3동">오라3동</option>
                <option value="외도1동">외도1동</option>
                <option value="외도2동">외도2동</option>
                <option value="용강동">용강동</option>
                <option value="용담1동">용담1동</option>
                <option value="용담2동">용담2동</option>
                <option value="용담3동">용담3동</option>
                <option value="우도면">우도면</option>
                <option value="월평동">월평동</option>
                <option value="이도1동">이도1동</option>
                <option value="이도2동">이도2동</option>
                <option value="이호1동">이호1동</option>
                <option value="이호2동">이호2동</option>
                <option value="일도1동">일도1동</option>
                <option value="일도2동">일도2동</option>
                <option value="조천읍">조천읍</option>
                <option value="추자면">추자면</option>
                <option value="한경면">한경면</option>
                <option value="한림읍">한림읍</option>
                <option value="해안동">해안동</option>
                <option value="화북1동">화북1동</option>
                <option value="화북2동">화북2동</option>
                <option value="회천동">회천동</option>
                {/* 제주시의 다른 동네도 추가 */}
              </>
            ) : (
              <>
                <option value="강정동">강정동</option>
                <option value="남원읍">남원읍</option>
                <option value="대정읍">대정읍</option>
                <option value="대포동">대포동</option>
                <option value="도순동">도순동</option>
                <option value="동홍동">동홍동</option>
                <option value="법환동">법환동</option>
                <option value="보목동">보목동</option>
                <option value="상예동">상예동</option>
                <option value="상효동">상효동</option>
                <option value="색달동">색달동</option>
                <option value="서귀동">서귀동</option>
                <option value="서호동">서호동</option>
                <option value="서홍동">서홍동</option>
                <option value="성산읍">성산읍</option>
                <option value="신효동">신효동</option>
                <option value="안덕면">안덕면</option>
                <option value="영남동">영남동</option>
                <option value="월평동">월평동</option>
                <option value="중문동">중문동</option>
                <option value="토평동">토평동</option>
                <option value="표선면">표선면</option>
                <option value="하예동">하예동</option>
                <option value="하원동">하원동</option>
                <option value="하효동">하효동</option>
                <option value="호근동">호근동</option>
                <option value="회수동">회수동</option>
                {/* 서귀포시의 다른 동네도 추가 */}
              </>
            )}
          </select>
        )}
        {selectedTown && <input name="소재지" placeholder="세부주소" />}
      </div>
      <br />
      {tradeType === "매매" && (
        <>
          <span>매매가 : </span>
          <input name="금액1" placeholder="매매금" value={inputPrice} onChange={handleInputChange}/>
          만원
          <br />
        </>
      )}
      {tradeType === "년세" && (
        <>
          <span>년세가 : </span>
          <input name="금액1" placeholder="보증금" value={inputPrice} onChange={handleInputChange} />
          만원 <input name="금액2" placeholder="년세금" value={inputPrice2} onChange={handleInputChange2}/>
          만원
          <br />
        </>
      )}
      {tradeType === "월세" && (
        <>
          <span>월세가 : </span>
          <input name="금액1" placeholder="보증금" value={inputPrice} onChange={handleInputChange}/>
          만원 <input name="금액2" placeholder="월세금" value={inputPrice2} onChange={handleInputChange2}/>
          만원
          <br />
        </>
      )}
      {tradeType === "전세" && (
        <>
          <span>전세가 : </span>
          <input name="금액1" placeholder="전세금" value={inputPrice} onChange={handleInputChange}/>
          만원
          <br />
        </>
      )}
      <br/>
      <span>유튜브 링크 : </span>
      <input name="유튜브링크" placeholder="유튜브링크" onChange={handleInputChange}/>
      <br />
    </>
  );

  const 양식들 = () => {
    if (category === "아파트") {
      return (
        <>
          <input name="매물종류" value="아파트" style={{ display: "none" }} />
          {formType(category, "글작성")}
        </>
      );
    } else if (category === "상가건물") {
      return (
        <>
          <input name="매물종류" value="상가건물" style={{ display: "none" }} />
          {formType(category, "글작성")}
        </>
      );
    } else if (category === "상가주택") {
      return (
        <>
          <input name="매물종류" value="상가주택" style={{ display: "none" }} />
          {formType(category, "글작성")}
        </>
      );
    } else if (category === "상가점포") {
      return (
        <>
          <input name="매물종류" value="상가점포" style={{ display: "none" }} />
          {formType(category, "글작성")}
        </>
      );
    } else if (category === "빌라") {
      return (
        <>
          <input name="매물종류" value="빌라" style={{ display: "none" }} />
          {formType(category, "글작성")}
        </>
      );
    } else if (category === "단독") {
      return (
        <>
          <input name="매물종류" value="단독" style={{ display: "none" }} />
          {formType(category, "글작성")}
        </>
      );
    } else if (category === "토지") {
      return (
        <>
          <input name="매물종류" value="토지" style={{ display: "none" }} />
          {formType(category, "글작성")}
        </>
      );
    }
  };
  return (
    <div className=" m-auto max-w-3xl">
      <select name="매물종류" value={category} onChange={handleCategoryChange}>
        <option value="" selected>
          매물종류 선택
        </option>
        <option value="아파트">아파트</option>
        <option value="상가건물">상가건물</option>
        <option value="상가주택">상가주택</option>
        <option value="상가점포">상가점포</option>
        <option value="빌라">빌라/다세대</option>
        <option value="단독">단독/다가구</option>
        <option value="토지">토지/임야</option>
      </select>

      {category && (
        <div>
          <span>사진 : </span>
          <input
            type="file"
            onChange={(event) => {
              setImageUpload1(event.target.files[0]);
            }}
          />
          <br />
          <input
            type="file"
            onChange={(event) => {
              setImageUpload2(event.target.files[0]);
            }}
          />
          <br />
          <input
            type="file"
            onChange={(event) => {
              setImageUpload3(event.target.files[0]);
            }}
          />
          <br />
          <input
            type="file"
            onChange={(event) => {
              setImageUpload4(event.target.files[0]);
            }}
          />
          <br />
          <input
            type="file"
            onChange={(event) => {
              setImageUpload5(event.target.files[0]);
            }}
          />
          <br />
        </div>
      )}

      {category === "아파트" && (
        <div>
          <h2>아파트 양식</h2>
          <br />
          <form onSubmit={uploadAndSubmitForm}>
            {기본정보}
            {양식들()}
            <hr />
            <textarea name="content" placeholder="내용" rows="10" cols="60" />
            <br />
            <button type="submit">업로드 및 제출</button>
          </form>
        </div>
      )}

      {category === "상가건물" && (
        <div>
          <h2>상가건물 양식</h2>
          <br />
          <form onSubmit={uploadAndSubmitForm}>
            {기본정보}
            {양식들()}
            <hr />
            <textarea name="content" placeholder="내용" rows="10" cols="60" />
            <br />
            <button type="submit">업로드 및 제출</button>
          </form>
        </div>
      )}

      {category === "상가주택" && (
        <div>
          <h2>상가주택 양식</h2>
          <br />
          <form onSubmit={uploadAndSubmitForm}>
            {기본정보}
            {양식들()}
            <hr />
            <textarea name="content" placeholder="내용" rows="10" cols="60" />
            <br />
            <button type="submit">업로드 및 제출</button>
          </form>
        </div>
      )}

      {category === "상가점포" && (
        <div>
          <h2>상가점포 양식</h2>
          <br />
          <form onSubmit={uploadAndSubmitForm}>
            {기본정보}
            {양식들()}
            <hr />
            <textarea name="content" placeholder="내용" rows="10" cols="60" />
            <br />
            <button type="submit">업로드 및 제출</button>
          </form>
        </div>
      )}

      {category === "빌라" && (
        <div>
          <h2>빌라/다세대 양식</h2>
          <br />
          <form onSubmit={uploadAndSubmitForm}>
            {기본정보}
            {양식들()}
            <hr />
            <textarea name="content" placeholder="내용" rows="10" cols="60" />
            <br />
            <button type="submit">업로드 및 제출</button>
          </form>
        </div>
      )}

      {category === "단독" && (
        <div>
          <h2>단독/다가구 양식</h2>
          <br />
          <form onSubmit={uploadAndSubmitForm}>
            {기본정보}
            {양식들()}
            <hr />
            <textarea name="content" placeholder="내용" rows="10" cols="60" />
            <br />
            <button type="submit">업로드 및 제출</button>
          </form>
        </div>
      )}

      {category === "토지" && (
        <div>
          <h2>토지 양식</h2>
          <br />
          <form onSubmit={uploadAndSubmitForm}>
            {기본정보}
            {양식들()}
            <hr />
            <textarea name="content" placeholder="내용" rows="10" cols="60" />
            <br />
            <button type="submit">업로드 및 제출</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Page;
