import React from 'react'
import {
  List,
  ListItem
} from '@chakra-ui/react'

import { BsHouseDoor , BsPersonCircle , BsCheck2Square} from 'react-icons/bs';


function EnrolledClasses() {
  return (
    <div>
      <h1 className=' font-medium' >Enrolled</h1>

      <div className='p-3'>
        <List spacing={1}>
          
          <ListItem className=' cursor-pointer flex flex-row hover:bg-slate-300 p-2 rounded-r-[40px]'>
            <BsCheck2Square size={20} className='my-auto mr-5' />
            <h1 className=' text-md font-medium'>To-do</h1>
          </ListItem>

          <ListItem className=' cursor-pointer flex flex-row hover:bg-slate-300 p-2 rounded-r-[40px]'>
            <BsPersonCircle size={20} className='my-auto mr-5' />
            <h1 className=' text-md font-medium'>For Sci</h1>
          </ListItem>

          <ListItem className=' cursor-pointer flex flex-row hover:bg-slate-300 p-2 rounded-r-[40px]'>
            <BsPersonCircle size={20} className='my-auto mr-5' />
            <h1 className=' text-md font-medium'>Computer Literacy-COM101GO</h1>
          </ListItem>

          <ListItem className=' cursor-pointer flex flex-row hover:bg-slate-300 p-2 rounded-r-[40px]'>
            <BsPersonCircle size={20} className='my-auto mr-5' />
            <h1 className=' text-md font-medium'>Level 1 science 2022</h1>
          </ListItem>

        </List>
      </div>

    </div>
  )
}

export default EnrolledClasses