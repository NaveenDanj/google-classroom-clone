import React from 'react'
import Image from 'next/image'

function Body() {
  return (
    <div className='flex flex-1 justify-center items-center h-[90vh]'>
      <div>
        <Image
          className='my-auto'
          src="/img/landing.gif"
          alt="Picture of the author"
          width={250}
          height={250}
        />
        <h1 className='text-center font-medium text-xl'>Join now to get started today!</h1>
      </div>
    </div>
  )
}

export default Body