import Image from 'next/image'
import React from 'react'

const LoadingScreen = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div>
            <Image
              width={300}
              height={300}
              alt='loading'
              src={'/img/loading.gif'}
            />
            <h1 className='text-center text-2xl '>Please wait...</h1>
        </div>
    </div>
  )
}

export default LoadingScreen