import React from 'react';
export default function Sponsors(){
const images=Object.values( import.meta.globEager('../assets/sponsors/*'))

return (
<div className="text-center w-full py-10 ">
    <h3 className="mx-auto font-semibold text-3xl mb-8">شركاء النجاح</h3>

    <div className="w-10/12 mx-auto md:flex flex-wrap justify-between items-center space-x-2">
        {images.map((image,i)=>(
        <div key={i} className="h-20">
            <img srcSet={image.default} className=" h-14" loading="lazy" />
        </div>
        ))}

    </div>
</div>)
}