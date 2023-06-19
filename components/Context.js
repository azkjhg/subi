'use client'
import React, { createContext, useState } from 'react';

// 컨텍스트 생성
const MyContext = createContext();

// 프로바이더 컴포넌트 생성
function MyContextProvider({ children }) {
  const [value, setValue] = useState('Hello, Context!');
console.log(value, '콘텍스트 테스트')
  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}

export { MyContext, MyContextProvider };