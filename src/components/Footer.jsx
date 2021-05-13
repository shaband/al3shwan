import React from 'react';
import logo from './../assets/logo-white.svg'


export default function Footer(){

return(
<footer className="section py-14 h-52 ">
        <div className="grid  sm:grid-cols-1 md:grid-cols-4 gap-2 grid-flow-col ">
            <div>
                <div>
                    <img src={ logo } />
                </div>
            </div>
            <div className="col-span-2">
                <ul className="grid gap-2  md:grid-rows-4 md:grid-cols-2 text-white">
                    <li>list1</li>
                    <li>list2</li>
                    <li>list3</li>
                    <li>list4</li>
                    <li>list5</li>
                    <li>list6</li>
                </ul>
            </div>
            <div>

            </div>
    </div>
</footer>
);
}