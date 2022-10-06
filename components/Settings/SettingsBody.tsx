import React from 'react'
import ProfileInfo from './ProfileInfo'

export const SettingsBody = () => {
    return (
        <div className='flex flex-row justify-center'>
            <div className='w-full sm:w-4/5 md:w-3/4 lg:w-1/2 p-3'>
                <ProfileInfo />
            </div>
        </div>
    )
}
