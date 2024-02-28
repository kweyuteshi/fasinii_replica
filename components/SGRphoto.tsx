import React from 'react'
import Image from 'next/image';

const SGRphoto = () => {
  return (
    <div className='w-full md:block relative'>
    <div className='relative'>
      <Image
        alt='sgr'
        src='/sgr.jpg'
        width={1280}
        height={180}
        layout='fixed'
      />
      <p className='absolute w-[70%] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9]'>
        <span className='text-[#479ED5]'>Fasinii</span> was created for your convenience,
        <br />
        search for the perfect car to embark on your journey
      </p>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[1]'></div>
    </div>
  </div>
  )
}

export default SGRphoto