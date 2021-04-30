import React, { useState } from 'react'
import Navbar from '../components/navbar'
import logo from '../assets/logo.svg';
import hammer from '../assets/hammer.png';
import article1 from '../assets/articles/bill-oxford-OXGhu60NwxU-unsplash.jpg';
import article2 from '../assets/articles/scott-graham-OQMZwNd3ThU-unsplash.jpg';
import article3 from '../assets/articles/cytonn-photography-GJao3ZTX9gU-unsplash.jpg';
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

function Sponsors(){
const images=Object.values( import.meta.globEager('../assets/sponsors/*'))

return (
<div className="text-center w-full py-10 ">
    <h3 className="mx-auto font-semibold text-3xl">شركاء النجاح</h3>

    <div className="w-10/12 mx-auto md:flex flex-wrap space-x-2">
        {images.map((image,i)=>(
        <div key={i}>
            <img src={image} className="w-44 h-44" />
        </div>
        ))}

    </div>
</div>);
}

function HomePage (){

return (<>

    <Intro />

    <div className=" bg-white pt-44 h-full">
        <Team />
    </div>

    <Testimonials />
    <div className=" bg-white  h-full pb-16">
        <div className="text-center w-full py-10 ">
            <h3 className="mx-auto font-semibold text-3xl">مدونة المجموعة</h3>
        </div>
        <div className="md:flex flex-wrap justify-center h-auto ">
            <div className="flex flex-col md:w-1/4 mx-3 sm:w-full shadow-lg rounded-b-xl ">
                <img src={article1} alt="article" className="rounded-t-xl object-cover h-48" />
                <div className="p-4">
                    <h3 className="line-clamp-2 mb-2 ">
                        كيفية إدارة المكتب القانوني الإلكتروني لقسم الأخبار القانونية لمكتب المحاماة
                    </h3>
                    <p className="line-clamp-4 text-gray-600 text-sm">
                        في المكتب القانوني الإلكتروني لا نكتفي بالصحف اليومية في عملية البحث عن الخبر القانوني، ولكن
                        نقوم
                        بالبحث في الجرائد الرسمية وأحكام المحاكم العليا، للوصول إلى أخر المستجدات التي يتطلع إليها
                        عملائك.
                    </p>
                </div>
            </div>
            <div className="flex flex-col mx-3 md:w-1/4 sm:w-full shadow-lg rounded-b-xl">
                <img src={article2} alt="article2" className="rounded-t-xl object-cover h-48" />
                <div className="p-4">
                    <h3 className="line-clamp-2 my-2 ">كيفية إدارة المكتب القانوني الإلكتروني لقسم الأخبار القانونية
                        لمكتب المحاماة</h3>
                    <p className="line-clamp-4 text-gray-600 text-sm">في المكتب القانوني الإلكتروني لا نكتفي بالصحف
                        اليومية في عملية
                        البحث عن الخبر القانوني، ولكن نقوم بالبحث في الجرائد الرسمية وأحكام المحاكم العليا، للوصول إلى
                        أخر
                        المستجدات التي يتطلع إليها عملائك. </p>
                </div>
            </div>
            <div className="flex flex-col mx-3 md:w-1/4 sm:w-full shadow-lg rounded-b-xl">
                <img src={article3} alt="article2" className="rounded-t-xl  object-cover h-48" />
                <div className="p-4">
                    <h3 className="line-clamp-2 my-2 ">كيفية إدارة المكتب القانوني الإلكتروني لقسم الأخبار القانونية
                        لمكتب المحاماة</h3>
                    <p className="line-clamp-4 text-gray-600 text-sm">في المكتب القانوني الإلكتروني لا نكتفي بالصحف
                        اليومية في عملية
                        البحث عن الخبر القانوني، ولكن نقوم بالبحث في الجرائد الرسمية وأحكام المحاكم العليا، للوصول إلى
                        أخر
                        المستجدات التي يتطلع إليها عملائك. </p>
                </div>
            </div>
        </div>
        <div className="text-center w-full mt-10">
            <a href="#"
                className="mx-auto bg-secondray-gradient text-xl text-white font-semibold md:px-20 py-2  rounded-tl-xl rounded-br-xl shadow-2xl	 cursor-pointer hover:bg-secondary ">مشاهدة
                كل المقالات</a>
        </div>


    </div>

    <div className="bg-white  h-full">


        <div className="flex flex-col items-center align-middle bg-primary p-4 w-10/12 mx-auto rounded-lg text-white ">
            <h2 className="text-2xl  text-center font-bold pt-5 mb-3">ابق على تواصل معنا</h2>
            <p className=" opacity-75 text-base text-center leading-relaxed w-3/4 mb-4">بامكانك البقاء معنا على اتصال و
                معرفة كل ما هو جديد عن مجموعة مكاتب أحمد الشوان و التواصل مع فريق العمل
                دائماً كل ما عليك هو ادخال رقم جوالك</p>
            <form>
                <div className="flex rounded-xl text-primary">
                    <div className="flex flex-col bg-white md:w-96 xs:w-48  rounded-r ">
                        <label className="pr-4 text-sm font-bold pt-1" htmlFor="email"> رقم الجوال</label>
                        <input id="email" type="email" name="email"
                            className="focus:ring-secondary focus:border-secondary flex-1 block w-full rounded-none rounded-br-md  sm:text-sm border-none "
                            placeholder="ادخل رقم جوالك" />
                    </div>
                    <button type="button"
                        className="bg-secondray-gradient text-white  p-4 rounded-l px-8 ">إرسـال</button>
                </div>
            </form>

        </div>
    </div>



    <div className="bg-white  h-full">
        {/* {Sponsors()} */}
    </div>





</>)
}
export default HomePage;