'use client'
import React, { useContext } from 'react'
import { MyContext } from './Context';

const UseContext = () => {
    const cont = useContext(MyContext);
    console.log(cont, '페이지 컴포넌트에서')
  return (
  <></>
  )
}

export default UseContext