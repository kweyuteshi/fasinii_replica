import React from 'react'
import Form from './Form'
import CarDetails from '../data/CarDetails.json'
import CarCard from './CarCard' 
import Image from 'next/image';

const Hero = () => {
  return (
    
    <div className='hero'>
        <div className='w-full h-full'>
            <div className='mx-auto p-4 md:p-8 pt-12 mt-12 lg:mt-0 lg:pt-0 flex'>
                <div className='w-full h-[100%] my-12 lg:pt-52'>
                    <div className="max-w-[1240px] w-full md:h-full mx-auto flex justify-center flex-col">
                        <div className='flex flex-col lg:justify-start md:justify-start'>
                            < div className='py-5 sm:py-5'>
        <h1 className="text-[#003D64] text-3xl font-normal">Why buy a car when you can <span className="text-[#479ED5]">rent it?</span></h1>
        <p className='text-[#003D64] text-l font-light mt-2 lg:pl-3 lg:pb-2'>Rent your ideal car today</p></div>
        <Form />
        </div>
        </div>
        </div>
        </div>
        <div className='w-full h-full'>
        <div className='flex-col w-full text-[#003D64] mb-4'>
          <h1 className='text-2xl font-normal mb-2'>Trending cars on <span className='text-[#479ed5]'>Fasinii</span></h1>
          <p className='mt-2'>These cars based in Nairobi have the highest ratings on fasini</p>
        </div>
        <div className="flex flex-row items-center my-8 pb-4 overflow-x-auto w-full duration-300">
      <div className="flex">
        {CarDetails.cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
    </div>
<div className='w-full relative' >
  <span className='box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;'>
  <span className='box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;'></span>
    <Image alt='sgr' src='/sgr.jpg' width={1440} height={10} />
  </span>
  <p className='absolute text-md w-[70%] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9]'><span className='text-[#479ED5]'>Fasinii</span>
  was created for your convenience,
  <br />
  search for the perfect car to embark on your journey
  </p>
</div>
        </div>
    </div>
    
  )
}

export default Hero