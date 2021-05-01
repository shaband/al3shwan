import React from 'react';
import logo from './../assets/logo-white.svg'


export default function Footer(){

return(
<footer className="section py-14 h-52 ">
    <div className="flex flex-wrap items-center align-middle md:mr-4">
<div>
    <img src={logo}/>
</div>
    </div>
</footer>
);
}