import React from 'react'
import Image from 'next/image'
import { Button } from '@chakra-ui/react'
import { useAuth } from '../../context/AuthUserContext';
import JoinClassRoom from './JoinClassRoom';

function Body() {

  const { authUser, loading } = useAuth();

  return (
    <div className='flex flex-1 justify-center items-center h-[90vh]'>

      {!authUser && (
        <div>
          <Image
            className='my-auto'
            src="/img/landing.gif"
            alt="Picture of the author"
            width={280}
            height={280}
          />
          <h1 className='text-center font-medium text-xl'>Join now to get started today!</h1>
        </div>
      )}

      {authUser && (
        <div>
          <Image
            className='my-auto'
            src="/img/authLanding.gif"
            alt="Picture of the author"
            width={280}
            height={280}
          />
          <h1 className='text-center font-medium text-md'>Add a class to get started</h1>
          <div className='mt-5 flex justify-between flex-row'>
            <Button colorScheme='twitter' variant='ghost'>Create class</Button>
            <JoinClassRoom />
          </div>
        </div>
      )}




    </div>
  )
}

export default Body