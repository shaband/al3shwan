import React, { useState } from 'react'
import Navbar from '../components/navbar'
import logo from '../assets/logo.svg';
import hammer from '../assets/hammer.png';
import Team from '../components/team';
import Testimonials from '../components/testimonials';




function Intro(){


return (
<section className="section  md:max-h-100">
    <div className="flex-wrap pb-8 intro-background md:flex">
        <div
            className="flex flex-col flex-1 w-1/2 my-auto prose text-white align-center md:ml-10 md:pb-2 sm:pb-4 align-middle">
            <h1>مجموعة مكاتب أحمد العشوان</h1>
            <p className="text-lg font-semibold">نحن ملتزمون بتقديم أعلى مستوى للخدمات القانونية بما يتماشى مع متطلبات
                عملائنا مع مراعاة عوامل الوقت وأعلى معايير الجودة والشفافية وممارسة إجراءات التقاضي الناجحة التي تتوافق
                مع القوانين والتشريعات
            </p>
        </div>
        <div className="">
            <img src={logo} alt="logo" className="object-contain" />

        </div>
    </div>
    <div className="relative md:flex md:flex-wrap md:items-center bg-white rounded-lg shadow-white h-full ">
        <div className=" inline-block w-1/3 flex-1">
            <img src={hammer} alt="hammer" className="absolute top-n-xl inset-x-0 w-1/3" />
        </div>
        <div className="w-2/3 align-middle px-5 py-11">
            <h1 className="font-semibold text-gray-800 text-5xl mb-8">هدف المجموعة</h1>
            <p className="font-semibold text-gray-600 tex-xl leading-8">مكتب العشوان للمحاماة والاستشارات القانونية
                والتوثيق دورنا ومهمتنا هي اكتشاف الحقائق وتبديد الشكوك لإعادة الحق إلى صاحبه، بينما نقوم بواجباتنا
                الحقيقية وحماية الحقوق نعتقد أن الحق هو سيادة النظام و القانون والقانون هو طريق العدالة، وهذا هو هدفنا
                في النهاية، ونتطلع لمواكبة التقدم وكل جديد في مسيرتنا نحو العدالة، لتحقيق مكاننا في الصف الأول من التميز
                والتخصص والإبداع </p>
        </div>
    </div>

</section>
);
}

function HomePage (){

return (<>

    <Intro />

    <div className=" bg-white pt-44 h-full">
        <Team>
            <div> allooooooooooooooooooooo</div>
            <div> allooooooooooooooooooooo</div>
            <div> allooooooooooooooooooooo</div>

        </Team>
    </div>
    <Testimonials />
</>)
}
export default HomePage;