import React, { useState } from 'react'
import Slider from './slider';
export default function Team()
{

const images=Object.values( import.meta.globEager('../assets/avatars/*.jpg'))


return (<section className="section ">
     <div className="text-center p-4 font-semibold  text-2xl">
          <h3> فريق عمل المجموعة</h3>
     </div>
     <Slider>
          {images.map((image,i)=>{
          return <div key={i} className="w-64 h-64 flex flex-col items-center justify-items-center my-14">
               <img src={image.default} className="w-64 h-64 rounded-full" />
               <div className="text-center space-x-1">
                    <h1 className="text-xl font-semibold">أحمد العشوان</h1>
                    <h1 className="text-base text-gray-600">محامي ومستشار قانوني </h1>
               </div>
          </div>
          })}
     </Slider>
</section>);

}