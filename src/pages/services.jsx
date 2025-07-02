import React from 'react';
import serviceImage from '../assets/images/serviceslist.jpg'

const Services = () => {
  return (
    <div className='px-8 md:px-16 lg:px-24 py-5 md:py-0'>
       <img src={serviceImage} alt='serviceImage' className='w-full' />
    </div>
  )
}

export default Services
