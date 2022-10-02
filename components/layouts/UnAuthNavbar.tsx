import React from 'react'
import Image from 'next/image'
import { Button } from '@chakra-ui/react'

function UnAuthNavbar() {
    return (

        <div className='w-full h-[10vh] p-4 border-b-2'>

            <div className='flex flex-row justify-between'>

                <div className=' flex'>
                    <Image
                        className='my-auto'
                        src="/img/logo.svg"
                        alt="Picture of the author"
                        width={74}
                        height={24}
                    />
                    <h1 className='font-medium text-lg ml-2 my-auto'>Classroom</h1>
                </div>

                <div className='my-auto'>
                    <Button className=' my-auto mr-2' colorScheme='teal' variant='outline'>
                        Join
                    </Button>
                </div>

            </div>


        </div>

    )
}

export default UnAuthNavbar