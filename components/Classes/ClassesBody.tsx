import React from 'react'
import ClassCard from './ClassCard'

const ClassesBody = () => {
    return (
        <div className='mt-5'>

            <div className="grid grid-flow-row auto-rows-max  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />

            </div>


        </div>
    )
}

export default ClassesBody