import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { BsFillPersonPlusFill } from 'react-icons/bs'
import PeopleCard from './PeopleCard'

const StudentPeopleView = () => {
    return (
        
        <div className='w-full mt-5 '>
            <div className='p-5 flex border-b-2 border-orange-600 flex-row justify-between '>
                <div>
                    <h1 className=' text-2xl text-orange-600 '>Classmates</h1>
                </div>

                <IconButton colorScheme={'orange'} variant="ghost" className='my-auto' size={'md'} aria-label='Search database' icon={<BsFillPersonPlusFill style={{ fontSize: 25 }} />} />

            </div>

            <div>
                <PeopleCard />
            </div>


        </div>

    )
}

export default StudentPeopleView