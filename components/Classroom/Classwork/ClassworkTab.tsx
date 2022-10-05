import React from 'react'
import ClassworkHeaderTeacher from './ClassworkHeaderTeacher'

function ClassworkTab() {
  return (
    <div className='flex flex-row justify-center'>
        <div className=' w-full sm:w-3/4 md:w-2/3 '>
            <ClassworkHeaderTeacher />
        </div>
    </div>
  )
}

export default ClassworkTab