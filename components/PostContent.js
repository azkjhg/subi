import React from 'react'

const PostContent = ({result}) => {
    const 금액1 = () => {
        if(result.거래유형 == '매매' ){
             return '매매가'
           }
            if(result.거래유형 == '년세' ){
             return '보증금'
           }
           if(result.거래유형 == '월세' ){
             return '보증금'
           }
           if(result.거래유형 == '전세' ){
             return '전세금'
           }
       }
       const 금액2 = () => {
        if(result.거래유형 == '매매' ){
             return ''
           }
            if(result.거래유형 == '년세' ){
             return '년세금'
           }
           if(result.거래유형 == '월세' ){
             return '월세금'
           }
           if(result.거래유형 == '전세' ){
             return ''
           }
       }
          console.log(result)
  return (
    <>
    {result.매물종류 === '아파트' && (<div >
        <table class=" w-full text-sm sm:text-sm md:text-base lg:text-lg  text-center text-black dark:text-gray-100">
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3 text-base bg-gray-50 dark:bg-gray-800" colspan="4">
                        매물 정보
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class=" py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800" >
                    <span>매물종류</span>
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.매물종류}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    거래유형
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.거래유형}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    소재지
                    </th>
                    <td class="px-2 py-2" colspan="2" whitespace-nowrap>
                    {result.소재지}
                    </td>
                    
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    {금액1()}
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.금액1 &&`${result.금액1}만원`}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    {금액2()}
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.금액2 &&`${result.금액2}만원`}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    공급면적
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.공급면적}㎡
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    전용면적
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.전용면적}㎡
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    해당동
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.해당동}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    입주가능일
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.입주가능일}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    방향
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.방향}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    현관구조
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap" >
                    {result.현관구조}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    해당층/총층
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.해당층}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    방/욕실수
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.방}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    월관리비
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.월관리비 && `${result.월관리비}만원`}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    건축물용도
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.건축물용도}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    총세대수
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.총세대수}
                    </td>
                    <td class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    사용승인일
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.사용승인일}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    주차가능여부
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.주차가능여부}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    총주차대수
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.총주차대수}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    난방방식
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.난방방식}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
        
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">

                    </td>
                </tr>
                
            </tbody>
        </table>
            <div class="mt-6 border-t border-gray-100">
            <dl class="divide-y divide-gray-100">
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="mx-2 text-sm sm:text-sm md:text-base lg:text-lg font-medium leading-6 text-gray-900">내용</dt>
                <dd class="mt-1 text-sm sm:text-sm md:text-base lg:text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {result.content}
                </dd>
                </div>
            </dl>
            </div>
        </div>)}
        {result.매물종류 === '상가건물' && (<div >
        <table class=" w-full text-sm sm:text-sm md:text-base lg:text-lg  text-center text-black dark:text-gray-100">
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3 text-base bg-gray-50 dark:bg-gray-800" colspan="4">
                        매물 정보
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class=" py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800" >
                    <span>매물종류</span>
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.매물종류}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    거래유형
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.거래유형}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    소재지
                    </th>
                    <td class="px-2 py-2" colspan="2" whitespace-nowrap>
                    {result.소재지}
                    </td>
                    
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    {금액1()}
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.금액1 &&`${result.금액1}만원`}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    {금액2()}
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.금액2 &&`${result.금액2}만원`}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    연면적
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.연면적}㎡
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    대지면적
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.대지면적}㎡
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    입주가능일
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.입주가능일}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    방향
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.방향}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    지하층/지상층
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.지하층}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    현업종
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap" >
                    {result.현업종}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    추천업종
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.추천업종}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    건축물용도
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.건축물용도}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    총점포수
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.총점포수}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    사용승인일
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.사용승인일}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    총주차대수
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.총주차대수}
                    </td>
                    <td class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
      
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
 
                    </td>
                </tr>

                
            </tbody>
        </table>
            <div class="mt-6 border-t border-gray-100">
            <dl class="divide-y divide-gray-100">
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="mx-2 text-sm sm:text-sm md:text-base lg:text-lg font-medium leading-6 text-gray-900">내용</dt>
                <dd class="mt-1 text-sm sm:text-sm md:text-base lg:text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {result.content}
                </dd>
                </div>
            </dl>
            </div>
        </div>)}
        {result.매물종류 === '상가주택' && (<div >
        <table class=" w-full text-sm sm:text-sm md:text-base lg:text-lg  text-center text-black dark:text-gray-100">
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3 text-base bg-gray-50 dark:bg-gray-800" colspan="4">
                    매물 정보
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class=" py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800" >
                    <span>매물종류</span>
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.매물종류}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    거래유형
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.거래유형}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    소재지
                    </th>
                    <td class="px-2 py-2" colspan="2" whitespace-nowrap>
                    {result.소재지}
                    </td>
                    
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    {금액1()}
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.금액1 &&`${result.금액1}만원`}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    {금액2()}
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.금액2 &&`${result.금액2}만원`}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    대지면적
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.대지면적}㎡
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    연면적
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.연면적}㎡
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    입주가능일
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.입주가능일}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    방향
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.방향}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    지하층/지상층
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.지하층}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    방/욕실수
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap" >
                    {result.방}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    건축물용도
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.건축물용도}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    총점포수
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.총점포수}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    사용승인일
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.사용승인일}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    주차가능여부
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.주차가능여부}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    총주차대수
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.총주차대수}
                    </td>
                    <td class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
      
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
 
                    </td>
                </tr>

                
            </tbody>
        </table>
            <div class="mt-6 border-t border-gray-100">
            <dl class="divide-y divide-gray-100">
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="mx-2 text-sm sm:text-sm md:text-base lg:text-lg font-medium leading-6 text-gray-900">내용</dt>
                <dd class="mt-1 text-sm sm:text-sm md:text-base lg:text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {result.content}
                </dd>
                </div>
            </dl>
            </div>
        </div>)}
        {result.매물종류 === '상가점포' && (<div >
        <table class=" w-full text-sm sm:text-sm md:text-base lg:text-lg  text-center text-black dark:text-gray-100">
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3 text-base bg-gray-50 dark:bg-gray-800" colspan="4">
                        매물 정보
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class=" py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800" >
                    <span>매물종류</span>
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.매물종류}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    거래유형
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.거래유형}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    소재지
                    </th>
                    <td class="px-2 py-2" colspan="2" whitespace-nowrap>
                    {result.소재지}
                    </td>
                    
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    {금액1()}
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.금액1 &&`${result.금액1}만원`}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    {금액2()}
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.금액2 &&`${result.금액2}만원`}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    계약면적
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.계약면적}㎡
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    전용면적
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.전용면적}㎡
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    입주가능일
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.입주가능일}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    방향
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.방향}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    해당층/총층
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.해당층}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    방
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap" >
                    {result.방}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    건물종류
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.건물종류}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    건축물용도
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.건축물용도}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    현업종
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.현업종}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    추천업종
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.추천업종}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    총점포수
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.총점포수}
                    </td>
                    <td class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    사용승인일
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.사용승인일}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    주차가능여부
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.주차가능여부}
                    </td>
                    <td class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    총주차대수
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.총주차대수}
                    </td>
                </tr>

                
            </tbody>
        </table>
            <div class="mt-6 border-t border-gray-100">
            <dl class="divide-y divide-gray-100">
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="mx-2 text-sm sm:text-sm md:text-base lg:text-lg font-medium leading-6 text-gray-900">내용</dt>
                <dd class="mt-1 text-sm sm:text-sm md:text-base lg:text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {result.content}
                </dd>
                </div>
            </dl>
            </div>
        </div>)}
        {result.매물종류 === '빌라' && (<div >
        <table class=" w-full text-sm sm:text-sm md:text-base lg:text-lg  text-center text-black dark:text-gray-100">
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3 text-base bg-gray-50 dark:bg-gray-800" colspan="4">
                        매물 정보
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class=" py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800" >
                    <span>매물종류</span>
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.매물종류}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    거래유형
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.거래유형}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    소재지
                    </th>
                    <td class="px-2 py-2" colspan="2" whitespace-nowrap>
                    {result.소재지}
                    </td>
                    
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    {금액1()}
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.금액1 &&`${result.금액1}만원`}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    {금액2()}
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.금액2 &&`${result.금액2}만원`}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    공급면적
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.공급면적}㎡
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    전용면적
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.전용면적}㎡
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    해당동
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.해당동}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    입주가능일
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.입주가능일}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    방향
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.방향}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    해당층/총층
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap" >
                    {result.해당층}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    방/욕실수
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.방}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    월관리비
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.월관리비 && `${result.월관리비}만원`}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    건물종류
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.건물종류}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    건축물용도
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.건축물용도}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    총세대수
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.총세대수}
                    </td>
                    <td class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    사용승인일
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.사용승인일}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    주차가능여부
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.주차가능여부}
                    </td>
                    <td class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    총주차대수
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.총주차대수}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    건물보안
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.건물보안}
                    </td>
                    <td class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    
                    </td>
                </tr>

                
            </tbody>
        </table>
            <div class="mt-6 border-t border-gray-100">
            <dl class="divide-y divide-gray-100">
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="mx-2 text-sm sm:text-sm md:text-base lg:text-lg font-medium leading-6 text-gray-900">내용</dt>
                <dd class="mt-1 text-sm sm:text-sm md:text-base lg:text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {result.content}
                </dd>
                </div>
            </dl>
            </div>
        </div>)}
        {result.매물종류 === '단독' && (<div >
        <table class=" w-full text-sm sm:text-sm md:text-base lg:text-lg  text-center text-black dark:text-gray-100">
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3 text-base bg-gray-50 dark:bg-gray-800" colspan="4">
                        매물 정보
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class=" py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800" >
                    <span>매물종류</span>
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.매물종류}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    거래유형
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.거래유형}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    소재지
                    </th>
                    <td class="px-2 py-2" colspan="2" whitespace-nowrap>
                    {result.소재지}
                    </td>
                    
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    {금액1()}
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.금액1 &&`${result.금액1}만원`}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    {금액2()}
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.금액2 &&`${result.금액2}만원`}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    대지면적
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.대지면적}㎡
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    건축면적
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.건축면적}㎡
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    연면적
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.연면적}㎡
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    입주가능일
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.입주가능일}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    방향
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.방향}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    지하층/지상층
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap" >
                    {result.지하층}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    방/욕실수
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.방}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    월관리비
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.월관리비 && `${result.월관리비}만원`}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    건물종류
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.건물종류}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    건축물용도
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.건축물용도}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    총세대수
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.총세대수}
                    </td>
                    <td class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    사용승인일
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.사용승인일}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    주차가능여부
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.주차가능여부}
                    </td>
                    <td class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    총주차대수
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.총주차대수}
                    </td>
                </tr>
                
            </tbody>
        </table>
            <div class="mt-6 border-t border-gray-100">
            <dl class="divide-y divide-gray-100">
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="mx-2 text-sm sm:text-sm md:text-base lg:text-lg font-medium leading-6 text-gray-900">내용</dt>
                <dd class="mt-1 text-sm sm:text-sm md:text-base lg:text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {result.content}
                </dd>
                </div>
            </dl>
            </div>
        </div>)}
        {result.매물종류 === '토지' && (<div >
        <table class=" w-full text-sm sm:text-sm md:text-base lg:text-lg  text-center text-black dark:text-gray-100">
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3 text-base bg-gray-50 dark:bg-gray-800" colspan="4">
                        매물 정보
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class=" py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800" >
                    <span>매물종류</span>
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.매물종류}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    거래유형
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.거래유형}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    소재지
                    </th>
                    <td class="px-2 py-2" colspan="2" whitespace-nowrap>
                    {result.소재지}
                    </td>
                    
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    {금액1()}
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.금액1 &&`${result.금액1}만원`}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    {금액2()}
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.금액2 &&`${result.금액2}만원`}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    대지면적
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.대지면적}㎡
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    지목
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.지목}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="py-2 font-medium text-slate-600 bg-gray-50 dark:text-white dark:bg-gray-800">
                    용도지역
                    </th>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.용도지역}
                    </td>
                    <td class="py-2 font-medium text-slate-600  bg-gray-50 dark:text-white dark:bg-gray-800">
                    건축물용도
                    </td>
                    <td class="px-2 py-2 whitespace-nowrap">
                    {result.건축물용도}
                    </td>
                </tr>
                
                
            </tbody>
        </table>
            <div class="mt-6 border-t border-gray-100">
            <dl class="divide-y divide-gray-100">
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="mx-2 text-sm sm:text-sm md:text-base lg:text-lg font-medium leading-6 text-gray-900">내용</dt>
                <dd class="mt-1 text-sm sm:text-sm md:text-base lg:text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {result.content}
                </dd>
                </div>
            </dl>
            </div>
        </div>)}

   
    
    </>
  )
}

export default PostContent