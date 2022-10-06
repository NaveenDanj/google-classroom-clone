import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const Attachments = () => {
    return (
        <div className='mt-4 p-1 sm:p-0 '>

            <Box className=' cursor-pointer w-80 flex flex-row justify-between ' borderWidth='1px' borderRadius='md' overflow='hidden'>

                <div className='w-1/3 border-r-2 p-3 flex justify-center items-center '>
                    <Image
                        src={'https://fonts.gstatic.com/s/i/productlogos/drive_2020q4/v8/web-48dp/logo_drive_2020q4_color_1x_web_48dp.png'}
                        alt="drive image"
                        width={48}
                        height={48}
                    />
                </div>


                <div className='w-2/3 p-3 flex justify-center items-center'>

                    <div className='w-full'>
                        <h1 className='text-gray-700 font-medium  '>ICA Power Point.rar</h1>
                        <h1 className=' text-sm'>Compressed Archive</h1>
                    </div>

                </div>

            </Box>


        </div>
    )
}

export default Attachments