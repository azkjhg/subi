(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79],{8236:function(e,t,l){Promise.resolve().then(l.t.bind(l,6996,23)),Promise.resolve().then(l.t.bind(l,9297,23)),Promise.resolve().then(l.t.bind(l,190,23)),Promise.resolve().then(l.t.bind(l,2666,23)),Promise.resolve().then(l.bind(l,60))},60:function(e,t,l){"use strict";l.r(t);var a=l(9268),n=l(6006),r=l(924),s=l(4202),i=l(6462),u=l(6008),o=l(3252);let v=e=>{if("아파트"===e.target.매물종류.value)return{공급면적:e.target.공급면적.value,전용면적:e.target.전용면적.value,해당동:e.target.해당동.value,입주가능일:e.target.입주가능일.value,방향:e.target.방향.value,현관구조:e.target.현관구조.value,해당층:e.target.해당층.value,방:e.target.방.value,월관리비:e.target.월관리비.value,건축물용도:e.target.건축물용도.value,총세대수:e.target.총세대수.value,사용승인일:e.target.사용승인일.value,주차가능여부:e.target.주차가능여부.value,총주차대수:e.target.총주차대수.value,난방방식:e.target.난방방식.value};if("상가건물"===e.target.매물종류.value)return{연면적:e.target.연면적.value,대지면적:e.target.대지면적.value,입주가능일:e.target.입주가능일.value,방향:e.target.방향.value,지하층:e.target.지하층.value,현업종:e.target.현업종.value,추천업종:e.target.추천업종.value,건축물용도:e.target.건축물용도.value,총점포수:e.target.총점포수.value,사용승인일:e.target.사용승인일.value,총주차대수:e.target.총주차대수.value};if("상가주택"===e.target.매물종류.value)return{대지면적:e.target.대지면적.value,연면적:e.target.연면적.value,입주가능일:e.target.입주가능일.value,방향:e.target.방향.value,지하층:e.target.지하층.value,방:e.target.방.value,건축물용도:e.target.건축물용도.value,총점포수:e.target.총점포수.value,사용승인일:e.target.사용승인일.value,주차가능여부:e.target.주차가능여부.value,총주차대수:e.target.총주차대수.value};if("상가점포"===e.target.매물종류.value)return{계약면적:e.target.계약면적.value,전용면적:e.target.전용면적.value,입주가능일:e.target.입주가능일.value,방향:e.target.방향.value,해당층:e.target.해당층.value,방:e.target.방.value,건물종류:e.target.건물종류.value,건축물용도:e.target.건축물용도.value,현업종:e.target.현업종.value,추천업종:e.target.추천업종.value,총점포수:e.target.총점포수.value,사용승인일:e.target.사용승인일.value,주차가능여부:e.target.주차가능여부.value,총주차대수:e.target.총주차대수.value};if("빌라"===e.target.매물종류.value)return{공급면적:e.target.공급면적.value,전용면적:e.target.전용면적.value,해당동:e.target.해당동.value,입주가능일:e.target.입주가능일.value,방향:e.target.방향.value,해당층:e.target.해당층.value,방:e.target.방.value,월관리비:e.target.월관리비.value,건물종류:e.target.건물종류.value,건축물용도:e.target.건축물용도.value,총세대수:e.target.총세대수.value,사용승인일:e.target.사용승인일.value,주차가능여부:e.target.주차가능여부.value,총주차대수:e.target.총주차대수.value,건물보안:e.target.건물보안.value};if("단독"===e.target.매물종류.value)return{대지면적:e.target.대지면적.value,건축면적:e.target.건축면적.value,연면적:e.target.연면적.value,입주가능일:e.target.입주가능일.value,방향:e.target.방향.value,지하층:e.target.지하층.value,방:e.target.방.value,월관리비:e.target.월관리비.value,건물종류:e.target.건물종류.value,건축물용도:e.target.건축물용도.value,총세대수:e.target.총세대수.value,사용승인일:e.target.사용승인일.value,주차가능여부:e.target.주차가능여부.value,총주차대수:e.target.총주차대수.value};if("토지"===e.target.매물종류.value)return{대지면적:e.target.대지면적.value,지목:e.target.지목.value,용도지역:e.target.용도지역.value,건축물용도:e.target.건축물용도.value}},x=()=>{let[e,t]=(0,n.useState)(null),[l,x]=(0,n.useState)(null),[c,j]=(0,n.useState)(null),[h,d]=(0,n.useState)(null),[p,g]=(0,n.useState)(null),m=(0,u.useRouter)(),[f,b]=(0,n.useState)(""),[y,S]=(0,n.useState)(null),_=e=>{b(e.target.value)},w=e=>{S(e.target.value)},[C,F]=(0,n.useState)(""),[O,E]=(0,n.useState)(""),[P,k]=(0,n.useState)(""),N=e=>{F(e.target.value),E("")},Z=e=>{E(e.target.value)},[R,T]=(0,n.useState)(null),D=e=>{let t=e.target.value,l=t.replace(/[^0-9]/g,"");T(l)},[I,L]=(0,n.useState)(null),J=e=>{let t=e.target.value,l=t.replace(/[^0-9]/g,"");L(l)},U=async t=>{t.preventDefault();let a=[];if(console.log(a=(a=[e,l,c,h,p]).filter(e=>null!==e)),null==a){alert("이미지를 업로드해주세요.");return}if(null==y){alert("거래유형을 선택해주세요.");return}let n=[],u=[],o=async()=>{for(let e=0;e<a.length;e++){let t=(0,s.iH)(r.t,"image/".concat(a[e].name+(0,i.Z)()));await (0,s.KV)(t,a[e]).then(async()=>{let e=await (0,s.Jt)(t);u=[...u,t],n=[...n,e]}).catch(e=>{console.error("이미지 업로드 에러:",e)})}};await o();let x={urls:n,imageRefs:u,title:t.target.title.value,content:t.target.content.value,매물종류:t.target.매물종류.value,거래유형:t.target.거래유형.value,시:t.target.시.value,동:t.target.동.value,소재지:t.target.소재지.value,금액1:t.target.금액1.value,금액2:t.target.금액2&&t.target.금액2.value,유튜브링크:t.target.유튜브링크.value};"아파트"==f?x={...x,...v(t)}:"상가건물"==f?x={...x,...v(t)}:"상가주택"==f?x={...x,...v(t)}:"상가점포"==f?x={...x,...v(t)}:"빌라"==f?x={...x,...v(t)}:"단독"==f?x={...x,...v(t)}:"토지"==f&&(x={...x,...v(t)}),fetch("/api/post/new",{method:"POST",body:JSON.stringify(x)}).then(e=>e.json()).then(e=>{if("업로드 완료"===e)alert("폼 제출 완료!"),m.push("/list");else throw Error("폼 제출 실패")}).catch(e=>{console.error(e)})},$=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:"기본정보"}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{children:"제목 : "}),(0,a.jsx)("input",{name:"title",placeholder:"제목"}),(0,a.jsx)("br",{}),(0,a.jsx)("hr",{}),(0,a.jsx)("span",{children:"거래유형 : "}),(0,a.jsxs)("select",{name:"거래유형",value:y,onChange:w,children:[(0,a.jsx)("option",{value:"",selected:!0,children:"거래유형 선택"}),(0,a.jsx)("option",{value:"매매",children:"매매"}),(0,a.jsx)("option",{value:"년세",children:"년세"}),(0,a.jsx)("option",{value:"월세",children:"월세"}),(0,a.jsx)("option",{value:"전세",children:"전세"})]}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:"소재지 : "}),(0,a.jsxs)("select",{name:"시",value:C,onChange:N,children:[(0,a.jsx)("option",{value:"",children:"지역 선택"}),(0,a.jsx)("option",{value:"제주시",children:"제주시"}),(0,a.jsx)("option",{value:"서귀포시",children:"서귀포시"})]}),C&&(0,a.jsxs)("select",{name:"동",value:O,onChange:Z,children:[(0,a.jsx)("option",{value:"",children:"동네 선택"}),"제주시"===C?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("option",{value:"건입동",children:"건입동"}),(0,a.jsx)("option",{value:"구좌읍",children:"구좌읍"}),(0,a.jsx)("option",{value:"내도동",children:"내도동"}),(0,a.jsx)("option",{value:"노형동",children:"노형동"}),(0,a.jsx)("option",{value:"도남동",children:"도남동"}),(0,a.jsx)("option",{value:"도두1동",children:"도두1동"}),(0,a.jsx)("option",{value:"도두2동",children:"도두2동"}),(0,a.jsx)("option",{value:"도련1동",children:"도련1동"}),(0,a.jsx)("option",{value:"도련2동",children:"도련2동"}),(0,a.jsx)("option",{value:"도평동",children:"도평동"}),(0,a.jsx)("option",{value:"봉개동",children:"봉개동"}),(0,a.jsx)("option",{value:"삼도1동",children:"삼도1동"}),(0,a.jsx)("option",{value:"삼도2동",children:"삼도2동"}),(0,a.jsx)("option",{value:"삼양1동",children:"삼양1동"}),(0,a.jsx)("option",{value:"삼양2동",children:"삼양2동"}),(0,a.jsx)("option",{value:"삼양3동",children:"삼양3동"}),(0,a.jsx)("option",{value:"아라1동",children:"아라1동"}),(0,a.jsx)("option",{value:"아라2동",children:"아라2동"}),(0,a.jsx)("option",{value:"애월읍",children:"애월읍"}),(0,a.jsx)("option",{value:"연동",children:"연동"}),(0,a.jsx)("option",{value:"영평동",children:"영평동"}),(0,a.jsx)("option",{value:"오등동",children:"오등동"}),(0,a.jsx)("option",{value:"오라1동",children:"오라1동"}),(0,a.jsx)("option",{value:"오라2동",children:"오라2동"}),(0,a.jsx)("option",{value:"오라3동",children:"오라3동"}),(0,a.jsx)("option",{value:"외도1동",children:"외도1동"}),(0,a.jsx)("option",{value:"외도2동",children:"외도2동"}),(0,a.jsx)("option",{value:"용강동",children:"용강동"}),(0,a.jsx)("option",{value:"용담1동",children:"용담1동"}),(0,a.jsx)("option",{value:"용담2동",children:"용담2동"}),(0,a.jsx)("option",{value:"용담3동",children:"용담3동"}),(0,a.jsx)("option",{value:"우도면",children:"우도면"}),(0,a.jsx)("option",{value:"월평동",children:"월평동"}),(0,a.jsx)("option",{value:"이도1동",children:"이도1동"}),(0,a.jsx)("option",{value:"이도2동",children:"이도2동"}),(0,a.jsx)("option",{value:"이호1동",children:"이호1동"}),(0,a.jsx)("option",{value:"이호2동",children:"이호2동"}),(0,a.jsx)("option",{value:"일도1동",children:"일도1동"}),(0,a.jsx)("option",{value:"일도2동",children:"일도2동"}),(0,a.jsx)("option",{value:"조천읍",children:"조천읍"}),(0,a.jsx)("option",{value:"추자면",children:"추자면"}),(0,a.jsx)("option",{value:"한경면",children:"한경면"}),(0,a.jsx)("option",{value:"한림읍",children:"한림읍"}),(0,a.jsx)("option",{value:"해안동",children:"해안동"}),(0,a.jsx)("option",{value:"화북1동",children:"화북1동"}),(0,a.jsx)("option",{value:"화북2동",children:"화북2동"}),(0,a.jsx)("option",{value:"회천동",children:"회천동"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("option",{value:"강정동",children:"강정동"}),(0,a.jsx)("option",{value:"남원읍",children:"남원읍"}),(0,a.jsx)("option",{value:"대정읍",children:"대정읍"}),(0,a.jsx)("option",{value:"대포동",children:"대포동"}),(0,a.jsx)("option",{value:"도순동",children:"도순동"}),(0,a.jsx)("option",{value:"동홍동",children:"동홍동"}),(0,a.jsx)("option",{value:"법환동",children:"법환동"}),(0,a.jsx)("option",{value:"보목동",children:"보목동"}),(0,a.jsx)("option",{value:"상예동",children:"상예동"}),(0,a.jsx)("option",{value:"상효동",children:"상효동"}),(0,a.jsx)("option",{value:"색달동",children:"색달동"}),(0,a.jsx)("option",{value:"서귀동",children:"서귀동"}),(0,a.jsx)("option",{value:"서호동",children:"서호동"}),(0,a.jsx)("option",{value:"서홍동",children:"서홍동"}),(0,a.jsx)("option",{value:"성산읍",children:"성산읍"}),(0,a.jsx)("option",{value:"신효동",children:"신효동"}),(0,a.jsx)("option",{value:"안덕면",children:"안덕면"}),(0,a.jsx)("option",{value:"영남동",children:"영남동"}),(0,a.jsx)("option",{value:"월평동",children:"월평동"}),(0,a.jsx)("option",{value:"중문동",children:"중문동"}),(0,a.jsx)("option",{value:"토평동",children:"토평동"}),(0,a.jsx)("option",{value:"표선면",children:"표선면"}),(0,a.jsx)("option",{value:"하예동",children:"하예동"}),(0,a.jsx)("option",{value:"하원동",children:"하원동"}),(0,a.jsx)("option",{value:"하효동",children:"하효동"}),(0,a.jsx)("option",{value:"호근동",children:"호근동"}),(0,a.jsx)("option",{value:"회수동",children:"회수동"})]})]}),O&&(0,a.jsx)("input",{name:"소재지",placeholder:"세부주소"})]}),(0,a.jsx)("br",{}),"매매"===y&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{children:"매매가 : "}),(0,a.jsx)("input",{name:"금액1",placeholder:"매매금",value:R,onChange:D}),"만원",(0,a.jsx)("br",{})]}),"년세"===y&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{children:"년세가 : "}),(0,a.jsx)("input",{name:"금액1",placeholder:"보증금",value:R,onChange:D}),"만원 ",(0,a.jsx)("input",{name:"금액2",placeholder:"년세금",value:I,onChange:J}),"만원",(0,a.jsx)("br",{})]}),"월세"===y&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{children:"월세가 : "}),(0,a.jsx)("input",{name:"금액1",placeholder:"보증금",value:R,onChange:D}),"만원 ",(0,a.jsx)("input",{name:"금액2",placeholder:"월세금",value:I,onChange:J}),"만원",(0,a.jsx)("br",{})]}),"전세"===y&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{children:"전세가 : "}),(0,a.jsx)("input",{name:"금액1",placeholder:"전세금",value:R,onChange:D}),"만원",(0,a.jsx)("br",{})]}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{children:"유튜브 링크 : "}),(0,a.jsx)("input",{name:"유튜브링크",placeholder:"유튜브링크"}),(0,a.jsx)("br",{})]}),A=()=>{if("아파트"===f)return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{name:"매물종류",value:"아파트",style:{display:"none"}}),(0,o.Z)(f,"글작성")]});if("상가건물"===f)return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{name:"매물종류",value:"상가건물",style:{display:"none"}}),(0,o.Z)(f,"글작성")]});if("상가주택"===f)return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{name:"매물종류",value:"상가주택",style:{display:"none"}}),(0,o.Z)(f,"글작성")]});if("상가점포"===f)return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{name:"매물종류",value:"상가점포",style:{display:"none"}}),(0,o.Z)(f,"글작성")]});if("빌라"===f)return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{name:"매물종류",value:"빌라",style:{display:"none"}}),(0,o.Z)(f,"글작성")]});if("단독"===f)return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{name:"매물종류",value:"단독",style:{display:"none"}}),(0,o.Z)(f,"글작성")]});if("토지"===f)return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{name:"매물종류",value:"토지",style:{display:"none"}}),(0,o.Z)(f,"글작성")]})};return(0,a.jsxs)("div",{className:" m-auto max-w-3xl",children:[(0,a.jsxs)("select",{name:"매물종류",value:f,onChange:_,children:[(0,a.jsx)("option",{value:"",selected:!0,children:"매물종류 선택"}),(0,a.jsx)("option",{value:"아파트",children:"아파트"}),(0,a.jsx)("option",{value:"상가건물",children:"상가건물"}),(0,a.jsx)("option",{value:"상가주택",children:"상가주택"}),(0,a.jsx)("option",{value:"상가점포",children:"상가점포"}),(0,a.jsx)("option",{value:"빌라",children:"빌라/다세대"}),(0,a.jsx)("option",{value:"단독",children:"단독/다가구"}),(0,a.jsx)("option",{value:"토지",children:"토지/임야"})]}),f&&(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:"사진 : "}),(0,a.jsx)("input",{type:"file",onChange:e=>{t(e.target.files[0])}}),(0,a.jsx)("br",{}),(0,a.jsx)("input",{type:"file",onChange:e=>{x(e.target.files[0])}}),(0,a.jsx)("br",{}),(0,a.jsx)("input",{type:"file",onChange:e=>{j(e.target.files[0])}}),(0,a.jsx)("br",{}),(0,a.jsx)("input",{type:"file",onChange:e=>{d(e.target.files[0])}}),(0,a.jsx)("br",{}),(0,a.jsx)("input",{type:"file",onChange:e=>{g(e.target.files[0])}}),(0,a.jsx)("br",{})]}),"아파트"===f&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"아파트 양식"}),(0,a.jsx)("br",{}),(0,a.jsxs)("form",{onSubmit:U,children:[$,A(),(0,a.jsx)("hr",{}),(0,a.jsx)("textarea",{name:"content",placeholder:"내용",rows:"10",cols:"60"}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{type:"submit",children:"업로드 및 제출"})]})]}),"상가건물"===f&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"상가건물 양식"}),(0,a.jsx)("br",{}),(0,a.jsxs)("form",{onSubmit:U,children:[$,A(),(0,a.jsx)("hr",{}),(0,a.jsx)("textarea",{name:"content",placeholder:"내용",rows:"10",cols:"60"}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{type:"submit",children:"업로드 및 제출"})]})]}),"상가주택"===f&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"상가주택 양식"}),(0,a.jsx)("br",{}),(0,a.jsxs)("form",{onSubmit:U,children:[$,A(),(0,a.jsx)("hr",{}),(0,a.jsx)("textarea",{name:"content",placeholder:"내용",rows:"10",cols:"60"}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{type:"submit",children:"업로드 및 제출"})]})]}),"상가점포"===f&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"상가점포 양식"}),(0,a.jsx)("br",{}),(0,a.jsxs)("form",{onSubmit:U,children:[$,A(),(0,a.jsx)("hr",{}),(0,a.jsx)("textarea",{name:"content",placeholder:"내용",rows:"10",cols:"60"}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{type:"submit",children:"업로드 및 제출"})]})]}),"빌라"===f&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"빌라/다세대 양식"}),(0,a.jsx)("br",{}),(0,a.jsxs)("form",{onSubmit:U,children:[$,A(),(0,a.jsx)("hr",{}),(0,a.jsx)("textarea",{name:"content",placeholder:"내용",rows:"10",cols:"60"}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{type:"submit",children:"업로드 및 제출"})]})]}),"단독"===f&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"단독/다가구 양식"}),(0,a.jsx)("br",{}),(0,a.jsxs)("form",{onSubmit:U,children:[$,A(),(0,a.jsx)("hr",{}),(0,a.jsx)("textarea",{name:"content",placeholder:"내용",rows:"10",cols:"60"}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{type:"submit",children:"업로드 및 제출"})]})]}),"토지"===f&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"토지 양식"}),(0,a.jsx)("br",{}),(0,a.jsxs)("form",{onSubmit:U,children:[$,A(),(0,a.jsx)("hr",{}),(0,a.jsx)("textarea",{name:"content",placeholder:"내용",rows:"10",cols:"60"}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{type:"submit",children:"업로드 및 제출"})]})]})]})};t.default=x},3177:function(e,t,l){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=l(6006),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,l){var a,r={},o=null,v=null;for(a in void 0!==l&&(o=""+l),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(v=t.ref),t)s.call(t,a)&&!u.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:n,type:e,key:o,ref:v,props:r,_owner:i.current}}t.Fragment=r,t.jsx=o,t.jsxs=o},9268:function(e,t,l){"use strict";e.exports=l(3177)}},function(e){e.O(0,[188,898,667,139,744],function(){return e(e.s=8236)}),_N_E=e.O()}]);