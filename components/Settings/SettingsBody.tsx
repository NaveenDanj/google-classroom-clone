import React from 'react'
import NotificationSettings from './NotificationSettings'
import ProfileInfo from './ProfileInfo'

export const SettingsBody = () => {
    return (
        <div className='flex flex-row justify-center'>
            <div className='w-full sm:w-4/5 md:w-3/4 lg:w-[60%]  p-3'>
                <ProfileInfo />
                <NotificationSettings />
            </div>
        </div>
    )
}
