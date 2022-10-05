import React from 'react'
import EmptyList from '../../Global/EmptyList'
import GradesHeader from './GradesHeader'
import GradesItem from './GradesItem'

const GradeTab = () => {
    return (
        <div className='flex flex-row justify-center'>
            <div className=' w-full sm:w-3/4 md:w-2/3 '>
                <GradesHeader />
                {/* <EmptyList
                    path='/img/notfound.gif'
                    title='This is where you’ll assign work'
                    subtitle='You can add assignments and other work for the class, then organize it into topics'
                /> */}
                <div className='px-1 py-2'>
                    <GradesItem />
                </div>
            </div>
        </div>
    )
}

export default GradeTab