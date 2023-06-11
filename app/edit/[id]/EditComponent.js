"use client";
import React, { useState } from "react";
import { storage } from "/firebase";
import {
  ref,
  refFromURL,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MultiCarousel from "@/components/MultiCarousel";

const EditComponent = ({ result }) => {
  console.log(result, '에딧_리절트')
  const [image , setImage] = useState(result.urls[0])
  const [imageUpload1, setImageUpload1] = useState(null);
  const [imageUpload2, setImageUpload2] = useState(null);
  const [imageUpload3, setImageUpload3] = useState(null);
  const [imageUpload4, setImageUpload4] = useState(null);
  const [imageUpload5, setImageUpload5] = useState(null);

  const [inputImage, setInputImage] = useState(null);
  const [category, setCategory] = useState(result.매물종류);
  const [tradeType, setTradeType] = useState(result.거래유형);

  const router = useRouter();


  const uploadAndSubmitForm = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (image === result.urls[0] && image !== null) {
      console.log("기존 이미지입니다.");

      let formData = {}
      if(category == '아파트'){ 
       formData = {
        _id: result._id,
        title: event.target.title.value,
        content: event.target.content.value,

          매물종류: event.target.매물종류.value, 
          거래유형: event.target.거래유형.value,
          소재지:event.target.소재지.value,    
          금액1: event.target.금액1.value,
          금액2: event.target.금액2 && event.target.금액2.value,
          공급면적:event.target.공급면적.value,
            전용면적:event.target.전용면적.value,
            해당동:event.target.해당동.value,
            입주가능일:event.target.입주가능일.value,
            방향:event.target.방향.value,
            현관구조:event.target.현관구조.value, 
            해당층:event.target.해당층.value,
            방:event.target.방.value,
            월관리비:event.target.월관리비.value,
            건축물용도:event.target.건축물용도.value,
            총세대수:event.target.총세대수.value,
            사용승인일:event.target.사용승인일.value,
            주차가능여부:event.target.주차가능여부.value,
            총주차대수:event.target.총주차대수.value,
            난방방식:event.target.난방방식.value
            }
      };
      if(category == '상가건물'){
        formData = {
          _id: result._id,
        title: event.target.title.value,
        content: event.target.content.value,
          
          매물종류: event.target.매물종류.value, 
            거래유형: event.target.거래유형.value,
            소재지:event.target.소재지.value,    
            금액1: event.target.금액1.value,
            금액2: event.target.금액2 && event.target.금액2.value,
            연면적:event.target.연면적.value,
            대지면적:event.target.대지면적.value,
            입주가능일:event.target.입주가능일.value,
            방향:event.target.방향.value,
            지하층:event.target.지하층.value,
            현업종:event.target.현업종.value,
            추천업종:event.target.추천업종.value,
            건축물용도:event.target.건축물용도.value,
            총점포수:event.target.총점포수.value,
            사용승인일:event.target.사용승인일.value,
            총주차대수:event.target.총주차대수.value,
        };
     } 
     if(category == '상가주택'){
      formData = {
        _id: result._id,
        title: event.target.title.value,
        content: event.target.content.value,
        
        매물종류: event.target.매물종류.value, 
          거래유형: event.target.거래유형.value,
          소재지:event.target.소재지.value,    
          금액1: event.target.금액1.value,
          금액2: event.target.금액2 && event.target.금액2.value,
          대지면적:event.target.대지면적.value,
          연면적:event.target.연면적.value,
          입주가능일:event.target.입주가능일.value,
          방향:event.target.방향.value,
          지하층:event.target.지하층.value,
          방:event.target.방.value,
          건축물용도:event.target.건축물용도.value,
          총점포수:event.target.총점포수.value,
          사용승인일:event.target.사용승인일.value,
          주차가능여부:event.target.주차가능여부.value,
          총주차대수:event.target.총주차대수.value,
      };
   }
   if(category == '상가점포'){
    formData = {
      _id: result._id,
        title: event.target.title.value,
        content: event.target.content.value,
      
        매물종류: event.target.매물종류.value, 
        거래유형: event.target.거래유형.value,
        소재지:event.target.소재지.value,    
        금액1: event.target.금액1.value,
        금액2: event.target.금액2 && event.target.금액2.value,
        계약면적:event.target.계약면적.value,
        전용면적:event.target.전용면적.value,
        입주가능일:event.target.입주가능일.value,
        방향:event.target.방향.value,
        해당층:event.target.해당층.value,
        방:event.target.방.value,
        건물종류:event.target.건물종류.value,
        건축물용도:event.target.건축물용도.value,
        현업종:event.target.현업종.value,
        추천업종:event.target.추천업종.value,
        총점포수:event.target.총점포수.value,
        사용승인일:event.target.사용승인일.value,
        주차가능여부:event.target.주차가능여부.value,
        총주차대수:event.target.총주차대수.value,
    };
 }
 if(category == '빌라'){
  formData = {
    _id: result._id,
    title: event.target.title.value,
    content: event.target.content.value,
    
      매물종류: event.target.매물종류.value, 
      거래유형: event.target.거래유형.value,
      소재지:event.target.소재지.value,    
      금액1: event.target.금액1.value,
      금액2: event.target.금액2 && event.target.금액2.value,
      공급면적:event.target.공급면적.value,
      전용면적:event.target.전용면적.value,
      해당동:event.target.해당동.value,
      입주가능일:event.target.입주가능일.value,
      방향:event.target.방향.value,
      해당층:event.target.해당층.value,
      방:event.target.방.value,
      월관리비:event.target.월관리비.value,
      건물종류:event.target.건물종류.value,
      건축물용도:event.target.건축물용도.value,
      총세대수:event.target.총세대수.value,
      사용승인일:event.target.사용승인일.value,
      주차가능여부:event.target.주차가능여부.value,
      총주차대수:event.target.총주차대수.value,
      건물보안:event.target.건물보안.value,
  };
}
if(category == '단독'){
  formData = {
    _id: result._id,
    title: event.target.title.value,
    content: event.target.content.value,
    
      매물종류: event.target.매물종류.value, 
      거래유형: event.target.거래유형.value,
      소재지:event.target.소재지.value,    
      금액1: event.target.금액1.value,
      금액2: event.target.금액2 && event.target.금액2.value,

      대지면적:event.target.대지면적.value,
      건축면적:event.target.건축면적.value,
      연면적:event.target.연면적.value,
      입주가능일:event.target.입주가능일.value,
      방향:event.target.방향.value,
      지하층:event.target.지하층.value,
      방:event.target.방.value,
      월관리비:event.target.월관리비.value,
      건물종류:event.target.건물종류.value,
      건축물용도:event.target.건축물용도.value,
      총세대수:event.target.총세대수.value,
      사용승인일:event.target.사용승인일.value,
      주차가능여부:event.target.주차가능여부.value,
      총주차대수:event.target.총주차대수.value,
  };
}
if(category == '토지'){
  formData = {
    _id: result._id,
    title: event.target.title.value,
    content: event.target.content.value,
    
      매물종류: event.target.매물종류.value, 
      거래유형: event.target.거래유형.value,
      소재지:event.target.소재지.value,    
      금액1: event.target.금액1.value,
      금액2: event.target.금액2 && event.target.금액2.value,

      대지면적:event.target.대지면적.value,
      지목:event.target.지목.value,
      용도지역:event.target.용도지역.value,
      건축물용도:event.target.건축물용도.value,
      
  };
}


      console.log(formData);
      await fetch("/api/post/edit", {
        method: "POST",
        body: JSON.stringify(formData),
      })
        .then((r) => r.json())
        .then((response) => {
          if (response === "글 수정 완료") {
            alert("글 수정 완료!");
            router.push("/list");
          } else {
            throw new Error("글 수정 실패!");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      event.preventDefault(); 
      let imageUpload = []
    imageUpload = [ imageUpload1, imageUpload2, imageUpload3, imageUpload4, imageUpload5]
    imageUpload = imageUpload.filter(item => item !== null);
    console.log(imageUpload)

    if (imageUpload == null) {
      alert("이미지를 업로드해주세요.");
      return;
    }

    let urls = []
    let imageRefs = []
    const processImageUploads = async () => {
      for (let i = 0; i < imageUpload.length; i++) {

        const imageRef = ref(storage, `image/${imageUpload[i].name + v4()}`);
        await uploadBytes(imageRef, imageUpload[i])
      .then(async () => {
        alert("이미지 업로드 완료!");
        let url = await getDownloadURL(imageRef)

        // .then((url) => {
        //   console.log("업로드된 이미지 URL:", url);
        //   return url;
        // })                                                                                    
        // .catch((error) => {
        //       console.error("이미지 URL 생성 에러:", error);
        //     });
        
        // images[`image${i + 1}`] = { url: url, imageRef: imageRef };
        imageRefs = [...imageRefs, imageRef]
        urls = [...urls, url]
      }).catch((error) => {
        console.error("이미지 업로드 에러:", error);
      });}}

      await processImageUploads()
      console.log(urls)
      console.log(imageRefs)


      let formData = {urls: urls,
        imageRefs: imageRefs}
      if(category == '아파트'){ 
       formData = {
        _id: result._id,
              title: event.target.title.value,
              content: event.target.content.value,

          매물종류: event.target.매물종류.value, 
          거래유형: event.target.거래유형.value,
          소재지:event.target.소재지.value,    
          금액1: event.target.금액1.value,
          금액2: event.target.금액2 && event.target.금액2.value,
          공급면적:event.target.공급면적.value,
            전용면적:event.target.전용면적.value,
            해당동:event.target.해당동.value,
            입주가능일:event.target.입주가능일.value,
            방향:event.target.방향.value,
            현관구조:event.target.현관구조.value, 
            해당층:event.target.해당층.value,
            방:event.target.방.value,
            월관리비:event.target.월관리비.value,
            건축물용도:event.target.건축물용도.value,
            총세대수:event.target.총세대수.value,
            사용승인일:event.target.사용승인일.value,
            주차가능여부:event.target.주차가능여부.value,
            총주차대수:event.target.총주차대수.value,
            난방방식:event.target.난방방식.value
            }
      };
      if(category == '상가건물'){
        formData = {
          _id: result._id,
          title: event.target.title.value,
          content: event.target.content.value,

          
          매물종류: event.target.매물종류.value, 
            거래유형: event.target.거래유형.value,
            금액1: event.target.금액1.value,
            금액2: event.target.금액2 && event.target.금액2.value,
            연면적:event.target.연면적.value,
            대지면적:event.target.대지면적.value,
            입주가능일:event.target.입주가능일.value,
            방향:event.target.방향.value,
            지하층:event.target.지하층.value,
            현업종:event.target.현업종.value,
            추천업종:event.target.추천업종.value,
            건축물용도:event.target.건축물용도.value,
            총점포수:event.target.총점포수.value,
            사용승인일:event.target.사용승인일.value,
            총주차대수:event.target.총주차대수.value,
        };
     } 
     if(category == '상가주택'){
      formData = {
        _id: result._id,
              title: event.target.title.value,
              content: event.target.content.value,

        
        매물종류: event.target.매물종류.value, 
          거래유형: event.target.거래유형.value,
          금액1: event.target.금액1.value,
          금액2: event.target.금액2 && event.target.금액2.value,
          대지면적:event.target.대지면적.value,
          연면적:event.target.연면적.value,
          입주가능일:event.target.입주가능일.value,
          방향:event.target.방향.value,
          지하층:event.target.지하층.value,
          방:event.target.방.value,
          건축물용도:event.target.건축물용도.value,
          총점포수:event.target.총점포수.value,
          사용승인일:event.target.사용승인일.value,
          주차가능여부:event.target.주차가능여부.value,
          총주차대수:event.target.총주차대수.value,
      };
   }
   if(category == '상가점포'){
    formData = {
      _id: result._id,
              title: event.target.title.value,
              content: event.target.content.value,

      
        매물종류: event.target.매물종류.value, 
        거래유형: event.target.거래유형.value,
        금액1: event.target.금액1.value,
        금액2: event.target.금액2 && event.target.금액2.value,
        계약면적:event.target.계약면적.value,
        전용면적:event.target.전용면적.value,
        입주가능일:event.target.입주가능일.value,
        방향:event.target.방향.value,
        해당층:event.target.해당층.value,
        방:event.target.방.value,
        건물종류:event.target.건물종류.value,
        건축물용도:event.target.건축물용도.value,
        현업종:event.target.현업종.value,
        추천업종:event.target.추천업종.value,
        총점포수:event.target.총점포수.value,
        사용승인일:event.target.사용승인일.value,
        주차가능여부:event.target.주차가능여부.value,
        총주차대수:event.target.총주차대수.value,
    };
 }
 if(category == '빌라'){
  formData = {
    _id: result._id,
    title: event.target.title.value,
    content: event.target.content.value,

    
      매물종류: event.target.매물종류.value, 
      거래유형: event.target.거래유형.value,
      금액1: event.target.금액1.value,
      금액2: event.target.금액2 && event.target.금액2.value,
      공급면적:event.target.공급면적.value,
      전용면적:event.target.전용면적.value,
      해당동:event.target.해당동.value,
      입주가능일:event.target.입주가능일.value,
      방향:event.target.방향.value,
      해당층:event.target.해당층.value,
      방:event.target.방.value,
      월관리비:event.target.월관리비.value,
      건물종류:event.target.건물종류.value,
      건축물용도:event.target.건축물용도.value,
      총세대수:event.target.총세대수.value,
      사용승인일:event.target.사용승인일.value,
      주차가능여부:event.target.주차가능여부.value,
      총주차대수:event.target.총주차대수.value,
      건물보안:event.target.건물보안.value,
  };
}
if(category == '단독'){
  formData = {
    _id: result._id,
    title: event.target.title.value,
    content: event.target.content.value,

    
      매물종류: event.target.매물종류.value, 
      거래유형: event.target.거래유형.value,
      금액1: event.target.금액1.value,
      금액2: event.target.금액2 && event.target.금액2.value,

      대지면적:event.target.대지면적.value,
      건축면적:event.target.건축면적.value,
      연면적:event.target.연면적.value,
      입주가능일:event.target.입주가능일.value,
      방향:event.target.방향.value,
      지하층:event.target.지하층.value,
      방:event.target.방.value,
      월관리비:event.target.월관리비.value,
      건물종류:event.target.건물종류.value,
      건축물용도:event.target.건축물용도.value,
      총세대수:event.target.총세대수.value,
      사용승인일:event.target.사용승인일.value,
      주차가능여부:event.target.주차가능여부.value,
      총주차대수:event.target.총주차대수.value,
  };
}
if(category == '토지'){
  formData = {
    _id: result._id,
    title: event.target.title.value,
    content: event.target.content.value,

    
      매물종류: event.target.매물종류.value, 
      거래유형: event.target.거래유형.value,
      금액1: event.target.금액1.value,
      금액2: event.target.금액2 && event.target.금액2.value,

      대지면적:event.target.대지면적.value,
      지목:event.target.지목.value,
      용도지역:event.target.용도지역.value,
      건축물용도:event.target.건축물용도.value,
      
  };
}


          fetch("/api/post/edit", {
            method: "POST",
            body: JSON.stringify(formData),
          })
            .then((r) => r.json())
            .then((response) => {
              if (response === "글, 이미지 수정 완료") {
                alert("폼 제출 완료!");
                router.push("/list");
                // window.location.reload();
              } else {
                throw new Error("폼 제출 실패");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        
    }

    // 여기서 image 객체는 쌩 이미지 객체임.
  };

  // const imageListRef = ref(storage, "image/");
  // useEffect(() => {
  //   listAll(imageListRef).then((r) => {
  //     r.items.forEach((i) => {
  //       console.log(i, "이건가?");
  //       getDownloadURL(i).then((url) => {
  //         console.log(url);
  //       });
  //     });
  //   });
  //   // 있는 사진 다 보여주는 코드 ////
  // }, []);

  const imageDelete = async () => {
    const confirmDelete = window.confirm('이미지를 모두 삭제하시겠습니까?');
    if (confirmDelete) {

      const deleteImage = async () => {
      for (let i = 0; i < result.imageRefs.length; i++) {

        const imageRef = ref(storage, result.imageRefs[i]._location.path_,);
        
        await deleteObject(imageRef)
        .then(() => {
          console.log("이미지 삭제 완료");
        })
        .catch((error) => {
          console.error("이미지 삭제 에러:", error);
        });


    }}

      await deleteImage()
      console.log(result)
    
    fetch("/api/image/delete", {
      method: "POST",
      body: result._id,
    }).then((response) => {
      if (response === "삭제 안됨") {
        alert("폼 제출 완료!");
        console.log(response, "db 삭제 안됨");
        setImage(null);
        //setImage1
        // window.location.reload();
      } else {
        console.log(response, "db 삭제됨");
        alert("디비 삭제 완료");
        setImage(null);
      }
    });

  }
  };

  return (
    <div className="m-auto max-w-3xl">

<div>
<span>사진 : </span>
        {image ? (
          <MultiCarousel urls={result.urls}/>
        ) : (
          "사진을 첨부해주세요."
        )}

        {image ? (
          <p
            onClick={() => {
              imageDelete();
            }}
          >
            사진 전체 삭제
          </p>
        ) : (
          // <input
          //   type="file"
          //   onChange={(event) => {
          //     setInputImage(event.target.files[0]); //썡 이미지 객체를 넣어버림.
          //     // imageUpload();
          //   }}
          // />
          <div ><span>사진 : </span>
          <input
            type="file"
            onChange={(event) => {
              setImageUpload1(event.target.files[0]);
            }}
          />
          <br/>
          <input
            type="file"
            onChange={(event) => {
              setImageUpload2(event.target.files[0]);
            }}
          />
          <br/>
          <input
            type="file"
            onChange={(event) => {
              setImageUpload3(event.target.files[0]);
            }}
          />
          <br/>
          <input
            type="file"
            onChange={(event) => {
              setImageUpload4(event.target.files[0]);
            }}
          />
          <br/>
          <input
            type="file"
            onChange={(event) => {
              setImageUpload5(event.target.files[0]);
            }}
          />
          <br/>
          
          </div>  
        )}
</div>

      {category === '아파트' && (
        <div>
          <h2>아파트 양식</h2>
          <br/>
          <form onSubmit={uploadAndSubmitForm}>
        
          <input
          name="매물종류"
          value="아파트"
          style={{ display: "none" }}
        />

        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result._id.toString()}
        />

        <h1>기본정보</h1>
        <br/>
        <span>제목 : </span><input
          name="title"
          placeholder="제목"
          defaultValue={result.title}
        />
        <br/>
        
        


        <hr/>
        {tradeType === '매매' && (<><span>매매가 : </span><input name="금액1" placeholder="금액" defaultValue={result.금액1}/>만원
         <input
          name="거래유형"
          value="매매"
          style={{ display: "none" }}
        /></>)}
        {tradeType === '년세' && (<><span>년세가 : </span><input name="금액1" placeholder="보증금" defaultValue={result.금액1}/>만원 <input name="금액2" placeholder="년세금" defaultValue={result.금액2}/>만원<input
          name="거래유형"
          value="년세"
          style={{ display: "none" }}
        /></>)}
        {tradeType === '월세' && (<><span>월세가 : </span><input name="금액1" placeholder="보증금" defaultValue={result.금액1}/>만원 <input name="금액2" placeholder="월세금" defaultValue={result.금액2}/>만원<input
          name="거래유형"
          value="월세"
          style={{ display: "none" }}
        /></>)}
        {tradeType === '전세' && (<><span>전세가 : </span><input name="금액1" placeholder="전세금" defaultValue={result.금액1}/>만원<input
          name="거래유형"
          value="전세"
          style={{ display: "none" }}
        /></>)}

        <br/>
        <span>소재지 : </span><input name="소재지" placeholder="소재지" defaultValue={result.소재지}/>
         <br/>
        <span>공급면적 : </span><input name="공급면적" placeholder="공급면적" defaultValue={result.공급면적}/>
        <br/>
         <span>전용면적 : </span><input name="전용면적" placeholder="전용면적" defaultValue={result.전용면적}/>
         <br/>
         <span>해당동 : </span><input name="해당동" placeholder="해당동" defaultValue={result.해당동}/>
         <br/>
         <span>입주가능일 : </span><input name="입주가능일" placeholder="입주가능일" defaultValue={result.입주가능일}/>
         <br/>
         <span>방향 : </span><input name="방향" placeholder="방향" defaultValue={result.방향}/>
         <br/>
         <span>현관구조 : </span><input name="현관구조" placeholder="현관구조" defaultValue={result.현관구조}/>
         <br/>
         <span>해당층 : </span><input name="해당층" placeholder="해당층/총층" defaultValue={result.해당층}/>
         <br/>
         <span>방/욕실수 : </span><input name="방" placeholder="방/욕실수" defaultValue={result.방}/>
         <br/>
         <span>월관리비 : </span><input name="월관리비" placeholder="월관리비" defaultValue={result.월관리비}/>
         <br/>
         <span>건축물용도 : </span><input name="건축물용도" placeholder="건축물용도" defaultValue={result.건축물용도}/>
         <br/>
         <span>총세대수 : </span><input name="총세대수" placeholder="총세대수" defaultValue={result.총세대수}/>
         <br/>
         <span>사용승인일 : </span><input name="사용승인일" placeholder="사용승인일" defaultValue={result.사용승인일}/>
         <br/>
         <span>주차가능여부 : </span><input name="주차가능여부" placeholder="주차가능여부" defaultValue={result.주차가능여부}/>
         <br/>
         <span>총주차대수 : </span><input name="총주차대수" placeholder="총주차대수" defaultValue={result.총주차대수}/>
         <br/>
         <span>난방방식 : </span><input name="난방방식" placeholder="난방방식" defaultValue={result.난방방식}/>
         <br/>

        <hr/>
        <textarea

          name="content"
          placeholder="내용"
          rows="10" cols="60"
          defaultValue={result.content}
        />
        <br/>
        <button type="submit">업로드 및 제출</button>
      </form>
        </div> )}
        {category === '상가건물' && (
        <div>
          <h2>상가건물 양식</h2>
          <br/>
          <form onSubmit={uploadAndSubmitForm}>
        
          <input
          name="매물종류"
          value="상가건물"
          style={{ display: "none" }}
        />

        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result._id.toString()}
        />

        <h1>기본정보</h1>
        <br/>
        <span>제목 : </span><input
          name="title"
          placeholder="제목"
          defaultValue={result.title}
        />
        <br/>
        
        


        <hr/>
        {tradeType === '매매' && (<><span>매매가 : </span><input name="금액1" placeholder="금액" defaultValue={result.금액1}/>만원
         <input
          name="거래유형"
          value="매매"
          style={{ display: "none" }}
        /></>)}
        {tradeType === '년세' && (<><span>년세가 : </span><input name="금액1" placeholder="보증금" defaultValue={result.금액1}/>만원 <input name="금액2" placeholder="년세금" defaultValue={result.금액2}/>만원<input
          name="거래유형"
          value="년세"
          style={{ display: "none" }}
        /></>)}
        {tradeType === '월세' && (<><span>월세가 : </span><input name="금액1" placeholder="보증금" defaultValue={result.금액1}/>만원 <input name="금액2" placeholder="월세금" defaultValue={result.금액2}/>만원<input
          name="거래유형"
          value="월세"
          style={{ display: "none" }}
        /></>)}
        {tradeType === '전세' && (<><span>전세가 : </span><input name="금액1" placeholder="전세금" defaultValue={result.금액1}/>만원<input
          name="거래유형"
          value="전세"
          style={{ display: "none" }}
        /></>)}

        <br/>
        <span>소재지 : </span><input name="소재지" placeholder="소재지" defaultValue={result.소재지}/>
         <br/>
        <span>연면적 : </span><input name="연면적" placeholder="연면적" defaultValue={result.연면적}/>
        <br/>
         <span>대지면적 : </span><input name="대지면적" placeholder="대지면적" defaultValue={result.대지면적}/>
         <br/>
         <span>입주가능일 : </span><input name="입주가능일" placeholder="입주가능일" defaultValue={result.입주가능일}/>
         <br/>
         <span>방향 : </span><input name="방향" placeholder="방향" defaultValue={result.방향}/>
         <br/>
         <span>지하층/지상층 : </span><input name="지하층" placeholder="지하층/지상층" defaultValue={result.지하층}/>
         <br/>
         <span>현업종 : </span><input name="현업종" placeholder="현업종" defaultValue={result.현업종}/>
         <br/>
         <span>추천업종 : </span><input name="추천업종" placeholder="추천업종" defaultValue={result.추천업종}/>
         <br/>
         <span>건축물용도 : </span><input name="건축물용도" placeholder="건축물용도" defaultValue={result.건축물용도}/>
         <br/>
         <span>총점포수 : </span><input name="총점포수" placeholder="총점포수" defaultValue={result.총점포수}/>
         <br/>
         <span>사용승인일 : </span><input name="사용승인일" placeholder="사용승인일" defaultValue={result.사용승인일}/>
         <br/>
         <span>총주차대수 : </span><input name="총주차대수" placeholder="총주차대수" defaultValue={result.총주차대수}/>
         <br/>
        
         <br/>
        <hr/>
        <textarea

          name="content"
          placeholder="내용"
          rows="10" cols="60"
          defaultValue={result.content}
        />
        <br/>
        <button type="submit">업로드 및 제출</button>
      </form>
        </div> )}
        {category === '상가주택' && (
        <div>
          <h2>상가주택 양식</h2>
          <br/>
          <form onSubmit={uploadAndSubmitForm}>
        
          <input
          name="매물종류"
          value="상가주택"
          style={{ display: "none" }}
        />

        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result._id.toString()}
        />

        <h1>기본정보</h1>
        <br/>
        <span>제목 : </span><input
          name="title"
          placeholder="제목"
          defaultValue={result.title}
        />
        <br/>
        
        


        <hr/>
        {tradeType === '매매' && (<><span>매매가 : </span><input name="금액1" placeholder="금액" defaultValue={result.금액1}/>만원
         <input
          name="거래유형"
          value="매매"
          style={{ display: "none" }}
        /></>)}
        {tradeType === '년세' && (<><span>년세가 : </span><input name="금액1" placeholder="보증금" defaultValue={result.금액1}/>만원 <input name="금액2" placeholder="년세금" defaultValue={result.금액2}/>만원<input
          name="거래유형"
          value="년세"
          style={{ display: "none" }}
        /></>)}
        {tradeType === '월세' && (<><span>월세가 : </span><input name="금액1" placeholder="보증금" defaultValue={result.금액1}/>만원 <input name="금액2" placeholder="월세금" defaultValue={result.금액2}/>만원<input
          name="거래유형"
          value="월세"
          style={{ display: "none" }}
        /></>)}
        {tradeType === '전세' && (<><span>전세가 : </span><input name="금액1" placeholder="전세금" defaultValue={result.금액1}/>만원<input
          name="거래유형"
          value="전세"
          style={{ display: "none" }}
        /></>)}

        <br/>
        <span>소재지 : </span><input name="소재지" placeholder="소재지" defaultValue={result.소재지}/>
         <br/>
         <span>대지면적 : </span><input name="대지면적" placeholder="대지면적" defaultValue={result.대지면적}/>
         <br/>
        <span>연면적 : </span><input name="연면적" placeholder="연면적" defaultValue={result.연면적}/>
        <br/>
         <span>입주가능일 : </span><input name="입주가능일" placeholder="입주가능일" defaultValue={result.입주가능일}/>
         <br/>
         <span>방향 : </span><input name="방향" placeholder="방향" defaultValue={result.방향}/>
         <br/>
         <span>지하층/지상층 : </span><input name="지하층" placeholder="지하층/지상층" defaultValue={result.지하층}/>
         <br/>
         <span>방/욕실수 : </span><input name="방" placeholder="방/욕실수" defaultValue={result.방}/>
         <br/>
         <span>건축물용도 : </span><input name="건축물용도" placeholder="건축물용도" defaultValue={result.건축물용도}/>
         <br/>
         <span>총점포수 : </span><input name="총점포수" placeholder="총점포수" defaultValue={result.총점포수}/>
         <br/>
         <span>사용승인일 : </span><input name="사용승인일" placeholder="사용승인일" defaultValue={result.사용승인일}/>
         <br/>
         <span>주차가능여부 : </span><input name="주차가능여부" placeholder="주차가능여부" defaultValue={result.주차가능여부}/>
         <br/>
         <span>총주차대수 : </span><input name="총주차대수" placeholder="총주차대수" defaultValue={result.총주차대수}/>
         <br/>
        
         <br/>
        <hr/>
        <textarea

          name="content"
          placeholder="내용"
          rows="10" cols="60"
          defaultValue={result.content}
        />
        <br/>
        <button type="submit">업로드 및 제출</button>
      </form>
        </div> )}
        {category === '상가점포' && (
        <div>
          <h2>상가점포 양식</h2>
          <br/>
          <form onSubmit={uploadAndSubmitForm}>
        
          <input
          name="매물종류"
          value="상가점포"
          style={{ display: "none" }}
        />

        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result._id.toString()}
        />

        <h1>기본정보</h1>
        <br/>
        <span>제목 : </span><input
          name="title"
          placeholder="제목"
          defaultValue={result.title}
        />
        <br/>
        
        


        <hr/>
        {tradeType === '매매' && (<><span>매매가 : </span><input name="금액1" placeholder="금액" defaultValue={result.금액1}/>만원
         <input
          name="거래유형"
          value="매매"
          style={{ display: "none" }}
        /></>)}
        {tradeType === '년세' && (<><span>년세가 : </span><input name="금액1" placeholder="보증금" defaultValue={result.금액1}/>만원 <input name="금액2" placeholder="년세금" defaultValue={result.금액2}/>만원<input
          name="거래유형"
          value="년세"
          style={{ display: "none" }}
        /></>)}
        {tradeType === '월세' && (<><span>월세가 : </span><input name="금액1" placeholder="보증금" defaultValue={result.금액1}/>만원 <input name="금액2" placeholder="월세금" defaultValue={result.금액2}/>만원<input
          name="거래유형"
          value="월세"
          style={{ display: "none" }}
        /></>)}
        {tradeType === '전세' && (<><span>전세가 : </span><input name="금액1" placeholder="전세금" defaultValue={result.금액1}/>만원<input
          name="거래유형"
          value="전세"
          style={{ display: "none" }}
        /></>)}

        <br/>
        <span>소재지 : </span><input name="소재지" placeholder="소재지" defaultValue={result.소재지}/>
         <br/>
         <span>계약면적 : </span><input name="계약면적" placeholder="계약면적" defaultValue={result.계약면적}/>
         <br/>
        <span>전용면적 : </span><input name="전용면적" placeholder="전용면적" defaultValue={result.전용면적}/>
        <br/>
         <span>입주가능일 : </span><input name="입주가능일" placeholder="입주가능일" defaultValue={result.입주가능일}/>
         <br/>
         <span>방향 : </span><input name="방향" placeholder="방향" defaultValue={result.방향}/>
         <br/>
         <span>해당층/총층 : </span><input name="해당층" placeholder="해당층/총층" defaultValue={result.해당층}/>
         <br/>
         <span>방/욕실수 : </span><input name="방" placeholder="방/욕실수" defaultValue={result.방}/>
         <br/>
         <span>건물종류 : </span><input name="건물종류" placeholder="건물종류" defaultValue={result.건물종류}/>
         <br/>
         <span>건축물용도 : </span><input name="건축물용도" placeholder="건축물용도" defaultValue={result.건축물용도}/>
         <br/>
         <span>현업종 : </span><input name="현업종" placeholder="현업종" defaultValue={result.현업종}/>
         <br/>
         <span>추천업종 : </span><input name="추천업종" placeholder="추천업종" defaultValue={result.추천업종}/>
         <br/>
         <span>총점포수 : </span><input name="총점포수" placeholder="총점포수" defaultValue={result.총점포수}/>
         <br/>
         <span>사용승인일 : </span><input name="사용승인일" placeholder="사용승인일" defaultValue={result.사용승인일}/>
         <br/>
         <span>주차가능여부 : </span><input name="주차가능여부" placeholder="주차가능여부" defaultValue={result.주차가능여부}/>
         <br/>
         <span>총주차대수 : </span><input name="총주차대수" placeholder="총주차대수" defaultValue={result.총주차대수}/>
         <br/>
        
         <br/>
        <hr/>
        <textarea

          name="content"
          placeholder="내용"
          rows="10" cols="60"
          defaultValue={result.content}
        />
        <br/>
        <button type="submit">업로드 및 제출</button>
      </form>
        </div> )}
        {category === '빌라' && (
        <div>
          <h2>빌라/다세대 양식</h2>
          <br/>
          <form onSubmit={uploadAndSubmitForm}>
        
          <input
          name="매물종류"
          value="빌라"
          style={{ display: "none" }}
        />

        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result._id.toString()}
        />

        <h1>기본정보</h1>
        <br/>
        <span>제목 : </span><input
          name="title"
          placeholder="제목"
          defaultValue={result.title}
        />
        <br/>
        
        


        <hr/>
        {tradeType === '매매' && (<><span>매매가 : </span><input name="금액1" placeholder="금액" defaultValue={result.금액1}/>만원
         <input
          name="거래유형"
          value="매매"
          style={{ display: "none" }}
        /></>)}
        {tradeType === '년세' && (<><span>년세가 : </span><input name="금액1" placeholder="보증금" defaultValue={result.금액1}/>만원 <input name="금액2" placeholder="년세금" defaultValue={result.금액2}/>만원<input
          name="거래유형"
          value="년세"
          style={{ display: "none" }}
        /></>)}
        {tradeType === '월세' && (<><span>월세가 : </span><input name="금액1" placeholder="보증금" defaultValue={result.금액1}/>만원 <input name="금액2" placeholder="월세금" defaultValue={result.금액2}/>만원<input
          name="거래유형"
          value="월세"
          style={{ display: "none" }}
        /></>)}
        {tradeType === '전세' && (<><span>전세가 : </span><input name="금액1" placeholder="전세금" defaultValue={result.금액1}/>만원<input
          name="거래유형"
          value="전세"
          style={{ display: "none" }}
        /></>)}

        <br/>
        <span>소재지 : </span><input name="소재지" placeholder="소재지" defaultValue={result.소재지}/>
         <br/>
         <span>공급면적 : </span><input name="공급면적" placeholder="공급면적" defaultValue={result.공급면적}/>
         <br/>
        <span>전용면적 : </span><input name="전용면적" placeholder="전용면적" defaultValue={result.전용면적}/>
        <br/>
        <span>해당동 : </span><input name="해당동" placeholder="해당동" defaultValue={result.해당동}/>
        <br/>
         <span>입주가능일 : </span><input name="입주가능일" placeholder="입주가능일" defaultValue={result.입주가능일}/>
         <br/>
         <span>방향 : </span><input name="방향" placeholder="방향" defaultValue={result.방향}/>
         <br/>
         <span>해당층/총층 : </span><input name="해당층" placeholder="해당층/총층" defaultValue={result.해당층}/>
         <br/>
         <span>방/욕실수 : </span><input name="방" placeholder="방/욕실수" defaultValue={result.방}/>
         <br/>
         <span>월관리비 : </span><input name="월관리비" placeholder="월관리비" defaultValue={result.월관리비}/>
         <br/>
         <span>건물종류 : </span><input name="건물종류" placeholder="건물종류" defaultValue={result.건물종류}/>
         <br/>
         <span>건축물용도 : </span><input name="건축물용도" placeholder="건축물용도" defaultValue={result.건축물용도}/>
         <br/>
         <span>총세대수 : </span><input name="총세대수" placeholder="총세대수" defaultValue={result.총세대수}/>
         <br/>
         <span>사용승인일 : </span><input name="사용승인일" placeholder="사용승인일" defaultValue={result.사용승인일}/>
         <br/>
         <span>주차가능여부 : </span><input name="주차가능여부" placeholder="주차가능여부" defaultValue={result.주차가능여부}/>
         <br/>
         <span>총주차대수 : </span><input name="총주차대수" placeholder="총주차대수" defaultValue={result.총주차대수}/>
         <br/>
         <span>건물보안 : </span><input name="건물보안" placeholder="건물보안" defaultValue={result.건물보안}/>
         <br/>
        
         <br/>
        <hr/>
        <textarea

          name="content"
          placeholder="내용"
          rows="10" cols="60"
          defaultValue={result.content}
        />
        <br/>
        <button type="submit">업로드 및 제출</button>
      </form>
        </div> )}
        {category === '단독' && (
        <div>
          <h2>단독/다가구 양식</h2>
          <br/>
          <form onSubmit={uploadAndSubmitForm}>
        
          <input
          name="매물종류"
          value="단독"
          style={{ display: "none" }}
        />

        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result._id.toString()}
        />

        <h1>기본정보</h1>
        <br/>
        <span>제목 : </span><input
          name="title"
          placeholder="제목"
          defaultValue={result.title}
        />
        <br/>
        
        


        <hr/>
        {tradeType === '매매' && (<><span>매매가 : </span><input name="금액1" placeholder="금액" defaultValue={result.금액1}/>만원
         <input
          name="거래유형"
          value="매매"
          style={{ display: "none" }}
        /></>)}
        {tradeType === '년세' && (<><span>년세가 : </span><input name="금액1" placeholder="보증금" defaultValue={result.금액1}/>만원 <input name="금액2" placeholder="년세금" defaultValue={result.금액2}/>만원<input
          name="거래유형"
          value="년세"
          style={{ display: "none" }}
        /></>)}
        {tradeType === '월세' && (<><span>월세가 : </span><input name="금액1" placeholder="보증금" defaultValue={result.금액1}/>만원 <input name="금액2" placeholder="월세금" defaultValue={result.금액2}/>만원<input
          name="거래유형"
          value="월세"
          style={{ display: "none" }}
        /></>)}
        {tradeType === '전세' && (<><span>전세가 : </span><input name="금액1" placeholder="전세금" defaultValue={result.금액1}/>만원<input
          name="거래유형"
          value="전세"
          style={{ display: "none" }}
        /></>)}

        <br/>
        <span>소재지 : </span><input name="소재지" placeholder="소재지" defaultValue={result.소재지}/>
         <br/>
         <span>대지면적 : </span><input name="대지면적" placeholder="대지면적" defaultValue={result.대지면적}/>
         <br/>
        <span>건축면적 : </span><input name="건축면적" placeholder="건축면적" defaultValue={result.건축면적}/>
        <br/>
        <span>연면적 : </span><input name="연면적" placeholder="연면적" defaultValue={result.연면적}/>
        <br/>
         <span>입주가능일 : </span><input name="입주가능일" placeholder="입주가능일" defaultValue={result.입주가능일}/>
         <br/>
         <span>방향 : </span><input name="방향" placeholder="방향" defaultValue={result.방향}/>
         <br/>
         <span>지하층/지상층 : </span><input name="지하층" placeholder="지하층/지상층" defaultValue={result.지하층}/>
         <br/>
         <span>방/욕실수 : </span><input name="방" placeholder="방/욕실수" defaultValue={result.방}/>
         <br/>
         <span>월관리비 : </span><input name="월관리비" placeholder="월관리비" defaultValue={result.월관리비}/>
         <br/>
         <span>건물종류 : </span><input name="건물종류" placeholder="건물종류" defaultValue={result.건물종류}/>
         <br/>
         <span>건축물용도 : </span><input name="건축물용도" placeholder="건축물용도" defaultValue={result.건축물용도}/>
         <br/>
         <span>총세대수 : </span><input name="총세대수" placeholder="총세대수" defaultValue={result.총세대수}/>
         <br/>
         <span>사용승인일 : </span><input name="사용승인일" placeholder="사용승인일" defaultValue={result.사용승인일}/>
         <br/>
         <span>주차가능여부 : </span><input name="주차가능여부" placeholder="주차가능여부" defaultValue={result.주차가능여부}/>
         <br/>
         <span>총주차대수 : </span><input name="총주차대수" placeholder="총주차대수" defaultValue={result.총주차대수}/>
         <br/>
         <span>건물보안 : </span><input name="건물보안" placeholder="건물보안" defaultValue={result.건물보안}/>
         <br/>
        
         <br/>
        <hr/>
        <textarea

          name="content"
          placeholder="내용"
          rows="10" cols="60"
          defaultValue={result.content}
        />
        <br/>
        <button type="submit">업로드 및 제출</button>
      </form>
        </div> )}
        {category === '토지' && (
        <div>
          <h2>토지 양식</h2>
          <br/>
          <form onSubmit={uploadAndSubmitForm}>
        
          <input
          name="매물종류"
          value="토지"
          style={{ display: "none" }}
        />

        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result._id.toString()}
        />

        <h1>기본정보</h1>
        <br/>
        <span>제목 : </span><input
          name="title"
          placeholder="제목"
          defaultValue={result.title}
        />
        <br/>
        
        


        <hr/>
        {tradeType === '매매' && (<><span>매매가 : </span><input name="금액1" placeholder="금액" defaultValue={result.금액1}/>만원
         <input
          name="거래유형"
          value="매매"
          style={{ display: "none" }}
        /></>)}
        {tradeType === '년세' && (<><span>년세가 : </span><input name="금액1" placeholder="보증금" defaultValue={result.금액1}/>만원 <input name="금액2" placeholder="년세금" defaultValue={result.금액2}/>만원<input
          name="거래유형"
          value="년세"
          style={{ display: "none" }}
        /></>)}
        {tradeType === '월세' && (<><span>월세가 : </span><input name="금액1" placeholder="보증금" defaultValue={result.금액1}/>만원 <input name="금액2" placeholder="월세금" defaultValue={result.금액2}/>만원<input
          name="거래유형"
          value="월세"
          style={{ display: "none" }}
        /></>)}
        {tradeType === '전세' && (<><span>전세가 : </span><input name="금액1" placeholder="전세금" defaultValue={result.금액1}/>만원<input
          name="거래유형"
          value="전세"
          style={{ display: "none" }}
        /></>)}

        <br/>
        <span>소재지 : </span><input name="소재지" placeholder="소재지" defaultValue={result.소재지}/>
         <br/>
         <span>대지면적 : </span><input name="대지면적" placeholder="대지면적" defaultValue={result.대지면적}/>
         <br/>
        <span>지목 : </span><input name="지목" placeholder="지목" defaultValue={result.지목}/>
        <br/>
        <span>용도지역 : </span><input name="용도지역" placeholder="용도지역" defaultValue={result.용도지역}/>
        <br/>
         <span>건축물용도 : </span><input name="건축물용도" placeholder="건축물용도" defaultValue={result.건축물용도}/>
         <br/>
         
        
         <br/>
        <hr/>
        <textarea

          name="content"
          placeholder="내용"
          rows="10" cols="60"
          defaultValue={result.content}
        />
        <br/>
        <button type="submit">업로드 및 제출</button>
      </form>
        </div> )}
    </div>
  );
};

export default EditComponent;
