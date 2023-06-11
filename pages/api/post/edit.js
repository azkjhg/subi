import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
export default async function handler(request, response) {
  const client = await connectDB;
  const db = client.db("subi");
  request.body = JSON.parse(request.body);
  console.log(request.body, "리퀘스트.바디");
  if (!request.body.url) {
    // 글만 수정할 때
    try {
let form = {}
if(request.body.매물종류 == '아파트'){
  form = {
    title: request.body.title, 
    content: request.body.content,

                  매물종류: request.body.매물종류, 
                  거래유형: request.body.거래유형,
                  소재지: request.body.소재지,
                  금액1: request.body.금액1,
                  금액2: request.body.금액2 && request.body.금액2,
                  공급면적:request.body.공급면적,
                  전용면적:request.body.전용면적,
                  해당동:request.body.해당동,
                  입주가능일:request.body.입주가능일,
                  방향:request.body.방향,
                  현관구조:request.body.현관구조, 
                  해당층:request.body.해당층,
                  방:request.body.방,
                  월관리비:request.body.월관리비,
                  건축물용도:request.body.건축물용도,
                  총세대수:request.body.총세대수,
                  사용승인일:request.body.사용승인일,
                  주차가능여부:request.body.주차가능여부,
                  총주차대수:request.body.총주차대수,
                  난방방식:request.body.난방방식,
  }
}
if(request.body.매물종류 == '상가건물'){
  form = {
    title: request.body.title, 
    content: request.body.content,

                  매물종류: request.body.매물종류, 
            거래유형: request.body.거래유형,
            소재지:request.body.소재지,    
            금액1: request.body.금액1,
            금액2: request.body.금액2 && request.body.금액2,
            연면적:request.body.연면적,
            대지면적:request.body.대지면적,
            입주가능일:request.body.입주가능일,
            방향:request.body.방향,
            지하층:request.body.지하층,
            현업종:request.body.현업종,
            추천업종:request.body.추천업종,
            건축물용도:request.body.건축물용도,
            총점포수:request.body.총점포수,
            사용승인일:request.body.사용승인일,
            총주차대수:request.body.총주차대수,
  }
}
if(request.body.매물종류 == '상가주택'){
  form = {
    title: request.body.title, 
    content: request.body.content,

            매물종류: request.body.매물종류, 
          거래유형: request.body.거래유형,
          소재지:request.body.소재지,    
          금액1: request.body.금액1,
          금액2: request.body.금액2 && request.body.금액2,
          대지면적:request.body.대지면적,
          연면적:request.body.연면적,
          입주가능일:request.body.입주가능일,
          방향:request.body.방향,
          지하층:request.body.지하층,
          방:request.body.방,
          건축물용도:request.body.건축물용도,
          총점포수:request.body.총점포수,
          사용승인일:request.body.사용승인일,
          주차가능여부:request.body.주차가능여부,
          총주차대수:request.body.총주차대수,
  }
}
if(request.body.매물종류 == '상가점포'){
  form = {
    title: request.body.title, 
    content: request.body.content,

          매물종류: request.body.매물종류, 
        거래유형: request.body.거래유형,
        소재지:request.body.소재지,    
        금액1: request.body.금액1,
        금액2: request.body.금액2 && request.body.금액2,
        계약면적:request.body.계약면적,
        전용면적:request.body.전용면적,
        입주가능일:request.body.입주가능일,
        방향:request.body.방향,
        해당층:request.body.해당층,
        방:request.body.방,
        건물종류:request.body.건물종류,
        건축물용도:request.body.건축물용도,
        현업종:request.body.현업종,
        추천업종:request.body.추천업종,
        총점포수:request.body.총점포수,
        사용승인일:request.body.사용승인일,
        주차가능여부:request.body.주차가능여부,
        총주차대수:request.body.총주차대수,
  }
}
if(request.body.매물종류 == '빌라'){
  form = {
    title: request.body.title, 
    content: request.body.content,

    매물종류: request.body.매물종류, 
    거래유형: request.body.거래유형,
    소재지:request.body.소재지,    
    금액1: request.body.금액1,
    금액2: request.body.금액2 && request.body.금액2,
    공급면적:request.body.공급면적,
    전용면적:request.body.전용면적,
    해당동:request.body.해당동,
    입주가능일:request.body.입주가능일,
    방향:request.body.방향,
    해당층:request.body.해당층,
    방:request.body.방,
    월관리비:request.body.월관리비,
    건물종류:request.body.건물종류,
    건축물용도:request.body.건축물용도,
    총세대수:request.body.총세대수,
    사용승인일:request.body.사용승인일,
    주차가능여부:request.body.주차가능여부,
    총주차대수:request.body.총주차대수,
    건물보안:request.body.건물보안,
  }
}
if(request.body.매물종류 == '단독'){
  form = {
    title: request.body.title, 
    content: request.body.content,

    매물종류: request.body.매물종류, 
      거래유형: request.body.거래유형,
      소재지:request.body.소재지,    
      금액1: request.body.금액1,
      금액2: request.body.금액2 && request.body.금액2,

      대지면적:request.body.대지면적,
      건축면적:request.body.건축면적,
      연면적:request.body.연면적,
      입주가능일:request.body.입주가능일,
      방향:request.body.방향,
      지하층:request.body.지하층,
      방:request.body.방,
      월관리비:request.body.월관리비,
      건물종류:request.body.건물종류,
      건축물용도:request.body.건축물용도,
      총세대수:request.body.총세대수,
      사용승인일:request.body.사용승인일,
      주차가능여부:request.body.주차가능여부,
      총주차대수:request.body.총주차대수,
  }
}
if(request.body.매물종류 == '토지'){
  form = {
    title: request.body.title, 
    content: request.body.content,

    매물종류: request.body.매물종류, 
      거래유형: request.body.거래유형,
      소재지:request.body.소재지,    
      금액1: request.body.금액1,
      금액2: request.body.금액2 && request.body.금액2,

      대지면적:request.body.대지면적,
      지목:request.body.지목,
      용도지역:request.body.용도지역,
      건축물용도:request.body.건축물용도,
  }
}
      await db
        .collection("post")
        .updateOne(
          { _id: new ObjectId(request.body._id) },
          { $set: form }
        );

      return response.status(200).json("글 수정 완료");
    } catch (error) {
      return response.status(500).json("글 수정 실패");
    }
  } else {
    try {

      let form = {}
if(request.body.매물종류 == '아파트'){
  form = {
    title: request.body.title,
            content: request.body.content,
            url: request.body.url,
            imageRef: request.body.imageRef,

                  매물종류: request.body.매물종류, 
                  거래유형: request.body.거래유형,
                  소재지: request.body.소재지,
                  금액1: request.body.금액1,
                  금액2: request.body.금액2 && request.body.금액2,
                  공급면적:request.body.공급면적,
                  전용면적:request.body.전용면적,
                  해당동:request.body.해당동,
                  입주가능일:request.body.입주가능일,
                  방향:request.body.방향,
                  현관구조:request.body.현관구조, 
                  해당층:request.body.해당층,
                  방:request.body.방,
                  월관리비:request.body.월관리비,
                  건축물용도:request.body.건축물용도,
                  총세대수:request.body.총세대수,
                  사용승인일:request.body.사용승인일,
                  주차가능여부:request.body.주차가능여부,
                  총주차대수:request.body.총주차대수,
                  난방방식:request.body.난방방식,
  }
}
if(request.body.매물종류 == '상가건물'){
  form = {
    title: request.body.title,
    content: request.body.content,
    url: request.body.url,
    imageRef: request.body.imageRef,

                  매물종류: request.body.매물종류, 
            거래유형: request.body.거래유형,
            소재지:request.body.소재지,    
            금액1: request.body.금액1,
            금액2: request.body.금액2 && request.body.금액2,
            연면적:request.body.연면적,
            대지면적:request.body.대지면적,
            입주가능일:request.body.입주가능일,
            방향:request.body.방향,
            지하층:request.body.지하층,
            현업종:request.body.현업종,
            추천업종:request.body.추천업종,
            건축물용도:request.body.건축물용도,
            총점포수:request.body.총점포수,
            사용승인일:request.body.사용승인일,
            총주차대수:request.body.총주차대수,
  }
}
if(request.body.매물종류 == '상가주택'){
  form = {
    title: request.body.title,
    content: request.body.content,
    url: request.body.url,
    imageRef: request.body.imageRef,

            매물종류: request.body.매물종류, 
          거래유형: request.body.거래유형,
          소재지:request.body.소재지,    
          금액1: request.body.금액1,
          금액2: request.body.금액2 && request.body.금액2,
          대지면적:request.body.대지면적,
          연면적:request.body.연면적,
          입주가능일:request.body.입주가능일,
          방향:request.body.방향,
          지하층:request.body.지하층,
          방:request.body.방,
          건축물용도:request.body.건축물용도,
          총점포수:request.body.총점포수,
          사용승인일:request.body.사용승인일,
          주차가능여부:request.body.주차가능여부,
          총주차대수:request.body.총주차대수,
  }
}
if(request.body.매물종류 == '상가점포'){
  form = {
    title: request.body.title,
    content: request.body.content,
    url: request.body.url,
    imageRef: request.body.imageRef,

          매물종류: request.body.매물종류, 
        거래유형: request.body.거래유형,
        소재지:request.body.소재지,    
        금액1: request.body.금액1,
        금액2: request.body.금액2 && request.body.금액2,
        계약면적:request.body.계약면적,
        전용면적:request.body.전용면적,
        입주가능일:request.body.입주가능일,
        방향:request.body.방향,
        해당층:request.body.해당층,
        방:request.body.방,
        건물종류:request.body.건물종류,
        건축물용도:request.body.건축물용도,
        현업종:request.body.현업종,
        추천업종:request.body.추천업종,
        총점포수:request.body.총점포수,
        사용승인일:request.body.사용승인일,
        주차가능여부:request.body.주차가능여부,
        총주차대수:request.body.총주차대수,
  }
}
if(request.body.매물종류 == '빌라'){
  form = {
    title: request.body.title,
    content: request.body.content,
    url: request.body.url,
    imageRef: request.body.imageRef,

    매물종류: request.body.매물종류, 
    거래유형: request.body.거래유형,
    소재지:request.body.소재지,    
    금액1: request.body.금액1,
    금액2: request.body.금액2 && request.body.금액2,
    공급면적:request.body.공급면적,
    전용면적:request.body.전용면적,
    해당동:request.body.해당동,
    입주가능일:request.body.입주가능일,
    방향:request.body.방향,
    해당층:request.body.해당층,
    방:request.body.방,
    월관리비:request.body.월관리비,
    건물종류:request.body.건물종류,
    건축물용도:request.body.건축물용도,
    총세대수:request.body.총세대수,
    사용승인일:request.body.사용승인일,
    주차가능여부:request.body.주차가능여부,
    총주차대수:request.body.총주차대수,
    건물보안:request.body.건물보안,
  }
}
if(request.body.매물종류 == '단독'){
  form = {
    title: request.body.title,
    content: request.body.content,
    url: request.body.url,
    imageRef: request.body.imageRef,

    매물종류: request.body.매물종류, 
      거래유형: request.body.거래유형,
      소재지:request.body.소재지,    
      금액1: request.body.금액1,
      금액2: request.body.금액2 && request.body.금액2,

      대지면적:request.body.대지면적,
      건축면적:request.body.건축면적,
      연면적:request.body.연면적,
      입주가능일:request.body.입주가능일,
      방향:request.body.방향,
      지하층:request.body.지하층,
      방:request.body.방,
      월관리비:request.body.월관리비,
      건물종류:request.body.건물종류,
      건축물용도:request.body.건축물용도,
      총세대수:request.body.총세대수,
      사용승인일:request.body.사용승인일,
      주차가능여부:request.body.주차가능여부,
      총주차대수:request.body.총주차대수,
  }
}
if(request.body.매물종류 == '토지'){
  form = {
    title: request.body.title,
    content: request.body.content,
    url: request.body.url,
    imageRef: request.body.imageRef,

    매물종류: request.body.매물종류, 
      거래유형: request.body.거래유형,
      소재지:request.body.소재지,    
      금액1: request.body.금액1,
      금액2: request.body.금액2 && request.body.금액2,

      대지면적:request.body.대지면적,
      지목:request.body.지목,
      용도지역:request.body.용도지역,
      건축물용도:request.body.건축물용도,
  }
}

      await db.collection("post").updateOne(
        { _id: new ObjectId(request.body._id) },
        {
          $set: form,
        }
      );

      return response.status(200).json("글, 이미지 수정 완료");
    } catch (error) {
      return response.status(500).json("글, 이미지 수정 실패");
    }
  }
}
