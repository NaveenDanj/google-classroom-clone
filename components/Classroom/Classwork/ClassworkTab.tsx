import Image from 'next/image'
import React from 'react'
import EmptyList from '../../Global/EmptyList'
import ClassroomItem from './ClassroomItem'
import ClassworkHeaderTeacher from './ClassworkHeaderTeacher'


function ClassworkTab() {
    return (
        <div className='flex flex-row justify-center'>
            <div className=' w-full sm:w-3/4 md:w-2/3 '>
                <ClassworkHeaderTeacher />
                {/* <EmptyList
                    path='/img/notfound.gif'
                    title='This is where you’ll assign work'
                    subtitle='You can add assignments and other work for the class, then organize it into topics'
                /> */}
                <div className='px-1 py-2'>
                    <ClassroomItem />
                    <ClassroomItem />
                    <ClassroomItem />
                    <ClassroomItem />
                    <ClassroomItem />
                    <ClassroomItem />
                    <ClassroomItem />
                    <ClassroomItem />
                    <ClassroomItem />
                    <ClassroomItem />
                    <ClassroomItem />
                    <ClassroomItem />
                </div>
            </div>
        </div>
    )
}

export default ClassworkTab