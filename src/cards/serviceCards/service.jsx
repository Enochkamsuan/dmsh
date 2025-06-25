import React from 'react';
import Data from '../../data/data';

const serviceCards = () => {
  return (
    

 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
  {Data.map((val,id) => (
        <div key={id} className='border-2 border-blue-500/50 p-6 rounded-lg bg-white' style={{boxShadow:'4px 4px 6px rgba(0,0,0,0.1)'}}>
          <div className='flex flex-col items-center text-center space-y-4'>
            <div className='text-4xl bg-blue-500 text-white rounded-full p-3'>
              {val.icon}
            </div>
            <p className='text-gray-700 font-medium'>
              {val.description}
            </p>
          </div>
        </div>
      ))}
      </div>
  )
}

export default serviceCards
