export default function formType(category, 구분, result) {
  let 공급면적;
  let 전용면적;
  let 해당동;
  let 입주가능일;
  let 방향;
  let 현관구조;
  let 해당층;
  let 방;
  let 월관리비;
  let 건축물용도;
  let 총세대수;
  let 사용승인일;
  let 주차가능여부;
  let 총주차대수;
  let 난방방식;
  let 연면적;
  let 대지면적;
  let 지하층;
  let 현업종;
  let 추천업종;
  let 총점포수;
  let 계약면적;
  let 건물종류;
  let 건축면적;
  let 지목;
  let 용도지역;
  let 건물보안;

  if (구분 == "디테일") {
    공급면적 = {
      이름: "공급면적",
      값: `${result.공급면적}㎡`,
    };
    전용면적 = {
      이름: "전용면적",
      값: `${result.전용면적}㎡`,
    };
    해당동 = {
      이름: "해당동",
      값: result.해당동,
    };
    입주가능일 = {
      이름: "입주가능일",
      값: result.입주가능일,
    };
    방향 = {
      이름: "방향",
      값: result.방향,
    };
    현관구조 = {
      이름: "현관구조",
      값: result.현관구조,
    };
    해당층 = {
      이름: "해당층/총층",
      값: result.해당층,
    };
    방 = {
      이름: "방/욕실수",
      값: result.방,
    };
    월관리비 = {
      이름: "월관리비",
      값: `${result.월관리비}만원`,
    };
    건축물용도 = {
      이름: "건축물용도",
      값: result.건축물용도,
    };
    총세대수 = {
      이름: "총세대수",
      값: result.총세대수,
    };
    사용승인일 = {
      이름: "사용승인일",
      값: result.사용승인일,
    };
    주차가능여부 = {
      이름: "주차가능여부",
      값: result.주차가능여부,
    };
    총주차대수 = {
      이름: "총주차대수",
      값: result.총주차대수,
    };
    난방방식 = {
      이름: "난방방식",
      값: result.난방방식,
    };
    연면적 = {
      이름: "연면적",
      값: `${result.연면적}㎡`,
    };
    대지면적 = {
      이름: "대지면적",
      값: `${result.대지면적}㎡`,
    };
    지하층 = {
      이름: "지하층/지상층",
      값: result.지하층,
    };
    현업종 = {
      이름: "현업종",
      값: result.현업종,
    };
    추천업종 = {
      이름: "추천업종",
      값: result.추천업종,
    };
    총점포수 = {
      이름: "총점포수",
      값: result.총점포수,
    };
    계약면적 = {
      이름: "계약면적",
      값: `${result.계약면적}㎡`,
    };
    건물종류 = {
      이름: "건물종류",
      값: result.건물종류,
    };
    건축면적 = {
      이름: "건축면적",
      값: `${result.건축면적}㎡`,
    };
    지목 = {
      이름: "지목",
      값: result.지목,
    };
    용도지역 = {
      이름: "용도지역",
      값: result.용도지역,
    };
    건물보안 = {
      이름: "건물보안",
      값: result.건물보안,
    };
  } else {
    공급면적 = (
      <>
        <span>공급면적 : </span>
        <input name="공급면적" placeholder="공급면적" />㎡
        <br />
      </>
    );
    전용면적 = (
      <>
        <span>전용면적 : </span>
        <input name="전용면적" placeholder="전용면적" />㎡
        <br />
      </>
    );
    해당동 = (
      <>
        <span>해당동 : </span>
        <input name="해당동" placeholder="해당동" />
        <br />
      </>
    );
    입주가능일 = (
      <>
        <span>입주가능일 : </span>
        <input name="입주가능일" placeholder="입주가능일" />
        <br />
      </>
    );
    방향 = (
      <>
        <span>방향 : </span>
        <input name="방향" placeholder="방향" />
        <br />
      </>
    );
    현관구조 = (
      <>
        <span>현관구조 : </span>
        <input name="현관구조" placeholder="현관구조" />
        <br />
      </>
    );
    해당층 = (
      <>
        <span>해당층 : </span>
        <input name="해당층" placeholder="해당층/총층" />
        <br />
      </>
    );
    방 = (
      <>
        <span>방/욕실수 : </span>
        <input name="방" placeholder="방/욕실수" />
        <br />
      </>
    );
    월관리비 = (
      <>
        <span>월관리비 : </span>
        <input name="월관리비" placeholder="월관리비" />
        만원
        <br />
      </>
    );
    건축물용도 = (
      <>
        <span>건축물용도 : </span>
        <input name="건축물용도" placeholder="건축물용도" />
        <br />
      </>
    );
    총세대수 = (
      <>
        <span>총세대수 : </span>
        <input name="총세대수" placeholder="총세대수" />
        <br />
      </>
    );
    사용승인일 = (
      <>
        <span>사용승인일 : </span>
        <input name="사용승인일" placeholder="사용승인일" />
        <br />
      </>
    );
    주차가능여부 = (
      <>
        <span>주차가능여부 : </span>
        <input name="주차가능여부" placeholder="주차가능여부" />
        <br />
      </>
    );
    총주차대수 = (
      <>
        <span>총주차대수 : </span>
        <input name="총주차대수" placeholder="총주차대수" />
        <br />
      </>
    );
    난방방식 = (
      <>
        <span>난방방식 : </span>
        <input name="난방방식" placeholder="난방방식" />
        <br />
      </>
    );
    연면적 = (
      <>
        <span>연면적 : </span>
        <input name="연면적" placeholder="연면적" />㎡
        <br />
      </>
    );
    대지면적 = (
      <>
        <span>대지면적 : </span>
        <input name="대지면적" placeholder="대지면적" />㎡
        <br />
      </>
    );
    지하층 = (
      <>
        <span>지하층/지상층 : </span>
        <input name="지하층" placeholder="지하층/지상층" />
        <br />
      </>
    );
    현업종 = (
      <>
        <span>현업종 : </span>
        <input name="현업종" placeholder="현업종" />
        <br />
      </>
    );
    추천업종 = (
      <>
        <span>추천업종 : </span>
        <input name="추천업종" placeholder="추천업종" />
        <br />
      </>
    );
    총점포수 = (
      <>
        <span>총점포수 : </span>
        <input name="총점포수" placeholder="총점포수" />
        <br />
      </>
    );
    계약면적 = (
      <>
        <span>계약면적 : </span>
        <input name="계약면적" placeholder="계약면적" />㎡
        <br />
      </>
    );
    건물종류 = (
      <>
        <span>건물종류 : </span>
        <input name="건물종류" placeholder="건물종류" />
        <br />
      </>
    );
    건축면적 = (
      <>
        <span>건축면적 : </span>
        <input name="건축면적" placeholder="건축면적" />㎡
        <br />
      </>
    );
    지목 = (
      <>
        <span>지목 : </span>
        <input name="지목" placeholder="지목" />
        <br />
      </>
    );
    용도지역 = (
      <>
        <span>용도지역 : </span>
        <input name="용도지역" placeholder="용도지역" />
        <br />
      </>
    );
    건물보안 = (
      <>
        <span>건물보안 : </span>
        <input name="건물보안" placeholder="건물보안" />
        <br />
      </>
    );
  }

  if (category == "아파트") {
    return [
      공급면적,
      전용면적,
      해당동,
      입주가능일,
      방향,
      현관구조,
      해당층,
      방,
      월관리비,
      건축물용도,
      총세대수,
      사용승인일,
      주차가능여부,
      총주차대수,
      난방방식,
    ];
  } else if (category == "상가건물") {
    return [
      연면적,
      대지면적,
      입주가능일,
      방향,
      지하층,
      현업종,
      추천업종,
      건축물용도,
      총점포수,
      사용승인일,
      총주차대수,
    ];
  } else if (category == "상가주택") {
    return [
      대지면적,
      연면적,
      입주가능일,
      방향,
      지하층,
      방,
      건축물용도,
      총점포수,
      사용승인일,
      주차가능여부,
      총주차대수,
    ];
  } else if (category == "상가점포") {
    return [
      계약면적,
      전용면적,
      입주가능일,
      방향,
      해당층,
      방,
      건물종류,
      건축물용도,
      현업종,
      추천업종,
      총점포수,
      사용승인일,
      주차가능여부,
      총주차대수,
    ];
  } else if (category == "빌라") {
    return [
      공급면적,
      전용면적,
      해당동,
      입주가능일,
      방향,
      해당층,
      월관리비,
      건물종류,
      건축물용도,
      총세대수,
      사용승인일,
      주차가능여부,
      총주차대수,
      건물보안,
      방,
    ];
  } else if (category == "단독") {
    return [
      대지면적,
      건축면적,
      연면적,
      입주가능일,
      방향,
      지하층,
      방,
      월관리비,
      건물종류,
      건축물용도,
      총세대수,
      사용승인일,
      주차가능여부,
      총주차대수,
    ];
  } else if (category == "토지") {
    return [대지면적, 지목, 용도지역, 건축물용도];
  }
}
