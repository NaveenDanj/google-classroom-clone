import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { BsPencil, BsGear } from 'react-icons/bs';
import Image from 'next/image'
import AddAnnounce from './AddAnnounce';
import UserPosts from './Announcements/UserPosts';
import NewAssignment from './Announcements/NewAssignment';

function StreamTab() {
    return (
        <div className='flex flex-row justify-center'>

            <div className=' w-full sm:w-4/5 md:w-3/4'>

                {/* header */}
                <div style={styles.imageBG} className='w-full rounded-md h-60 p-4'>

                    <div className='flex flex-row justify-end '>
                        <Button>
                            <BsPencil className='mr-3' />
                            Customize
                        </Button>
                    </div>

                    <div style={{ position: 'relative', bottom: -120 }} className='relative bottom-[-50] left-0'>
                        <h1 className='text-2xl font-medium text-white'>Classroom name</h1>
                        <h1 className='text-white'>Computer Science</h1>
                    </div>

                </div>

                <div className='w-full flex-col md:flex md:flex-row mt-5'>

                    <div className='shrink-0 mt-1 mr-4 md:w-48 '>
                        <Box className='p-2' borderWidth='1px' borderRadius='lg' overflow='hidden'>

                            <div className='flex mt-2 flex-row w-full justify-between'>
                                <h2 className='text-sm font-medium'>Class code</h2>
                                <Button className=' my-auto mr-2' size={'xs'} colorScheme='teal' variant='ghost'>
                                    <BsGear />
                                </Button>
                            </div>

                            <div className='flex mt-1 flex-row w-full'>
                                <h2 className=' my-auto text-xl font-medium'>a3ac6jd</h2>
                                <Button className=' my-auto mr-2' size={'md'} colorScheme='teal' variant='ghost'>
                                    <BsGear />
                                </Button>
                            </div>

                        </Box>

                        <Box className='p-2 mt-5' borderWidth='1px' borderRadius='lg' overflow='hidden'>

                            <div className='flex mt-2 flex-row w-full justify-between'>
                                <h2 className='text-sm font-medium'>Upcoming</h2>
                            </div>

                            <div className='flex mt-3 flex-row w-full'>
                                <h2 className=' my-auto text-xs font-medium'>No work due soon</h2>
                            </div>

                            <div className='flex mt-3 flex-row w-full justify-end '>
                                <Button className=' my-auto mr-2' size={'sm'} colorScheme='teal' variant='ghost'>
                                    View all
                                </Button>
                            </div>

                        </Box>

                    </div>

                    <div className='ml-2 md:w-full '>

                        <AddAnnounce />
                        
                        <div className='mt-3'></div>

                        <UserPosts />
                        <div className='mt-5'></div>
                        <NewAssignment />

                        <Box className='p-2 mt-5 flex flex-row' borderWidth='1px' borderRadius='lg' overflow='hidden'>

                            <Image
                                alt="Picture of the author"
                                width={180}
                                height={180}
                                src={"/img/interact.gif"}
                                className="my-auto"
                            />

                            <div className='my-auto'>
                                <h1 className="text-xl">This is where you can talk to your class</h1>
                                <p className='font-meidum mt-2'>Use the stream to share announcements, post assignments, and respond to student questions</p>
                                <div className="flex justify-end">
                                    <Button className=' my-auto mr-2 mt-3' size={'md'} colorScheme='teal' variant='outline'>
                                        <BsGear className='mr-2' />
                                        Stream settings
                                    </Button>
                                </div>
                            </div>

                        </Box>
                    
                    </div>

                </div>

            </div>

        </div>
    )
}

const styles = {

    imageBG: {
        backgroundImage: 'url(https://gstatic.com/classroom/themes/img_breakfast.jpg)',
        resizeMode: 'cover'
    }

}


export default StreamTab