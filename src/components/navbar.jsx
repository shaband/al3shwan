import React, { useState } from 'react'
import imgUrl from './../assets/logo-white.svg'


function AppNavBar(){

return (
  <nav className="section bg-primary md:flex  md:h-24 items-center ">
    <div className="w-3/12">
      <img src={imgUrl} alt="logo" width="100" height="60" />
    </div>
    <ul className="md:flex list-none   md:flex-1 flex-wrap  items-center text-white">
      <li className="mx-1 p-2 active">الرئيسية </li>
      <li className=" mx-1 p-2 ">خدمات المجموعة </li>
      <li className=" mx-1 p-2 ">تقديم الاستشارات </li>
      <li className=" mx-1 p-2 ">المركز الاعلامى </li>
      <li className=" mx-1 p-2 ">سابقة الاعمال</li>
      <li className=" mx-1 p-2 ">تواصل معنا </li>
      <li className=" mx-1 p-2 ">عن المجموعة </li>
    </ul>
  </nav>
);
}
export default AppNavBar