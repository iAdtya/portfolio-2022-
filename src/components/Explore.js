import React from 'react';

const Explore = () => {
  return (
    <section name="colab" className='min-h-[400px] mb-16 lg:mb-4'>
      <div className='container mx-auto h-full'>
        <div className='h-full bg-explore bg-no-repeat bg-cover p-14 flex flex-col items-start justify-center'>
          <h3
            className='self-start text-3xl font-semibold mb-8'
            
          >
            Get In Touch
          </h3>
          <p
            className='max-w-xs mb-12'
          
          >
           I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </p>
          {/* form */}
          <form
            className='flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0'
          >
            <input
              className='bg-gradient-to-t from-[#341D38] to-[#271223] h-12 px-4 outline-none rounded-md'
              type='text'
              placeholder='Your email'
            />
            <button className='btn'>Say Hello</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Explore;
