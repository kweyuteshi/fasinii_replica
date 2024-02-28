import React from 'react'
import Form from './Form'
import CarDetails from '../data/CarDetails.json'
import CarCard from './CarCard' 
import Image from 'next/image';
import SGRphoto from './SGRphoto';
import Types from './Types';
import City from './City';

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
    <div className='w-full h-full'>
  <SGRphoto />
</div>
<div className='w-full h-full flex flex-col'>
<Types />
</div>
<div className='w-full h-full flex flex-col'>
  <City />
</div>
<div className='w-full h-full flex flex-col'>
  
</div>

        </div>
    </div>
    
  )
}

export default Hero