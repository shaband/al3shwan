import React from 'react';
import logo from './../assets/logo-white.svg'
// import facebook from "./../assets/socials/fb.svg";
// import twitter from "./../assets/socials/twitter.svg";
// import instagram from "./../assets/socials/instagram.svg";
// import linkedin from "./../assets/socials/linkedin.svg";
import {Facebook,Instagram,Linkedin,Twitter,Mail,Phone,Map} from 'react-feather'


export default function Footer(){

return (
  <footer className="section pt-14  bg-footer-background bg-no-repeat bg-[100%] bg-left-bottom ">
    <div className="grid  sm:grid-cols-1 md:grid-cols-4 gap-2 grid-flow-col ">
      <div>
        <div className="flex flex-col items-center justify-center">
          <img src={logo} className="w-40" height="115px" />
          <ul className="list-none  w-40 flex flex-row justify-items-center justify-between mx-4 my-6">
            <li className=" hover:transform hover:scale-125 duration-300">
              <a href="#">
                <Twitter
                  className="text-transparent bg-white p-1 rounded hover:bg-secondary "
                  fill="#171f30"
                />
              </a>
            </li>
            <li className=" hover:transform hover:scale-125 duration-300">
              <a href="#">
                <Facebook
                  className="text-transparent bg-white p-1 rounded hover:bg-secondary "
                  fill="#171f30"
                />
              </a>
            </li>
            <li className="  hover:transform hover:scale-125 duration-300">
              <a href="#">
                <Linkedin
                  className="text-transparent bg-white p-1 rounded hover:bg-secondary "
                  fill="#171f30"
                />
              </a>
            </li>
            <li className=" hover:transform hover:scale-125 duration-300">
              <a href="#">
                <Instagram
                  className="text-transparent bg-white p-1 rounded hover:bg-secondary "
                  fill="#171f30"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-2">
        <ul className="grid gap-2  md:grid-rows-4 md:grid-cols-2 text-white">
          <li className="hover:text-secondary">
            <a href="#">الرئيسية</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#">خدمات المجموعه</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#">تقديم الاستثمارات</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#">المدونه</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#">سابقة الاعمال</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#">عند المجموعه</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#">تواصل معنا</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#">المركز الاعلامى</a>
          </li>
        </ul>
      </div>
      <div className="flex sm:flex-col md:flex-row">
        <div className="text-white">
          <ul>
            <li className=" flex flex-row justify-between items-center">
              <span className="ml-4">
                <Phone />
              </span>
              <span>
                <div>أرقام التواصل</div>
                <div>0546655467 - 0557452344</div>
              </span>
            </li>

            <li className=" flex flex-row justify-between items-center">
              <span className="ml-4">
                <Mail />
              </span>
              <span>
                <div>البريد الالكتروني </div>
                <div>ahmed@alashwanlaw.com</div>
              </span>
            </li>
            <li className="flex flex-row justify-between items-center">
              <span className="ml-4">
                <Map />
              </span>
              <span>
                <div>عنوان </div>
                <div>المكتب المملكة العربية السعودية</div>
              </span>
            </li>
          </ul>
        </div>
        <div>
          <iframe src="https://www.google.com/maps/@30.9701938,31.182492,15z"></iframe>
        </div>
      </div>
    </div>
  </footer>
);
}