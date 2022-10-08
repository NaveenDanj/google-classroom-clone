import React, { useEffect, useState } from 'react'
import {
  List,
  ListItem
} from '@chakra-ui/react'

import { BsPersonCircle, BsCheck2Square } from 'react-icons/bs';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/FirebaseApp';
import { useAuth } from '../../context/AuthUserContext';
import { IClass } from '../../Constants';


function EnrolledClasses() {
  const { authUser } = useAuth();
  const [enrolledList, setEnrolledList] = useState<IClass[]>([]);

  const loadEnrolledClasses = async () => {
    try {
      const userRef = collection(db, "classes");
      const q = query(userRef, where("owner", "==", authUser.uid));
      const querySnapshot = await getDocs(q);
      let l: IClass[] = [];
      querySnapshot.docs.forEach(item => {
        let classroom: IClass = {
          id: item.id,
          className: item.data().className,
          owner: item.data().owner,
          room: item.data().room,
          section: item.data().section,
          subject: item.data().subject
        }
        l.push(classroom);
      });
      setEnrolledList(l);
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {
    loadEnrolledClasses();
  }, []);


  return (
    <div>
      <h1 className=' font-medium' >Enrolled</h1>

      <div className='p-3'>
        <List spacing={1}>

          <ListItem className=' cursor-pointer flex flex-row hover:bg-slate-300 p-2 rounded-r-[40px]'>
            <BsCheck2Square size={20} className='my-auto mr-5' />
            <h1 className=' text-md font-medium'>To-do</h1>
          </ListItem>

          {enrolledList.map(item =>
          (
            <ListItem key={item.id} className=' cursor-pointer flex flex-row hover:bg-slate-300 p-2 rounded-r-[40px]'>
              <BsPersonCircle size={20} className='my-auto mr-5' />
              <h1 className=' text-md font-medium'>{item.className}</h1>
            </ListItem>
          )
          )}

        </List>
      </div>

    </div>
  )
}

export default EnrolledClasses