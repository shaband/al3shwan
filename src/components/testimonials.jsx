import React from 'react'
import Slider from './slider'
import quotes from '../assets/quotes.svg'
import TestimonialsMocks from '../../mocks/testimonials.json'



function Cards(){

 return   (
     TestimonialsMocks.map((testimonial)=>{
        return (
        <div key={testimonial.id}>
        <div className="flex  flex-col  bg-secondary m-3 rounded-xl  p-9 mx-10">
            <img alt="quotes" src={quotes} className="w-8 mb-3" />
            <p  className="mb-3 text-justify line-clamp-7  text-white font-bold testimonial-body">
                {testimonial.testimonials}
            </p>
            <div className="font-bold ">
                <span >{testimonial.name} </span> / <span className="opacity-30"> {testimonial.postion} </span>            
            </div>
            </div>
        </div>
        )
    })
    )
}

export default function testimonials(){
return (<section className="section  testimonal-bg-img pt-8">
    <div className="pb-7">
        <h1 className="font-bold text-4xl text-white ">آراء العملاء</h1>
    </div>

    <Slider >
     {Cards()}
    </Slider>

</section>)
}