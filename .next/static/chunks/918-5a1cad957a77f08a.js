(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[918],{2918:function(e,t,r){"use strict";r.r(t);var o=r(9268),l=r(6394),n=r.n(l),s=r(5846),c=r.n(s),d=r(9181),b=r(6006);let a=e=>{let t,r,l,s,a,i,u,x,{result:g,list:h}=e,f=(0,b.useContext)(d.MyContext),m=(e,t)=>{if(g.url&&g.imageRef){let e=ref(storage,g.imageRef._location.path_);deleteObject(e).then(()=>{console.log("이미지 삭제 완료")}).catch(e=>{console.error("이미지 삭제 에러:",e)})}fetch("/api/post/delete",{method:"POST",body:g[t]._id.toString()}).then(async e=>e.json()).then(t=>{"삭제 안됨"!==t&&(e.target.parentElement.parentElement.parentElement.style.opacity=0,setTimeout(()=>{e.target.parentElement.parentElement.parentElement.style.display="none"},1e3))})},p=e=>{let t=[];"전체"==e?(t=[],g.forEach(e=>{t=[...t,e]}),f.setValue([t,"전체"])):"아파트"==e?(t=[],g.forEach(e=>{"아파트"==e.매물종류&&(t=[...t,e]),f.setValue([t,"아파트"])})):"상가건물"==e?(t=[],g.forEach(e=>{"상가건물"==e.매물종류&&(t=[...t,e])}),f.setValue([t,"상가건물"])):"상가점포"==e?(t=[],g.forEach(e=>{"상가점포"==e.매물종류&&(t=[...t,e])}),f.setValue([t,"상가점포"])):"상가주택"==e?(t=[],g.forEach(e=>{"상가주택"==e.매물종류&&(t=[...t,e])}),f.setValue([t,"상가주택"])):"빌라"==e?(t=[],g.forEach(e=>{"빌라"==e.매물종류&&(t=[...t,e])}),f.setValue([t,"빌라"])):"단독"==e?(t=[],g.forEach(e=>{"단독"==e.매물종류&&(t=[...t,e])}),f.setValue([t,"단독"])):"토지"==e&&(t=[],g.forEach(e=>{"토지"==e.매물종류&&(t=[...t,e])}),f.setValue([t,"토지"]))};return console.log(f.value[0]),t="전체"==f.value[1]?"text-black bg-white border-2 border-gray-500 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 focus:text-black focus:bg-white font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border":"text-white bg-blue-700 border-2 border-blue-300 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:text-black focus:bg-white font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",r="아파트"==f.value[1]?"text-black bg-white border-2 border-gray-500 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border":"text-white bg-blue-700 border-2 border-blue-300 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",l="상가건물"==f.value[1]?"text-black bg-white border-2 border-gray-500 hover:bg-red-800 hover:text-white focus:ring-4 focus:ring-red-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border":"text-white bg-red-700 border-2 border-red-300 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",s="상가주택"==f.value[1]?"text-black bg-white border-2 border-gray-500 hover:bg-red-800 hover:text-white focus:ring-4 focus:ring-red-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border":"text-white bg-red-700 border-2 border-red-300 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",a="상가점포"==f.value[1]?"text-black bg-white border-2 border-gray-500 hover:bg-red-800 hover:text-white focus:ring-4 focus:ring-red-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border":"text-white bg-red-700 border-2 border-red-300 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",i="빌라"==f.value[1]?"text-black bg-white border-2 border-gray-500 hover:bg-indigo-800 hover:text-white focus:ring-4 focus:ring-indigo-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border":"text-white bg-indigo-700 border-2 border-indigo-300 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",u="단독"==f.value[1]?"text-black bg-white border-2 border-gray-500 hover:bg-purple-800 hover:text-white focus:ring-4 focus:ring-purple-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border":"text-white bg-purple-700 border-2 border-purple-300 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",x="토지"==f.value[1]?"text-black bg-white border-2 border-gray-500 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 box-border":"text-white bg-green-700 border-2 border-green-300 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold focus:text-black focus:bg-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{type:"button",className:t,onClick:()=>p("전체"),children:"전체"}),(0,o.jsx)("button",{type:"button",className:r,onClick:()=>p("아파트"),children:"아파트"}),(0,o.jsx)("button",{type:"button",className:l,onClick:()=>p("상가건물"),children:"상가건물"}),(0,o.jsx)("button",{type:"button",className:s,onClick:()=>p("상가주택"),children:"상가주택"}),(0,o.jsx)("button",{type:"button",className:a,onClick:()=>p("상가점포"),children:"상가점포"}),(0,o.jsx)("button",{type:"button",className:i,onClick:()=>p("빌라"),children:"빌라/다세대"}),(0,o.jsx)("button",{type:"button",className:u,onClick:()=>p("단독"),children:"단독/다가구"}),(0,o.jsx)("button",{type:"button",className:x,onClick:()=>p("토지"),children:"토지/임야"}),(0,o.jsx)("div",{className:"grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-1",children:(f.value[0]||g).map((e,t)=>{let r,l,s,d;let b=e=>{let t=e.split(""),r="";for(;t.length>0;)r=t.splice(-3).join("")+r,t.length>0&&(r=","+r);return r};return e.금액2||(e.금액=b(e.금액1)),e.금액2&&(e.금액="".concat(b(e.금액1),"/").concat(b(e.금액2))),"아파트"==e.매물종류&&(r=(0,o.jsx)("span",{className:"   bg-blue-100 text-blue-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded border border-gray-500",children:e.매물종류})),"상가건물"==e.매물종류&&(r=(0,o.jsx)("span",{className:"   bg-red-100 text-red-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded border border-gray-500",children:e.매물종류})),"상가주택"==e.매물종류&&(r=(0,o.jsx)("span",{className:" bg-red-100 text-red-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded border border-gray-500",children:e.매물종류})),"상가점포"==e.매물종류&&(r=(0,o.jsx)("span",{className:" bg-red-100 text-red-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded border border-gray-500",children:e.매물종류})),"빌라"==e.매물종류&&(r=(0,o.jsx)("span",{className:" bg-indigo-100 text-indigo-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded border border-gray-500",children:e.매물종류})),"단독"==e.매물종류&&(r=(0,o.jsx)("span",{className:" bg-purple-100 text-purple-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded border border-gray-500",children:e.매물종류})),"토지"==e.매물종류&&(r=(0,o.jsx)("span",{className:" bg-green-100 text-green-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded border border-gray-500",children:e.매물종류})),"매매"==e.거래유형&&(d="text-base rounded-lg bg-red-100 px-2 my-2",l=(0,o.jsx)("span",{className:" text-red-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded  border border-red-500",children:e.거래유형})),"년세"==e.거래유형&&(d="text-base rounded-lg bg-yellow-100 px-2 my-2",l=(0,o.jsx)("span",{className:"  text-yellow-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded  border border-yellow-300",children:e.거래유형})),"월세"==e.거래유형&&(d="text-base rounded-lg bg-green-100 px-2 my-2",l=(0,o.jsx)("span",{className:"  text-green-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded  border border-green-400",children:e.거래유형})),"전세"==e.거래유형&&(d="text-base rounded-lg bg-indigo-100 px-2 my-2",l=(0,o.jsx)("span",{className:"  text-indigo-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded  border border-indigo-400",children:e.거래유형})),"아파트"==e.매물종류&&(s=(0,o.jsxs)("p",{className:"w-full truncate text-center",children:[e.공급면적?"".concat(e.공급면적,"㎡"):"-","/",e.전용면적?"".concat(e.전용면적,"㎡"):"-"]})),"상가건물"==e.매물종류&&(s=(0,o.jsxs)("p",{className:"w-full truncate text-center",children:[e.연면적?"".concat(e.연면적,"㎡"):"-","/",e.대지면적?"".concat(e.대지면적,"㎡"):"-"]})),"상가주택"==e.매물종류&&(s=(0,o.jsxs)("p",{className:"w-full truncate text-center",children:[e.대지면적?"".concat(e.대지면적,"㎡"):"-","/",e.건축면적?"".concat(e.건축면적,"㎡"):"-"]})),"상가점포"==e.매물종류&&(s=(0,o.jsxs)("p",{className:"w-full truncate text-center",children:[e.계약면적?"".concat(e.계약면적,"㎡"):"-","/",e.전용면적?"".concat(e.전용면적,"㎡"):"-"]})),"빌라"==e.매물종류&&(s=(0,o.jsxs)("p",{className:"w-full truncate text-center",children:[e.공급면적?"".concat(e.공급면적,"㎡"):"-","/",e.전용면적?"".concat(e.전용면적,"㎡"):"-"]})),"단독"==e.매물종류&&(s=(0,o.jsxs)("p",{className:"w-full truncate text-center",children:[e.공급면적?"".concat(e.공급면적,"㎡"):"-","/",e.전용면적?"".concat(e.전용면적,"㎡"):"-"]})),"토지"==e.매물종류&&(s=(0,o.jsx)("p",{className:"w-full truncate text-center",children:e.대지면적?"".concat(e.대지면적,"㎡"):"-"})),(0,o.jsxs)("div",{children:[(0,o.jsx)(c(),{href:"/detail/".concat(e._id.toString()),children:(0,o.jsxs)("article",{className:"rounded-md overflow-hidden shadow-md hover:shadow-xl relative",children:[(0,o.jsx)("div",{className:" w-full overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75 h-52",children:e.urls[0]&&(0,o.jsx)(n(),{src:e.urls[0],alt:e.title,width:400,height:300,className:"h-full w-full object-cover object-center lg:h-full lg:w-full"})}),(0,o.jsxs)("div",{className:"flex flex-col items-center py-2 px-2",children:[(0,o.jsxs)("div",{className:"w-full flex justify-between",children:[(0,o.jsxs)("div",{className:"mb-1",children:[r,l]}),(0,o.jsx)("span",{className:"self-end text-gray-700",children:e.date})]}),(0,o.jsx)("h3",{className:"text-lg font-bold",children:e.title?e.title:"ㅤ"}),(0,o.jsx)("div",{className:"디바이더"}),(0,o.jsx)("p",{className:"w-full truncate text-center",children:e.시?"".concat(e.시," ").concat(e.동," ").concat(e.소재지):"ㅤ"}),s,(0,o.jsx)("span",{className:d,children:e.금액?"".concat(e.거래유형,"가 ").concat(e.금액,"만원"):"ㅤ"})]})]})}),h?(0,o.jsxs)("div",{className:"flex justify-between",children:[(0,o.jsx)("div",{className:"text-xl",children:(0,o.jsx)(c(),{href:"/edit/".concat(g[t]._id.toString()),children:"수정"})}),(0,o.jsxs)("div",{className:"text-xl",children:[" ",(0,o.jsx)("p",{onClick:e=>{m(e,t)},children:"삭제"})]})]}):null]},t)})})]})};t.default=a},9181:function(e,t,r){"use strict";r.r(t),r.d(t,{MyContext:function(){return n},MyContextProvider:function(){return s}});var o=r(9268),l=r(6006);let n=(0,l.createContext)();function s(e){let{children:t}=e,[r,s]=(0,l.useState)([null,"전체"]);return(0,o.jsx)(n.Provider,{value:{value:r,setValue:s},children:t})}},5846:function(e,t,r){e.exports=r(414)}}]);