import React from 'react';


import Lottie from "lottie-react";

import work from "../work.json";

const Banner = () => {
  return (
    <div name="banner" className='min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left'>
      <div className='container mx-auto  '>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <div>
            <h1
              className='text-3xl font-bold text-violet-500 mb-8 lg:text-5xl lg:leading-snug pt-10'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              Hi i Am <br /> Aditya Khedekar And I am budding front-end developer 
            </h1>
            <p
              className='font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              I am a Front-end developer skilled in building and designing immersive virtual experince's based in Pune,India
            </p>
            {/* btns */}
            <div
              className='flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start'
              data-aos='fade-down'
              data-aos-delay='700'
            ><a href='https://drive.google.com/file/d/13aVCutXFr_luhBs8MqunuVwDsYJFmPjv/view?usp=sharing' target="_blank" rel='noopener noreferrer'>
              <button className='btn'>Hire Me !</button>
              </a>
             
            </div>
          </div>
          <div className='pb-10 pl-10' data-aos='fade-up' data-aos-delay='800'>
           <Lottie animationData={work} style={{width:600, height:400,padding:10 }} />
            {/* <img className='object-cover  h-50 w-full px-60 py-100 ' src={Img } alt='/'/> */}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
