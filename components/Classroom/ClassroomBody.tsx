import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import React from 'react'
import ClassworkTab from './Classwork/ClassworkTab'
import GradeTab from './Grades/GradeTab'
import PeopleTab from './People/PeopleTab'
import StreamTab from './Stream/StreamTab'

function ClassroomBody() {
    return (
        <div className=''>

            <div className=' justify-center flex flex-row w-full'>
                <Tabs className='w-full' size='lg'>
                    <div className=' justify-center flex flex-row w-full'>
                        
                        <TabList>

                            <Tab>
                                <h1 className='font-medium text-sm'>Stream</h1>
                            </Tab>

                            <Tab>
                                <h1 className='font-medium text-sm'>Classwork</h1>
                            </Tab>

                            <Tab>
                                <h1 className='font-medium text-sm'>People</h1>
                            </Tab>

                            <Tab>
                                <h1 className='font-medium text-sm'>Grades</h1>
                            </Tab>

                        </TabList>
                    
                    </div>

                    <TabPanels className='w-full'>
                        <TabPanel>
                            <StreamTab />
                        </TabPanel>
                        <TabPanel>
                            <ClassworkTab />
                        </TabPanel>
                        <TabPanel>
                            <PeopleTab />
                        </TabPanel>
                        <TabPanel>
                            <GradeTab />
                        </TabPanel>
                    </TabPanels>
                    
                </Tabs>

            </div>

        </div>
    )
}

export default ClassroomBody