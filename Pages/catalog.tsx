import { Button, CatalogButtonGroup } from '@/components/ui/buttons'
import React from 'react'

// Example button data array
const CatalogButtons = [
  { id: 1, label: 'Primary Button' },
  { id: 2, label: 'Secondary Button' }
];

const Catalog = () => {
  return (
    <section className=' w-full h-screen flex-col '>
        <div className=' px-8 '>
            <h1 className='text-6xl font-bold my-6'>
                Catalog
            </h1>
        </div>
        <div className='px-8  flex p-2'>
           
       <div className='flex gap-4'>
        <CatalogButtonGroup />
      </div>

      <div className='flex-1 flex justify-end items-center gap-4'>
        <p>
          Showing 9 of 1000 results
        </p>

        <p>
          <span className='font-bold'>Sort by </span>
          Default 
        </p>
      </div>
        </div>
    </section>
  )
}

export default Catalog