import React from 'react';

// import images
import chairoo from '../assets/img/chairoo.png';
import chairo from '../assets/img/chairo.png';
import sys from '../assets/img/sys.png';
import exp from '../assets/img/exp.jpg';

const Headsets = () => {
  return (
    <section name="head" className='py-12 lg:py-24'>
      <div className='container mx-auto'>
        {/* title */}
        <h2
          className='text-3xl font-bold mb-10 text-violet-500  '
          data-aos='fade-down'
          data-aos-offset='300'
        >
        Personal Projects :)
        </h2>
        {/* grid */}
        <div className='grid gap-y-4 lg:grid-cols-2 lg:gap-9'>
          {/* item */}
          <div
            className='relative bg-auto'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1000'
          ><a href='https://www.figma.com/proto/EfWRk8QFotWnWBwxKYiAKi/Chairo-%7C-Spcae-(Community)?type=design&node-id=105-262&t=jOm8oiYQPDf6Kv6o-1&scaling=scale-down&page-id=105%3A261&mode=design' target="_blank" rel="noreferrer">
            <img className='object-cover' src={chairoo} alt='lund' style={{height:400 , width:700 }} /></a>
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>Bookmaker</h4>
              <p className='text-black font-semibold'>
                A Web application to track ur time and master it  optimally
              </p>
            </div>
          </div>
          {/* item */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1300'
          >
            <a href='https://iadtya.github.io/Chairo-space/' target="_blank" rel="noreferrer">
            <img className='object-cover' src={chairo} alt='' style={{height:400 }}/></a>
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>AIoT</h4>
              <p className='text-white font-semibold'>
               A concept web app front end for tracking and mastering time optimally
              </p>
            </div>
          </div>
          {/* item */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1600'
          >
            <a href='https://www.youtube.com/watch?v=Byp0moiqosU' target="_blank" rel="noreferrer">  
            <img className='object-cover' src={sys} alt=''  style={{height:400}} /></a>
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>Solider Sys</h4>
              <p className='font-semibold'>
                A IOT device paired with secure AES algorithm for data security of our valuable solider's data 
              </p>
            </div>
          </div>
          {/* item */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1900'
          ><a href='https://github.com/iAdtya/bookmaker' target="_blank" rel="noreferrer">
            <img className='object-cover' src={exp} alt='' style={{height:400, width:700}}/></a>
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='text-black font-semibold text-xl mb-2'>Expense tracker</h4>
              <p className='text-black font-semibold'>
                Expense trcaker app clone , mobile responsive
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
