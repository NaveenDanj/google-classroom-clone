import React from 'react'
import EmptyList from '../../Global/EmptyList'

const PeopleTab = () => {
  return (
    <div className='flex flex-row justify-center'>
        
        <div className=' w-full sm:w-3/4 md:w-2/3 '>
            


            <EmptyList
                path='/img/people.gif'
                title='Add students to this class'
                subtitle='Invite people to your classroom to get started.'
            />
        </div>
    
    </div>
  )
}

export default PeopleTab