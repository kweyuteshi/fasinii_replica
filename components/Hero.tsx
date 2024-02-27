import React from 'react'

const Hero = () => {
  return (
    
    <div className='hero'>
        <div className='w-full h-full'>
            <div className='mx-auto p-4 md:p-8 pt-12 mt-12 lg:mt-0 lg:pt-0 flex'>
                <div className='w-full h-[100%] my-12 lg:pt-52'>
                    <div className="max-w-[1240px] w-full md:h-full mx-auto flex justify-center flex-col">
                        <div className='flex flex-col lg:justify-start md:justify-start'>
                            < div className='py-5 sm:py-5'>
        <h1 className="text-[#003D64] text-3xl font-normal">Why buy a car when you can <span className="text-[#479ED5]">rent it?</span></h1></div>
        <p className='text-[#003D64] text-l font-light mt-2 lg:pl-3 lg:pb-2'>Rent your ideal car today</p>
        <div className='p-2 w-auto flex shadow-lg'>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:flex md:justify-between">
        <div className="mb-4 md:w-1/3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
            Rental Start Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="startDate"
            type="date"
            placeholder="Rental Start Date"
          />
        </div>
        <div className="mb-4 md:w-1/3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
            Rental End Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="endDate"
            type="date"
            placeholder="Rental End Date"
          />
        </div>
        <div className="mb-6 md:w-1/3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Location"
          />
        </div>
        <div className="md:w-full">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right md:float-none"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Hero