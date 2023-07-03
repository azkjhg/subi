

import Card from "./Card";

import React from 'react'
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

export default function ProductList({ result }) {
  
  /* result = {
    _id: '647de9f9faf38f75d5af8a33',
    title: '잘 되겠지',
    content: '',
    url: 'https://firebasestorage.googleapis.com/v0/b/rlqja364.appspot.com/o/image%2F200513170408g553_d3n_thumb.jpg20d24997-a4b1-448a-bc10-f50cb3c4ef29?alt=media&token=f92b85f7-cb80-4733-b679-beb605ee61d6',      
    imageRef: { _service: [Object], _location: [Object] },
    author: '관리자
  } */

  // useEffect(()=>{
    
  //   cont.setValue(result)
  // console.log(cont.value, cont.setValue)
  // },[])
  
  // const [newResult, setNewResult] = useState(result);

  // 버튼 클릭 시 실행되는 함수
  

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 lg:max-w-[100rem] lg:px-8">
        <h2 className="text-2xl my-2 font-bold tracking-tight text-gray-900">
          부동산 매물
        </h2>
        
        <Card result={result}/>

      </div>
      
    </div>
  );
}
