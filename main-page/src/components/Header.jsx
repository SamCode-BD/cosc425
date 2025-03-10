import * as React from 'react';
import logo from '../assets/sammy_logo.svg';      

export default function Header(){

    return(

      <div className="flex items-center justify-center w-full h-25 bg-gold relative"> 

        <div className="absolute left-4 mt-2 mb-2 hidden lg:block">  
          <img src={logo} alt="Logo" width="75" height="75" />
        </div>
        
        <div className="top-2">
          <h1 className="font-bold text-white text-center text-shadow">
            Bone Identification Website
          </h1>
        </div>

        <div className="absolute right-4 mt-2 mb-2 hidden lg:block">  
          <img src={logo} alt="Logo" width="75" height="75" />
        </div>

      </div>

    )
}