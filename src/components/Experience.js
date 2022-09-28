import React from 'react';
// import Lottie from "lottie-react";
// import meds from "../med.json";
import profile from "../assets/img/profile.png"

const Experience = () => {
  return (
    <section name="Me" className='mb-12 pt-12 lg:mb-24'>
      <div className='container mx-auto'>
        <div className='flex flex-col min-h-[480px] lg:space-x-24 lg:flex-row'>
          <div className='flex-1 flex space-x-6 items-center lg:space-x-12'>
            <div
              className='self-start pt-12'
              data-aos='fade-down'
              data-aos-offset='400'
              >
              {/* <Lottie animationData={meds} style={{width:600, height:400, padding:10 }} /> */}
              <img className='h-48 w-full object-cover' src={profile} alt="lund" style={{height:500 , width:400 }} />
            </div>
          </div>
          {/* text */}
          <div
            className='flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0'
            data-aos='fade-left'
            data-aos-offset='400'
          >
            <h2 className='text-3xl text-[#F8C471] font-bold mb-6 '>
              About Me
            </h2>
            <p className=' text-semibold mb-6'>
             {/* 
               */}
               Hello! My name is Aditya and I enjoy creating things that live on the internet. My interest in web development taught me a lot about HTML, JavaScript & CSS!,
               My recent technologies <br/>
                
               <br/> -JavaScript (ES6+)<br/>
                -Tialwind Css<br/>
                -React<br/>
                -Figma<br/>
                -WordPress<br/>

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
